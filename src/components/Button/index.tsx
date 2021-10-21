import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

const Button = ({ ...others }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Container {...others} />;
};

export default Button;
