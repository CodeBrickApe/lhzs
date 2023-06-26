import React from 'react'
import { Icon } from '../Icon/Icon'
import { DayNight, SVG, SwitchThemeBox } from './styled'


interface Props {
  theme: string
  onToggle: Function
}
const SwitchTheme: React.FC<Props> = (props) => {
  const { onToggle, theme } = props
  return (
    <SwitchThemeBox className='SwitchTheme'>
      <div id='SwitchThemeWrapper' className={theme === 'light' ? 'light switch' : 'dark'} >
        <label htmlFor="switch">
          <input type="checkbox" onChange={() => {
            // document.querySelector('#SwitchThemeWrapper')?.classList.toggle('switch');
            onToggle()
          }} id="switch"></input>
          <div className="toggle-wrapper">
            <DayNight>
              <SVG lightTheme={theme === 'light'}>
                <Icon name='night' size='2.2rem'></Icon>
              </SVG>
              <SVG lightTheme={theme === 'light'}>
                <Icon name='day' size='2.2rem'></Icon>
              </SVG>
            </DayNight>
            <div className="tree-left">
              <div className="tree"></div>
              <div className="trunk">
                <div className="branch"></div>
                <div className="branch"></div>
              </div>
            </div>
            <div className="tree-right">
              <div className="tree-back">
                <div className="trunk"></div>
              </div>
              <div className="tree-front">
                <div className="trunk"></div>
              </div>
            </div>
            <div className="moon"></div>
            <div className="stars">
              <div className="star big-star">
                <div className="vertical"></div>
                <div className="horizontal"></div>
              </div>
              <div className="star small-star">
                <div className="vertical"></div>
                <div className="horizontal"></div>
              </div>
            </div>
            <div className="sun"></div>
            <div className="hills">
              <div className="hill-left"></div>
              <div className="hill-right"></div>
            </div>
          </div>
        </label>
      </div>
    </SwitchThemeBox>
  )
}

export default SwitchTheme