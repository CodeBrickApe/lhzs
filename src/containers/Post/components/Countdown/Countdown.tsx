import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import { SideTitle, SideWrapper } from '../TagCloud/styled'
import { IconContainer, Percent, Progress, ProgressDone, Review } from './styled'
interface festivalType {
  [x: number]: string
}
const Countdown: React.FC = () => {
  const render = () => {
    let NewDate = new Date(),
      festival: festivalType = {
        2023: "2023 / 01 / 22 00: 00: 00",
        2024: "2024 / 02 / 10 00: 00: 00",
        2025: "2025 / 01 / 29 00: 00: 00",
        2026: "2026 / 02 / 17 00: 00: 00",
        2027: "2027 / 02 / 07 00: 00: 00",
        2028: "2028 / 01 / 26 00: 00: 00",
        2029: "2029 / 02 / 13 00: 00: 00",
        2030: "2030 / 02 / 02 00: 00: 00",
        2031: "2031 / 01 / 23 00: 00: 00",
        2032: "2032 / 02 / 11 00: 00: 00",
        2033: "2033 / 01 / 31 00: 00: 00",
        2034: "2034 / 02 / 19 00: 00: 00",
        2035: "2035 / 02 / 08 00: 00: 00",
        2036: "2036 / 01 / 28 00: 00: 00",
        2037: "2037 / 02 / 15 00: 00: 00",
      },
      Year = NewDate.getFullYear(),
      hh = NewDate.getHours(),
      mm = NewDate.getMinutes(),
      hhmmt = Number(hh + '.' + mm),
      dd = Number(NewDate.getDay()),
      md = NewDate.getDate(),
      months = new Date(NewDate.getFullYear(), NewDate.getMonth() + 1, 0).getDate(),
      yy = NewDate.getMonth(),
      d1 = festival[Year + 1],
      dateBegin = new Date(d1),
      dateDiff = NewDate.getTime() - dateBegin.getTime(),
      dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)),
      leave1 = dateDiff % (24 * 3600 * 1000),
      hours = Math.floor(leave1 / (3600 * 1000)),
      dayDifft = 365 + dayDiff
    if (dd == 0) {
      dd = 7
    }
    let reviewsTexts = [{
      title: '今天已过去 ' + hh + ' 小时',
      data_done: parseInt((hhmmt / 24 * 100).toString()),
    },
    {
      title: '本周已过去 ' + dd + ' 天',
      data_done: parseInt((dd / 7 * 100).toString())
    },
    {
      title: '本月已过去 ' + md + ' 天',
      data_done: parseInt((md / months * 100).toString())
    },
    {
      title: '今年已过去 ' + yy + ' 个月 零 ' + md + ' 天',
      data_done: parseInt((yy / 12 * 100).toString())
    },
    {
      title: '距' + (Year + 1) + '年春节还剩 ' + Math.abs(dayDiff) + ' 天 ' + Math.abs(hours) + ' 小时',
      data_done: parseInt((dayDifft / 365 * 100).toString())
    }
    ];


    return reviewsTexts
  }
  function progress_done_style(_data_done: number) {
    let color = ''
    _data_done <= 100 && _data_done > 80 ? color = '#d9534f' : ''
    _data_done <= 80 && _data_done > 60 ? color = '#f0ad4e' : '';
    _data_done <= 60 && _data_done > 40 ? color = '#5bc0de' : '';
    _data_done <= 40 && _data_done >= 0 ? color = '#5cb85c' : '';

    return color;
  }
  return (
    <SideWrapper style={{ marginBottom: '1.5rem' }}>
      <SubHeader title='似水流年，不负韶华' icon='hourglass'></SubHeader>
      {
        render().map((item, index) => (
          <Review key={index}>
            <IconContainer>{item.title}</IconContainer>
            <Progress>
              <ProgressDone style={{ width: item.data_done + '%', backgroundColor: progress_done_style(item.data_done), boxShadow: progress_done_style(item.data_done) + ' 0px 2px 5px 0px' }}></ProgressDone>
            </Progress>
            <Percent>{item.data_done} %</Percent>
          </Review>
        ))
      }

    </SideWrapper>
  )
}

export default Countdown