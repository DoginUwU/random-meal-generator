import styled from "styled-components";

const Container = styled.div`
  width: 99vw;
  min-height: 100vh;
  padding: 10em;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;

  img {
    border-radius: 1em;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 1em;
    left: 2em;
    font-size: 1em;
  }

  @media (max-width: 1400px) {
    padding: 7em 5em;
  }

  @media (max-width: 1000px) {
    padding: 7em 1em;

    img {
      margin: 0 auto;
    }
  }
`;

const Categorys = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.75em;
  padding: 0;

  li {
    padding: 0.75em 1em;
    border-radius: 1em;
    background-color: var(--blue);
    list-style: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-0.2em);
    }
  }
`;

const Instructions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;

  p {
    padding: 1em;
    font-weight: lighter;
    text-indent: 1em;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2em;

  h3 {
    font-weight: lighter;
    font-size: 1.5em;
    width: 100%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0.75em;
    padding: 0;
  }

  li {
    padding: 0.75em 1em;
    border-radius: 1em;
    background-color: var(--blue);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2em;

    #measure {
      font-weight: lighter;
    }
  }

  iframe {
    border-radius: 1em;
    border: none;

    width: 800px;
    height: 600px;

    @media (max-width: 1450px) {
      width: 500px;
      height: 300px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;

    ul,
    li {
      width: 100%;
    }

    iframe {
      margin: 0 auto;
      width: 500px;
      height: 300px;
    }
  }
`;

const Loading = styled.h1``;

export { Container, Categorys, Instructions, Ingredients, Loading };
