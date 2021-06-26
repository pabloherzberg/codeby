/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  div {
    position: absolute;
    background: white;
    height: 50%;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    h1 {
    }
    p {
      text-align: center;
    }
    button {
      height: 15vh;
      width: 15vh;
      border-radius: 50%;
      cursor: pointer;
      img {
        object-fit: contain;
        height: 80%;
        width: 80%;
      }
    }
  }
`;
