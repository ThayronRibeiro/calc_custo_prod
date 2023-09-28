import { VarInputArea } from "../styles/globalStyle";

interface VariableProps {
    children?: any;
    title?: string;
    value?: number;
    onChange?: any;
}

export const Variable = ({title, value, onChange}:VariableProps) => {
    return (
        <>
        <VarInputArea>
        <p>{title}</p>   
        <input value={value} onChange={onChange}/> 
        </VarInputArea>
        </>   
    )
}

