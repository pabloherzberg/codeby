/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(-45deg, pink, white);
  header {
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: solid var(--gray) 1px;
    h1 {
      text-align: center;
      font-weight: bold;
      font-size: 1.2em;
    }
    img {
      height: 80%;
      object-fit: contain;
    }
  }
  main {
    display: flex;
    height: 92vh;
    border-bottom: solid var(--gray) 1px;
    ul {
      height: 100%;
      width: 100%;
      list-style: none;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      padding-top: 40px;
      li {
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
        background: white;
        &:hover {
          background: var(--gray);
          transform: scale(1.05);
        }
        img {
          border: solid var(--gray) 1px;
          height: 10vh;
          width: 10vh;
          object-fit: contain;
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
