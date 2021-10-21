import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;

  p {
    font-weight: lighter;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5em;
    }

    padding: 1em;
  }
`;

export { Container };
