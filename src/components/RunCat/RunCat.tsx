import React, { useRef } from 'react'
import styled, { keyframes } from "styled-components";
import throttle from 'lodash.throttle';
const scroll = keyframes`
0%{
		background-position:0 0;}
	100%{
		/* background-position:-1600px 0; */
		background-position:-2600px 0;
    }
`
const RunCatWrapper = styled.div<Props>` 
 
  position: fixed;
  z-index: 99999999;
  bottom: 0rem;
  right:2rem;
  width:200px;
	height:126px;
  margin-left: -100px;
	/* background:url(http://www.mrszhao.com/zb_users/upload/2018/06/stepsanimation/images/bear.png) no-repeat 0 0;
	animation:${scroll} 1s steps(8,end) infinite ; */

	background:url(${({ theme }) => theme.cat} ) no-repeat 0 0;
	animation:${scroll} 1s steps(13) infinite ;
  animation-play-state:${(props => props.animation)};
  -webkit-animation-play-state:${(props => props.animation)};
  /* :hover{
    animation-play-state:paused;
    -webkit-animation-play-state:paused;
  } */
`




interface Props {
  animation?: string
}

class RunCat extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      timer: null,
      animation: 'paused'
    }
  }
  // 组件加载时
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true)
  }
  // 组件卸载时
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
  // 监听滚动
  handleScroll = throttle(() => {
    clearTimeout(this.state.timer);
    const el = document.querySelector('.redpacket-icon');
    // console.log('页面滑动');
    this.setState({ ...this.state, animation: 'running' })
    this.setState({
      timer: setTimeout(() => {
        // console.log(' 页面静止');
        this.setState({ ...this.state, animation: 'paused' })
      }, 500)
    })
  }, 100);
  render() {
    return (
      <RunCatWrapper animation={this.state.animation}></RunCatWrapper>
    )
  }
}

export default RunCat