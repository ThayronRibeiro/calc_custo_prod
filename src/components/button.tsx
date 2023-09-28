import { ButtonStyle } from "../styles/globalStyle";

export interface ButtonProps {
  title?: string;
  success?: boolean;
}

export const Button = ({ title, success }: ButtonProps) => {
  //return <>{success ? <ButtonStyle success>{title}</ButtonStyle> : <ButtonStyle>{title}</ButtonStyle>}</>;
  return (
    <>
    <ButtonStyle success>{title}</ButtonStyle>
    </>
  )
};
