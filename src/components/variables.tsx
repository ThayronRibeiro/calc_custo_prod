import { VarInputArea, IMaskInputElement } from "../styles/globalStyle";
import  IMaskInput  from 'react-input-mask';

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
        {/* <IMaskInput value={value} onChange={onChange} mask="999.99" placeholder="0.00"></IMaskInput> */}
        <input value={value} onChange={onChange} type="number"/>
        </VarInputArea>
        
        </>   
    )
}

