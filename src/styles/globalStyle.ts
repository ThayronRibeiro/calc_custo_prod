import styled from "styled-components";
import { ButtonProps } from "../components/button";
import Select from "react-select";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(36, 78, 219);
  background: linear-gradient(
    90deg,
    rgba(36, 78, 219, 1) 0%,
    rgba(36, 74, 219, 1) 49%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

export const Calc = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.ligth};
  width: 42vw;
  height: 88vh;
  margin: 0px 45px;
  border-radius: 15px;
  -webkit-box-shadow: 7px 9px 30px -8px rgba(59, 59, 59, 1);
  -moz-box-shadow: 7px 9px 30px -8px rgba(59, 59, 59, 1);
  box-shadow: 7px 9px 30px -8px rgba(59, 59, 59, 1);
`;

export const HeaderCalc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.ligth};
  height: 15%;
  width: 100%;
  border-radius: 15px 15px 0 0;
  border-bottom: 1px solid #fff;

  h3 {
    color: red;
    font-size: 1.8rem;
  }
`;

export const RegimeAreaCalc = styled.div`
display: flex;
flex-direction: column;
padding: 0 15px;
margin-top: 1rem;

select{
    height: 30px;
    border: 2px solid ${(props) => props.theme.color.ligth};
    border-radius: 5px;
    padding: 0 5px;
    color: #000;
  }
`

export const VarAreaCalc = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 1rem;
`;

export const VarInputArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  input {
    height: 30px;
    border: 2px solid ${(props) => props.theme.color.ligth};
    border-radius: 5px;
    padding: 0 5px;
  }

  input:focus {
    outline: none !important;
    border: 2px solid ${(props) => props.theme.color.primary};
  }

  input:disabled{
    background-color: #f3f3f3;
  }

  select{
    height: 30px;
    border: 2px solid ${(props) => props.theme.color.ligth};
    border-radius: 5px;
    padding: 0 5px;
    color: #000;
  }
`;

export const SelectInput = styled(Select)`
    height: 30px;
    border: 2px solid ${(props) => props.theme.color.ligth};
    border-radius: 5px;
    padding: 0 5px;
    color: #000;
`

export const ButtonArea = styled.div`
position: absolute;
bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 100%;
`;

export const ButtonStyle = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  background-color: ${(props) =>
    props.success ? props.theme.color.success : props.theme.color.primary};
  color: ${(props) => props.theme.color.ligth};
  font-size: 1.2rem;
  width: 8rem;
  height: 3.5rem;
  margin: 15px 20px;
  transition: all ease 0.5s;
  border-radius: 10px;

  &:hover {
    opacity: 0.5;
  }
`;

export const CustoCompraArea = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: 100%;

p {
    font-weight: bolder;
}

`
