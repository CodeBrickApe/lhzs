import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { Fragment } from 'react'

const DynamicEffectBg = dynamic(() => import('src/components/DynamicEffectBg/DynamicEffect'), { ssr: false })
import { ArchiveWrapper, Day, DayItem, DayList, Month, MonthTxt, Year, YearList } from './styled'
const ArchiveContainer: React.FC = () => {
  const archive = [
    {
      id: 1, year: 2022, months: [
        {
          id: 1, month: 1, days: [
            {
              title: '测试数据',
              createdAt: "28",
              id: "d3c72b59-9d88-4d00-9754-3f606c3e9013",
              pv: 269
            }
          ]
        }
      ]
    },
    {
      id: 2, year: 2021, months: [
        {
          id: 1, month: 1, days: [
            {
              title: '测试数据',
              createdAt: "28",
              id: "d3c72b59-9d88-4d00-9754-3f606c3e9013",
              pv: 269
            }
          ]
        }
      ]
    }
  ]
  return (
    <>
      <DynamicEffectBg title='测试时'></DynamicEffectBg>
      <ArchiveWrapper>
        {
          archive.map(year => (
            <Fragment key={year.id}>
              <Year>{year.year}</Year>
              <YearList>
                {year.months.map(month => (
                  <li key={month.month}>
                    <input
                      id={`archive_${year.id}_${month.month}`}
                      type="checkbox"
                      name="tabs"
                      defaultChecked
                    />
                    <label htmlFor={`archive_${year.id}_${month.month}`}>
                      <Month>
                        <MonthTxt>
                          {month.month}
                          {'. '}({month.days.length}{' '})
                        </MonthTxt>
                      </Month>
                    </label>
                    <DayList className='dayListContainer'>
                      {
                        month.days.map(day => (
                          <DayItem key={day.id}>
                            <Day>{day.createdAt + '：'}  </Day>
                            <Link href={`/post/${day.id}`}>
                              <a>
                                {day.title} ({day.pv} PV )
                              </a>
                            </Link>
                          </DayItem>
                        ))
                      }
                    </DayList>
                  </li>
                ))}
              </YearList>
            </Fragment>
          ))
        }

      </ArchiveWrapper>
    </>
  )
}

export default ArchiveContainer