/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: var(--backgroundgradient);
  header {
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid var(--gray) 1px;
    h1 {
      text-align: center;
      font-weight: bold;
      font-size: 1.2em;
      padding-left: 20px;
    }
    img {
      height: 80%;
      object-fit: contain;
    }
  }
  main {
    width: 100%;
    display: flex;
    height: 88vh;
    border-bottom: solid var(--gray) 1px;
    ul {
      height: 100%;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      list-style: none;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 40px;
      li {
        max-width: 800px;
        border: solid var(--gray) 1px;
        border-radius: 2px;
        box-shadow: 2px 2px 4px var(--gray);
        height: 15vh;
        margin: 2vw;
        justify-content: center;
        align-items: center;
        display: flex;
        cursor: pointer;
        transition: 200ms;
        background: linear-gradient(45deg, white, white, white, #9dff98);
        &:hover {
          background: linear-gradient(45deg, white, #9dff98);
          transform: scale(1.05);
        }
        img {
          height: 10vh;
          width: 10vh;
          object-fit: contain;
          box-sizing: content-box !important;
          padding-left: 10px;
        }
        .description {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 75vw;
          height: 25vw;
          margin-left: 2vw;
        }
      }
    }
  }
`;
