import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import {
  Body,
  Calc,
  HeaderCalc,
  VarAreaCalc,
  ButtonArea,
  CustoCompraArea,
  VarInputArea,
  RegimeAreaCalc,
} from "./styles/globalStyle";
import { theme } from "./styles/Theme.style";
import { Variable } from "./components/variables";
import { Button } from "./components/button";

function App() {
  //VARIÁVEIS DE CÁLCULO
  const [fatMensalValue, setFatMensalValue] = useState<number>(0);
  const [custoFixoValue, setCustoFixoValue] = useState<number>(0);
  const [simplesNacValue, setSimplesNacValue] = useState<number>(0);
  const [comissaoValue, setComissaoValue] = useState<number>(0);
  const [pisValue, setPisValue] = useState<number>(0);
  const [cofinsValue, setCofinsValue] = useState<number>(0);
  const [irValue, setIrValue] = useState<number>(0);
  const [csllValue, setCsllValue] = useState<number>(0);
  const [outrosValue, setOutrosValue] = useState<number>(0);

  //VALORES DO PRODUTO
  const [precoCompra, setPrecoCompra] = useState<number>(0);
  const [percIpiCompra, setPercIpiCompra] = useState<number>(0);
  const [percIcmsCompra, setPercIcmsCompra] = useState<number>(0);
  const [valorIcmsSubst, setValorIcmsSubst] = useState<number>(0);
  const [valorFrete, setValorFrete] = useState<number>(0);
  const [percFrete, setPercFrete] = useState<number>(0);

  const [custoCompra, setCustoCompra] = useState<number>(0);
  const [percVendaProd, setPercVendaProd] = useState<number>(0);

  const [percMargemLucro, setPercMargemLucro] = useState<number>(0);
  const [precoSugerido, setPrecoSugerido] = useState<number>(0);

  const [ufIcmsVenda, setUfIcmsVenda] = useState<string>("0");
  const [regimeTrib, setRegimeTrib] = useState<string>("-");

  const variables = [
    {
      title: "Faturamento Mensal",
      value: fatMensalValue,
      setValue: setFatMensalValue,
    },
    {
      title: "Custo Fixo Mensal",
      value: custoFixoValue,
      setValue: setCustoFixoValue,
    },
    {
      title: "Simples Nacional",
      value: simplesNacValue,
      setValue: setSimplesNacValue,
    },
    { title: "Comissão", value: comissaoValue, setValue: setComissaoValue },
    { title: "PIS", value: pisValue, setValue: setPisValue },
    { title: "COFINS", value: cofinsValue, setValue: setCofinsValue },
    { title: "IR", value: irValue, setValue: setIrValue },
    { title: "CSLL", value: csllValue, setValue: setCsllValue },
    { title: "Outros Custos", value: outrosValue, setValue: setOutrosValue },
  ];

  const prodValues = [
    { title: "Preço Compra", value: precoCompra, setValue: setPrecoCompra },
    {
      title: "Perc IPI Compra",
      value: percIpiCompra,
      setValue: setPercIpiCompra,
    },
    {
      title: "Perc ICMS Compra",
      value: percIcmsCompra,
      setValue: setPercIcmsCompra,
    },
    {
      title: "Valor ICMS Subst",
      value: valorIcmsSubst,
      setValue: setValorIcmsSubst,
    },
    { title: "Frete (R$)", value: valorFrete, setValue: setValorFrete },
    { title: "Perc Frete", value: percFrete, setValue: setPercFrete },
  ];

  const UFS = [
    { label: "AC", value: 19 },
    { label: "AL", value: 19 },
    { label: "AM", value: 20 },
    { label: "AP", value: 18 },
    { label: "BA", value: 19 },
    { label: "CE", value: 18 },
    { label: "DF", value: 19 },
    { label: "ES", value: 17 },
    { label: "GO", value: 17 },
    { label: "MA", value: 20 },
    { label: "MT", value: 17 },
    { label: "MG", value: 18 },
    { label: "PA", value: 19 },
    { label: "PB", value: 18 },
    { label: "PE", value: 18 },
    { label: "PI", value: 21 },
    { label: "PR", value: 19 },
    { label: "RN", value: 20 },
    { label: "RS", value: 17 },
    { label: "RJ", value: 20 },
    { label: "RO", value: 17.5 },
    { label: "RR", value: 20 },
    { label: "SC", value: 17 },
    { label: "SP", value: 18 },
    { label: "SE", value: 22 },
    { label: "TO", value: 20 },
  ];

  useEffect(() => {
    let percCustoFixoMensal = (custoFixoValue / fatMensalValue) * 100;

    let percVenda =
      percCustoFixoMensal +
      Number(simplesNacValue) +
      Number(comissaoValue) +
      Number(pisValue) +
      Number(cofinsValue) +
      Number(irValue) +
      Number(csllValue) +
      Number(outrosValue);

    let custoCompraValor: number = 0;

    if (regimeTrib === "simplesNacional") {
      /*setPisValue(0);
      setCofinsValue(0);*/
      if (
        percIpiCompra === 0 &&
        percIcmsCompra === 0 &&
        valorIcmsSubst === 0 &&
        valorFrete === 0 &&
        percFrete === 0
      ) {
        setCustoCompra(precoCompra);
      } else {
        custoCompraValor =
          Number(precoCompra) +
          Number((precoCompra * percIpiCompra) / 100) +
          Number(valorFrete);

        let difalIcmsOrigem = percIcmsCompra * (custoCompraValor / 100);
        let difalBaseCalc =
          (custoCompraValor - difalIcmsOrigem) /
          (1 - Number(ufIcmsVenda) / 100);
        let difalVal =
          (difalBaseCalc * (Number(ufIcmsVenda) - percIcmsCompra)) / 100;

        let custoCompra =
          Number(precoCompra) +
          Number((precoCompra * percIpiCompra) / 100) / 1 +
          (Number(valorFrete) + Number(valorIcmsSubst) + Number(difalVal));

        setCustoCompra(Number(custoCompra.toFixed(2)));
      }
    } else if (regimeTrib === "lucroReal") {
      setPisValue(3);
      setCofinsValue(7.6);
    }

    //PRECO SUGERIDO
    let divisor = 100 - Number(percVenda) - Number(percMargemLucro);

    if(Number.isNaN(percVenda) || percMargemLucro === 0){
      setPrecoSugerido(precoCompra)
    }
    if (Number.isNaN(percVenda) || percMargemLucro>0){
      divisor = 100 - percMargemLucro;
      let precoSugerido = Number(custoCompra / divisor) * 100;
      setPrecoSugerido(Number(precoSugerido.toFixed(2)));
    }
    if(Number(percVenda)>0 && percMargemLucro>0){
      divisor = 100 - percVenda - percMargemLucro;
      let precoSugerido = Number(custoCompra / divisor) * 100;
      setPrecoSugerido(Number(precoSugerido.toFixed(2)));
    }
    /*
    if(Number.isNaN(percVenda) === false && precoCompra > 0 ||
    percMargemLucro > 0 && precoCompra>0){
      let precoSugerido = Number(custoCompra / divisor) * 100;
      setPrecoSugerido(Number(precoSugerido.toFixed(2)));
    }
*/
/*
    if(Number.isNaN(percVenda) && percMargemLucro===0 && precoCompra>0){
      setPrecoSugerido(precoCompra);
    } else if (
      (Number.isNaN(percVenda) === false ||
      percMargemLucro > 0 )
    ) {
      let precoSugerido = Number(custoCompra / divisor) * 100;
      setPrecoSugerido(Number(precoSugerido.toFixed(2)));
    } else {
      setPrecoSugerido(custoCompra);
    }*/
  }, [
    percMargemLucro,
    simplesNacValue,
    comissaoValue,
    pisValue,
    cofinsValue,
    irValue,
    csllValue,
    outrosValue,
    precoSugerido,
    percVendaProd,
    percIpiCompra,
    percIcmsCompra,
    percFrete,
    valorFrete,
    valorIcmsSubst,
    fatMensalValue,
    custoFixoValue,
    ufIcmsVenda,
    regimeTrib,
    precoCompra,
    custoCompra
  ]);

  useEffect(() => {
    if (valorFrete > 0 && precoCompra > 0) {
      let percFrete = (valorFrete / precoCompra) * 100;
      setPercFrete(Number(percFrete.toFixed(2)));
    } else {
      setPercFrete(0);
    }
  }, [valorFrete, precoCompra]);



  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Calc>
          <HeaderCalc>
            <h3>Variáveis de Cálculo</h3>
          </HeaderCalc>

          <RegimeAreaCalc>
            <label>Selecione seu regime tributário</label>
            <select
              name="regimeTrib"
              defaultValue="-"
              onChange={(e) => setRegimeTrib(e.target.value)}
            >
              <option value={"null"}>-</option>;
              <option value={"simplesNacional"}>Simples Nacional</option>;
              <option value={"lucroReal"}>Regime Normal Lucro Real</option>;
              <option value={"lucroPresumido"}>
                Regime Normal Lucro Presumido
              </option>
              ;
            </select>
            <p>Selecione a UF da empresa</p>
            <select
              name="UF"
              defaultValue="Selecione a UF"
              onChange={(e) => setUfIcmsVenda(e.target.value)}
            >
              <option value={0}>Selecione a UF</option>;
              <option value={19}>AC</option>;<option value={19}>AL</option>;
              <option value={20}>AM</option>;<option value={18}>AP</option>;
              <option value={19}>BA</option>;<option value={18}>CE</option>;
              <option value={19}>DF</option>;<option value={17}>ES</option>;
              <option value={17}>GO</option>;<option value={20}>MA</option>;
              <option value={17}>MT</option>;<option value={18}>MG</option>;
              <option value={19}>PA</option>;<option value={18}>PB</option>;
              <option value={18}>PE</option>;<option value={21}>PI</option>;
              <option value={19}>PR</option>;<option value={20}>RN</option>;
              <option value={17}>RS</option>;<option value={20}>RJ</option>;
              <option value={17.5}>RO</option>;<option value={20}>RR</option>;
              <option value={17}>SC</option>;<option value={18}>SP</option>;
              <option value={22}>SE</option>;<option value={20}>TO</option>;
            </select>
          </RegimeAreaCalc>

          <VarAreaCalc>
            <>
              {variables && (
                <>
                  {variables.map((variables) => {
                    return (
                      <>
                        <Variable
                          title={variables.title}
                          value={variables.value}
                          onChange={(e: any) => {
                            variables.setValue(e.target.value);
                          }}
                        />
                      </>
                    );
                  })}
                </>
              )}
            </>
          </VarAreaCalc>
          <ButtonArea>
            <Button title="Salvar" success />
            <Button
              title="Limpar"
              onClick={() => {
                setFatMensalValue(0);
                setCustoFixoValue(0);
                setSimplesNacValue(0);
                setComissaoValue(0);
                setPisValue(0);
                setCofinsValue(0);
                setIrValue(0);
                setCsllValue(0);
                setOutrosValue(0);
              }}
            />
          </ButtonArea>
        </Calc>
        <Calc>
          <HeaderCalc>
            <h3>Valores do Produto</h3>
          </HeaderCalc>
          <VarAreaCalc>
            <>
              {prodValues && (
                <>
                  {prodValues.map((prodValues) => {
                    return (
                      <>
                        <Variable
                          title={prodValues.title}
                          value={prodValues.value}
                          onChange={(e: any) => {
                            prodValues.setValue(e.target.value);
                          }}
                        />
                      </>
                    );
                  })}
                </>
              )}
            </>
          </VarAreaCalc>

          <CustoCompraArea>
            <VarInputArea>
              <p>Custo Compra</p>
              <input disabled value={custoCompra} />
            </VarInputArea>
            <VarInputArea>
              <p>Margem de Lucro</p>
              <input
                onChange={(e: any) => {
                  setPercMargemLucro(e.target.value);
                }}
                value={percMargemLucro}
              ></input>
            </VarInputArea>
            
            <VarInputArea>
              <p>Preço de Venda Sugerido</p>
              <input disabled value={precoSugerido}></input>
            </VarInputArea>
          </CustoCompraArea>
        </Calc>
      </Body>
    </ThemeProvider>
  );
}

export default App;
