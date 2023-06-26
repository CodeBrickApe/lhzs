import React from 'react'
// import './style.css'
import { draw } from '../CanvasMethods/NinthCM'

interface Props {
  title?: string
}
class NinthDE extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }
  componentDidMount() {
    draw()
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className='NinthWrapper'>
        <canvas id="canv"></canvas>
        <div className="sky">
          <div className="clouds">
            <div className="c1 one"></div>
            <div className="c1 two"></div>
            <div className="c1 three"></div>
            <div className="c1 four"></div>
            <div className="c2 one"></div>
            <div className="c2 two"></div>
            <div className="c2 three"></div>
            <div className="c2 four"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default NinthDE