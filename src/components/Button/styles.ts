import styled from "styled-components";

const Container = styled.button`
  padding: 1em 2em;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 1em;
  background-color: var(--blue);
  color: var(--white);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px -1px 15px 5px var(--black-430);
    transform: scale(1.1);
  }
`;

export { Container };
