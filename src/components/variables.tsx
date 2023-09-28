import { VarInputArea } from "../styles/globalStyle";

interface VariableProps {
    children?: any;
    title?: string;
}

export const Variable = ({title}:VariableProps) => {
    return (
        <>
        <VarInputArea>
        <p>{title}</p>   
        <input placeholder="Teste 2"/> 
        </VarInputArea>
        </>   
    )
}

