import styled from '@emotion/styled'

const device = {
  laptop: `(max-width: 1100px)`,
  mobile: `(max-width: 600px)`,
  mobileS: `(max-width: 400px)`,
}

export const Message = styled.div`
  margin-top: 50px;
  font-weight: 700;
  padding: 40px 20px;
  background-color: #ffa200;
  color: #fff;
  border-radius: 8px;
`

export const DisqusElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  & > input,
  & > textarea {
    font-family: 'Roboto Condensed';
    font-weight: 400;
    letter-spacing: 0;
    font-size: 0.8em;
    color: #777;
    &::placeholder {
      color: #777;
    }

    min-height: 40px;
    max-width: 300px;
    width: 100%;
    background: #f7f0e6;
    position: relative;
    margin: 5px 0px;
    padding: 0px 10px;
    z-index: 1;
    transition: color 0.5s ease-out, background 0.5s ease-out;

    &:hover {
      background: #fff;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }

  & > textarea {
    min-height: 130px;
    max-width: 500px;
    padding-top: 5px;
  }

  & > button {
    cursor: pointer;
    font-family: 'Roboto Condensed';
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 0;

    width: 150px;
    min-height: 30px;
    border-radius: 2px;
    color: #fff;
    background: #6f6f6f;
    margin: 5px 0px;
    padding: 5px;

    backface-visibility: hidden;
    transform-style: preserve-3d;

    transition: all 0.1s ease-in;
    transform: rotate(0deg);
    overflow: hidden;

    &:hover {
      padding-left: 20px;
      width: 180px;
    }

    &:after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      z-index: -1;

      top: 0;
      left: -30px;
      width: 30px;
      height: 100%;
      background: #ff6c00;
      transition: all 0.1s ease-in;
      transform-origin: 0% 0%;
    }

    &:hover:after {
      left: 0px;
    }
  }
`
