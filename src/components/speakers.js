import React from 'react'
import styled from 'styled-components'

import { StaticQuery, graphql, Link } from 'gatsby'

import TitleDivider from './titleDivider'

const SpeakersContainer = styled.div`
  margin: 0 auto;
  padding: 6rem 0;
  max-width: 1080px;
  text-align: center;

  @media only screen and (max-width: 767px) {
    padding-bottom: 0;
  }
`

const SpeakersTitle = styled.h2`
  margin-bottom: 0;
  font-size: 4rem;
  color: #FFF;
  text-align: center;
  line-height: 6rem;
`

const SpeakersListWrapper = styled.div`
  margin: 6rem 0 4rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-around;
  }
`

const SpeakersItem = styled.div`
  width: 22rem;
  margin: 0 6rem 4rem;

  @media only screen and (max-width: 767px) {
    width: 32%;
    margin: 0 0 4rem;
  }
`

const SpeakerPhoto = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 0 1rem 0 #000;
`

const SpeakerName = styled.h2`
  margin: 3rem 0 1rem;
  color: #FFF;
  font-size: 2.4rem;
  text-align: center;
  line-height: 3rem;

  @media only screen and (max-width: 767px) {
    margin-top: 2rem;
    font-size: 1.6rem;
  }
`

const SpeakerInfo = styled.p`
  margin: 0;
  color: #FFF;
  font-size: 1.4rem;
  text-align: center;
  line-height: 3rem;

  @media only screen and (max-width: 767px) {
    font-size: 1.2rem;
  }
`

const Tip = styled.div`
  color: #FFF;
  font-size: 3.2rem;
  line-height: 4rem;

  @media only screen and (max-width: 767px) {
    font-size: 2.4rem;
  }
`

const SpeakersList = () => (
  <StaticQuery
    query={graphql`
      query SpeakersQuery {
        allPrismicSpeaker(sort: { fields: [data___order] }) {
          edges {
            node {
              data {
                id
                name
                title {
                  text
                }
                company {
                  text
                }
                photo {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <SpeakersListWrapper>
        {data.allPrismicSpeaker.edges.map(speaker => {
          let { id, name, title, company, photo } = speaker.node.data
          return (
            <SpeakersItem key={id}>
              <Link to={`/speakers/${id}`}>
                <SpeakerPhoto src={photo.url} alt={name} title={name} />
              </Link>
              <SpeakerName>{name}</SpeakerName>
              <SpeakerInfo>{company.text}</SpeakerInfo>
              <SpeakerInfo>{title.text}</SpeakerInfo>
            </SpeakersItem>
          )
        })}
      </SpeakersListWrapper>
    )}
  />
)

const Speakers = () => (
  <SpeakersContainer className="section speakers">
    <SpeakersTitle>
      演讲嘉宾
      <TitleDivider />
    </SpeakersTitle>

    <SpeakersList />

    <Tip>更多嘉宾，敬请期待</Tip>
  </SpeakersContainer>
)

export default Speakers
