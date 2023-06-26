import React from 'react'
import { CanvasOne, CanvasTwo, SixthDEWrapper } from './styled';
import { RenderSixthCanvas, ResetSixthCanvas } from '../CanvasMethods/SixthCM'
interface Props {
  title?: string
}
class SixthDE extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    RenderSixthCanvas()
  }
  componentWillUnmount() {
    ResetSixthCanvas()
  }
  render() {
    return (
      <SixthDEWrapper>
        <CanvasOne id="canvas" height="400" width="400"></CanvasOne>
        <CanvasTwo id="canv" width="1500" height="472"></CanvasTwo>
      </SixthDEWrapper>
    )
  }
}

export default SixthDE