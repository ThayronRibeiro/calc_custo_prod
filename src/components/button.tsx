import { ButtonStyle } from "../styles/globalStyle";

export interface ButtonProps {
  title?: string;
  success?: boolean;
  onClick?: any;
}

export const Button = ({ title, success, onClick }: ButtonProps) => {
  return <>{success ? <ButtonStyle success onClick={onClick}>{title}</ButtonStyle> : <ButtonStyle onClick={onClick}>{title}</ButtonStyle>}</>;

};
