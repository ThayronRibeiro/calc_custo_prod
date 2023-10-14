import styled from "styled-components";
import { ButtonProps } from "../components/button";
import Select from "react-select";
import  IMaskInput  from 'react-input-mask';

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const Body = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

  @media screen and (${device.laptopL}) {
    flex-direction: row;
  }


  @media screen and (${device.laptop}) {
    flex-direction: column;
    width: 100vw;
    height: auto;
  }
`;

export const Calc = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.ligth};
  width: 42vw;
  height: auto;
  margin: 0px 45px;
  border-radius: 15px;
  -webkit-box-shadow: 7px 9px 30px -8px rgba(59, 59, 59, 1);
  -moz-box-shadow: 7px 9px 30px -8px rgba(59, 59, 59, 1);
  box-shadow: 7px 9px 30px -8px rgba(59, 59, 59, 1);

  &:nth-child(2) {
    height: auto;
  }

  @media screen and (${device.laptopL}) {
    width: 80vw;
    height: auto;
    margin: 2rem 15px;
  }

  @media screen and (${device.laptop}) {
    width: 80vw;
    height: auto;
    margin: 2rem 15px;
  }
/* 
  @media screen and (${device.laptop}) {
    width: 65vw;
    height: 100%;
  }

  @media screen and (${device.mobileL}) {
    height: 100%;
    width: 85vw;

  } */


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
    color: #000;
    font-size: 1.8rem;
  }
`;

export const RegimeAreaCalc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin-top: 1rem;

  select {
    margin: 0px;
    height: 30px;
    border: 2px solid ${(props) => props.theme.color.ligth};
    border-radius: 5px;
    padding: 0 5px;
    color: #000;
  }

  p {
    margin: 0;
  }
`;

export const VarAreaCalc = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 10px 15px;

  @media screen and (${device.laptopL}) {
    grid-template-columns: 2fr 2fr 2fr;
  }

  @media screen and (${device.laptop}) {
    grid-template-columns: 2fr;
  }
`;

interface VarInputAreaProps {
  disabled?: boolean;
}

export const VarInputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //padding: 0 15px;

  p {
    margin: 0;
  }

  input {
    height: 25px;
    border: 2px solid ${(props) => props.theme.color.ligth};
    border-radius: 5px;
    padding: 0 5px;
  }

  input:focus {
    outline: none !important;
    border: 2px solid ${(props) => props.theme.color.primary};
  }

  input:disabled {
    background-color: #f3f3f3;
  }

  select {
    height: 30px;
    border: 2px solid ${(props) => props.theme.color.ligth};
    border-radius: 5px;
    padding: 0 5px;
    color: #000;
  }

  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;

export const SelectInput = styled(Select)`
  height: 30px;
  border: 2px solid ${(props) => props.theme.color.ligth};
  border-radius: 5px;
  padding: 0 5px;
  color: #000;
`;

export const ButtonArea = styled.div`
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
  gap: 20px;
  margin: 10px 15px;

  p {
    font-weight: bolder;
  }

  @media screen and (${device.laptopL}) {
    grid-template-columns: 2fr 2fr;
  }

  @media screen and (${device.laptop}) {
    grid-template-columns: 2fr;
  }
`;

export const IMaskInputElement = styled(IMaskInput)`
    height: 25px;
    border: 2px solid ${(props) => props.theme.color.ligth};
    border-radius: 5px;
    padding: 0 5px;

    &:focus {
    outline: none !important;
    border: 2px solid ${(props) => props.theme.color.primary};
  }

  &:disabled {
    background-color: #f3f3f3;
  }
`