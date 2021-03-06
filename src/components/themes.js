import React from 'react'
import styled from 'styled-components'

import IconCalc from '../images/icon-calc.png'
import IconData from '../images/icon-data.png'
import IconBlock from '../images/icon-block.png'

import TitleDivider from './titleDivider'

const ThemesContainer = styled.div`
  padding: 6rem 0;
  text-align: center;

  @media only screen and (max-width: 767px) {
    padding-bottom: 0;
  }
`

const ThemesTitle = styled.h2`
  margin-bottom: 0;
  font-size: 4rem;
  color: #FFF;
  text-align: center;
  line-height: 6rem;
`

const ThemesInner = styled.div`
  margin: 8rem 0 4rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 900px) {
    margin-bottom: 0;
  }
`

const ThemesItem = styled.div`
  width: 300px;
  box-sizing: border-box;

  @media only screen and (max-width: 900px) {
    width: 240px;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  @media only screen and (max-width: 767px) {
    width: 120px;
  }
`

const ThemesItemIcon = styled.img`
  height: 140px;

  @media only screen and (max-width: 767px) {
    height: 80px;
  }
`

const ThemesItemTitle = styled.h2`
  margin: 0;
  margin-top: 1.2rem;
  color: #FFF;
  font-size: 3rem;
  text-align: center;

  @media only screen and (max-width: 767px) {
    font-size: 2rem;
  }
`

const data = [
  { title: '云计算', icon: IconCalc },
  { title: '人工智能与大数据', icon: IconData },
  { title: '区块链', icon: IconBlock }
]

const Themes = () => (
  <ThemesContainer className="section themes">
    <ThemesTitle>
      三大技术主题
      <TitleDivider />
    </ThemesTitle>

    <ThemesInner className="clearfix">
      {data.map((d, i) => (
        <ThemesItem key={i}>
          <ThemesItemIcon
            src={d.icon}
            title={d.title}
            alt={d.title}
          />

          <ThemesItemTitle>
            {d.title}
          </ThemesItemTitle>
        </ThemesItem>
      ))}
    </ThemesInner>
  </ThemesContainer>
)

export default Themes
