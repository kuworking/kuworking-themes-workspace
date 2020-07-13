import React from 'react'
import styled from '@emotion/styled'
import { CssMasonry } from 'gatsby-theme-kuworking-methods'
import { CtaMain } from './cta'

export const Grid = ({ blogGrid: { core } }) => {
  const data = {}

  core.forEach(({ node: { content, name } }) => {
    data[name] = JSON.parse(content)
  })

  const masonryProps = {
    columns: [['(min-width: 1000px)', '(min-width: 800px)', '(min-width: 600px)'], [5, 4, 3], 2],
    categories: [...new Set(data.items.map(el => el.categories))],
    elements: data.items,
  }

  return (
    <>
      <CtaMain />

      <Title>Items</Title>
      <Div>
        <CssMasonry {...masonryProps}>
          {el => (
            <a href={el.link} target="_blank" rel="noopener noreferrer">
              <div>
                <img src={el.image} />
                <div>{el.name}</div>
                <div>{el.categories}</div>
              </div>
            </a>
          )}
        </CssMasonry>
      </Div>
    </>
  )
}

const q = px => `@media (min-width: ${px}px)`

const Div = styled.div`
  & .cssmasonry_categories {
    margin: 20px 0px;
    display: flex;
    flex-wrap: wrap;

    & > span {
      padding: 10px;
      background: #d5d6c4;
      color: #000;
      border-radius: 8px;

      margin: 5px;
      ${q(700)} {
        margin: 10px;
      }

      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s ease;
      &:hover {
        background: #666;
        color: #fff;
      }
    }
  }

  & .cssmasonry_masonry {
    position: relative;
    align-self: center;
    width: 100%;
    height: 100%;

    & > div {
      transition: transform 0.2s cubic-bezier(0.05, 0.9, 0.69, 0.96);
    }

    & .cssmasonry_masonry_element {
      position: absolute;
      will-change: transform;
      /* This cannot have any padding here, otherwise the gap gets screwed */

      & > div {
        padding: 10px;

        & > a {
          display: block;
          background: #ecece4;
          border-radius: 8px;
          padding: 10px;
          transition: all 0.2s ease;

          &:hover {
            background: linear-gradient(45deg, #ecece4, #add1ea);

            & img {
              filter: brightness(1.2);
            }
          }
        }
      }

      & img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        padding: 10px;
        background: #fff;
      }
    }
  }

  width: 100%;
`

const Title = styled.h1`
  margin-top: 100px;
`
