import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: #f4f4f4;
  display: inline-block;
  border: 1px solid #d7d7d7;
  padding: 2px 2px 10px 2px;
  margin-top: 10px;
  margin-bottom: 20px;
  transition: transform 1s ease, border 1s ease;
  width: 70%;
  min-width: 560px;
  @media (max-width: 585px) {
    width: 100%;
    min-width: unset;
  }
  &:hover {
    transform: translate(1px, -3px);
    border: 1px solid #000000;
  }
  & > a:hover {
    background-color: unset !important; /* collides with post.js */
    color: unset !important;
  }

  & > span:first-child {
    min-width: unset !important;
  }

  & div {
    font-size: 1rem;
    color: #000;
    font-weight: 900;
  }
  & > span {
    box-shadow: unset !important;
  }
`
