import { Button, Snackbar } from '@mui/material'
import React, { useRef, useState } from 'react'
import reactSyntaxHighlighter from 'react-syntax-highlighter'
import { useMap } from 'react-use'
import IconInput from 'src/components/IconInput/IconInput'
import toast from 'src/components/Toast/Toast'
import SubTitle from 'src/containers/Home/components/SubTitle'
import { postAddEssayRemark, useEssayRemarkList } from 'src/services/essay/index'
import Comment from '../Comment/Comment'
import { DiscussionWrapper, SendWrapper, TextArea } from './styled'
interface Props {
  essayId: string
  essayTitle: string
}
const Discussion: React.FC<Props> = ({ essayId, essayTitle }) => {
  const inputRef = useRef();
  const [textAreaPlaceholder, setTextAreaPlaceholdera] = useState('')
  const [discussion, discussionAction] = useMap({
    userName: '',
    remark: '',
    parentId: '',
    replyTo: '',
    email: '',
  })
  const handleChangeRemark = (event: any) => {
    event.target.value = event.target.value.substring(0, 200)
    discussionAction.set('remark', event.target.value)
  }
  const [remarkData, { mutate, isValidating }] = useEssayRemarkList({ essayId })

  const handleRelease = () => {

    if (!discussion.userName || !discussion.remark) {
      let msg = !discussion.userName ? '用户名不能为空哦！' : '评论内容不能为空哦！'
      toast.error(msg)
      return false
    }
    const { userName, remark, replyTo, email, parentId } = discussion
    let params = {
      parentId: parentId || '-1',
      isMarkRead: false,
      isBlogger: false,
      replyTo,
      essayId,
      essayTitle,
      userName,
      remark,
      email
    }
    postAddEssayRemark(params).then(res => {
      mutate()
    })
  }
  const handleResetReply = () => {
    discussionAction.setAll({
      userName: '',
      remark: '',
      parentId: '',
      replyTo: '',
      email: '',
    })
    setTextAreaPlaceholdera('')
  }
  // 点回复按钮
  const handleReply = (remark: API.IEssayRemark) => {
    const { userName, parentId } = remark
    setTextAreaPlaceholdera(`回复用户：${userName}`)
    let newDiscussion = {
      ...discussion,
      replyTo: userName || '',
      parentId: parentId || ''
    }
    discussionAction.setAll(newDiscussion)
    let anchorElement = document.getElementById('sendDiscussion');;
    let nameInput = document.getElementById("nameInput");
    // 输入框获取焦点
    nameInput && nameInput.focus()
    // 如果对应id的锚点存在，就跳转到锚点
    anchorElement && anchorElement.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
  return (
    <DiscussionWrapper>
      <SubTitle domId='sendDiscussion' icon='message' mediaHidden={false} title='发布讨论'></SubTitle>
      <IconInput value={discussion.userName} placeholder='请输入你的名字或者昵称' inputId='nameInput' icon='user' onChange={(val: string) => { discussionAction.set('userName', val) }}></IconInput>
      <IconInput value={discussion.email} placeholder='请输入你的Email' icon='email' onChange={(val: string) => { discussionAction.set('email', val) }}></IconInput>
      <TextArea placeholder={textAreaPlaceholder || '请输入评论 不能超过500个文字哟'} value={discussion.remark} max-length='200' rows={6} onChange={handleChangeRemark}
        onKeyDown={handleChangeRemark} onKeyUp={handleChangeRemark}></TextArea>
      <SendWrapper>
        <Button size="small" variant="contained" onClick={handleRelease}>发布</Button>
        <Button size="small" variant="outlined" onClick={handleResetReply}>重置</Button>
      </SendWrapper>
      <SubTitle icon='allTalk' mt='0' mediaHidden={false} title='全部评论' after={`${remarkData?.total}条评论`}></SubTitle>
      {
        remarkData?.list.map((item: API.IEssayRemark) => {
          return <Comment handleReply={handleReply} key={item._id} remark={{ ...item, parentId: item._id }}>
            {
              item?.children && item?.children.map((value: any) => {
                return <Comment handleReply={handleReply} key={value._id} remark={{ ...value, parentId: item._id }}></Comment>
              })
            }

          </Comment>
        })
      }
    </DiscussionWrapper >
  )
}

export default Discussion