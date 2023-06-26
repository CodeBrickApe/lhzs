import Link from 'next/link'
import React, { useEffect } from 'react'
import { SideContent, SideTitle, TagBox, TagBtn, SideWrapper } from './styled'
import { clearDynamicEffect, renderDynamicEffect } from './dynamicEffect'
import SubHeader from '../SubHeader/SubHeader'
interface Props {
  tagData: API.TagItem[]
}
class TagCloud extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

  }

  componentDidMount() {
    renderDynamicEffect()
  }
  componentWillUnmount() {
    clearDynamicEffect()
  }
  render() {
    return (
      <SideWrapper id="divTags">
        <SubHeader title='标签' icon='tag_1'></SubHeader>
        {/* <SideTitle>标签列表</SideTitle> */}
        <SideContent className='tagBox'>
          {
            this.props.tagData?.map((item: API.TagItem) => (
              <TagBox key={item._id}>
                <Link href={`/post?tag=${item.label}`}>
                  <TagBtn title={item.label}>
                    {item.label}
                  </TagBtn>
                </Link>
              </TagBox>
            ))
          }
        </SideContent>
      </SideWrapper>
    )
  }
}

export default TagCloud