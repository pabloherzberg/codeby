/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  header {
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid var(--gray) 1px;
  }
  main {
    display: flex;
    height: 67vh;
    border-bottom: solid var(--gray) 1px;
    ul {
      height: 100%;
      width: 100%;
      list-style: none;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      li {
        height: 25vw;
        margin: 2vw;
        display: flex;
        img {
          border: solid var(--gray) 1px;
          height: 25vw;
          width: 25vw;
          object-fit: contain;
        }
        .description {
          display: flex;
          flex-direction: column;
          width: 75vw;
          height: 25vw;
          margin-left: 2vw;
          p:nth-child(1) {
            font-weight: 700;
            font-size: 0.7em;
          }
          p:nth-child(2) {
            color: var(--gray);
            font-weight: 700;
            font-size: 0.7em;
          }
          p:nth-child(3) {
            font-size: 0.8em;
          }
          p:nth-child(4) {
            color: var(--gray);
            font-weight: 700;
            font-size: 0.7em;
          }
        }

        #minus {
          display: flex;
          align-items: center;

          span {
            font-size: 0.6em;
            background: #ffcdaa;
            display: flex;
            border-radius: 4px;
            height: 50%;
            align-items: center;
            justify-content: center;
            padding-right: 4px;
          }
          img {
            object-fit: contain;
            height: 50%;
            width: 40px;
            border: none;
          }
        }
      }
      .insuficient {
        background: var(--backgroundgradient);
        .description {
          p:nth-child(4) {
            color: red !important;
            font-weight: 700;
            font-size: 0.7em;
          }
        }
      }
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-bottom: solid var(--gray) 1px;
      .total {
        display: flex;
        width: 90%;
        justify-content: space-between;
        text-align: center;
        font-weight: bold;
        font-size: 1em;
        margin: 3vh 0 3vh 0;
      }
      .discount {
        color: var(--strongGreen);
        background: var(--lightGreen);
        border-radius: 50px;
        padding: 0.3em;
        font-size: 0.8em;
        text-align: center;
        margin: 3vh 0 3vh 0;
        width: 90%;
      }
    }
    button {
      margin: 3vh 0 3vh 0;
      background: #3b74f2;
      cursor: ${({ selectedCandies }) =>
        selectedCandies > 0 ? 'pointer' : ''};
      color: white;
      width: 90%;
      height: 8vh;
      border: none;
      border-radius: 8px;
      font-size: 1.2em;
      font-weight: bold;
    }
  }
`;
