import React from 'react'
import DynamicEffectTitle from './components/DynamicEffectTitle/DynamicEffectTitle'
import { RenderFirstCanvas, ResetFirstCanvas } from './components/CanvasMethods/FirstCM'
import { RenderSecondCanvas, ResetSecondCanvas } from './components/CanvasMethods/SecondCM'
import { RenderThirdCanvas, ResetThirdCanvas } from './components/CanvasMethods/ThirdCM'
import { RenderFourthCanvas, ResetFourthCanvas } from './components/CanvasMethods/FourthCM'
import { RenderTwelveCanvas, ResetTwelveCanvas } from './components/CanvasMethods/TwelveCM'
import { RenderThirteenCanvas, ResetThirteenCanvas } from './components/CanvasMethods/ThirteenCM'
import { RenderFourteenCanvas, ResetFourteenCanvas } from './components/CanvasMethods/FourteenCM'
import { RenderFifteenCanvas, ResetFifteenCanvas } from './components/CanvasMethods/FifteenCM'
import { DynamicEffectBgWrapper, CanvasWrapper, Canvas } from './styled'
import dynamic from 'next/dynamic'
import TenthDE from './components/TenthDE/TenthDE'
import EleventhDE from './components/EleventhDE/EleventhDE'
import EighthDE from './components/EighthDE/EighthDE'
import SeventhDE from './components/SeventhDE/SeventhDE'
import FifthDE from './components/FifthDE/FifthDE'
const NinthDE = dynamic(() => import('src/components/DynamicEffectBg/components/NinthDE/NinthDE'), { ssr: false })
const SixthDE = dynamic(() => import('./components/SixthDE/SixthDE'), { ssr: false })

interface Props {
  title?: string
}
class DynamicEffectBg extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      current: Math.floor(Math.random() * 14) + 1,
      // current: 14,
      bgcolor: ''
    }
  }
  fetchMethods = (isRender: boolean) => {
    this.setState({ current: this.state.current, bgcolor: '' })
    switch (this.state.current) {
      case 1:
        isRender ? RenderFirstCanvas() : ResetFirstCanvas()
        break
      case 2:
        this.setState({ ...this.state, bgcolor: '#000' })
        isRender ? RenderSecondCanvas() : ResetSecondCanvas()
        break
      case 3:
        isRender ? RenderThirdCanvas() : ResetThirdCanvas()
        break
      case 4:
        this.setState({ ...this.state, bgcolor: '#000', top: 'calc(50%)', left: 'calc(50% - 250px)' })
        isRender ? RenderFourthCanvas() : ResetFourthCanvas()
        break
      case 12:
        isRender ? RenderTwelveCanvas() : ResetTwelveCanvas()
        break
      case 13:
        this.setState({ ...this.state, bgcolor: '#0d2935' })
        isRender ? RenderThirteenCanvas() : ResetThirteenCanvas()
        break
      case 14:
        isRender ? RenderFourteenCanvas() : ResetFourteenCanvas()
        break
      case 15:
        isRender ? RenderFifteenCanvas() : ResetFifteenCanvas()
        break
    }
  }
  componentDidMount() {
    this.fetchMethods(true)
  }
  componentWillUnmount() {
    this.fetchMethods(false)
  }
  render() {
    return (
      <DynamicEffectBgWrapper >
        <DynamicEffectTitle title={this.props.title || ''}></DynamicEffectTitle>
        <CanvasWrapper bgColor={this.state.bgcolor} >
          {[1, 2, 3, 4, 12, 13, 14, 15].indexOf(this.state.current) > -1 && <Canvas id='canvas' width="1500" height="472" top={this.state.top} left={this.state.left} ></Canvas>}
          {this.state.current === 5 && <FifthDE></FifthDE>}
          {this.state.current === 6 && <SixthDE></SixthDE>}
          {this.state.current === 7 && <SeventhDE></SeventhDE>}
          {this.state.current === 8 && <EighthDE></EighthDE>}
          {this.state.current === 9 && <NinthDE></NinthDE>}
          {this.state.current === 10 && <TenthDE></TenthDE>}
          {this.state.current === 11 && <EleventhDE></EleventhDE>}
        </CanvasWrapper>
      </DynamicEffectBgWrapper >
    )
  }
}

export default DynamicEffectBg