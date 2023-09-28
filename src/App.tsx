import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import {
  Body,
  Calc,
  HeaderCalc,
  VarAreaCalc,
  ButtonArea,
} from "./styles/globalStyle";
import { theme } from "./styles/Theme.style";
import { Variable } from "./components/variables";
import { Button } from "./components/button";

function App() {
  const variables = [
    { title: "Faturamento Mensal", value: 0 },
    { title: "Custo Fixo Mensal", value: 0 },
    { title: "Simples Nacional", value: 0 },
    { title: "Comissão", value: 0 },
    { title: "PIS", value: 0 },
    { title: "COFINS", value: 0 },
    { title: "IR", value: 0 },
    { title: "CSLL", value: 0 },
    { title: "Outros Custos", value: 0 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Calc>
          <HeaderCalc>
            <h3>Variáveis de Cálculo</h3>
          </HeaderCalc>

          <VarAreaCalc>
            <>
              {variables && (
                <>
                  {variables.map((variables) => {
                    return (
                      <>
                        <Variable title={variables.title} />
                      </>
                    );
                  })}
                </>
              )}
            </>
          </VarAreaCalc>
          <ButtonArea>
            <Button title="Salvar" success />
            <Button title="Limpar" />
          </ButtonArea>
        </Calc>
        <Calc>
          <HeaderCalc>
            <h3>Valores do Produto</h3>
          </HeaderCalc>
          
          <VarAreaCalc>
            <>
              {variables && (
                <>
                  {variables.map((variables) => {
                    return (
                      <>
                        <Variable title={variables.title} />
                      </>
                    );
                  })}
                </>
              )}
            </>
          </VarAreaCalc>
        </Calc>
      </Body>
    </ThemeProvider>
  );
}

export default App;
