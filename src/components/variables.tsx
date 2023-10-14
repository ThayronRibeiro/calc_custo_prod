import { VarInputArea, IMaskInputElement } from "../styles/globalStyle";
import  IMaskInput  from 'react-input-mask';

interface VariableProps {
    children?: any;
    title?: string;
    value?: number;
    onChange?: any;
    disabled?: boolean;
}

export const Variable = ({title, value, onChange, disabled }:VariableProps) => {
    return (
        <>
        
        <VarInputArea>
        <p>{title}</p>   
        {/* <IMaskInput value={value} onChange={onChange} mask="999.99" placeholder="0.00"></IMaskInput> */}
        <input value={value} onChange={onChange} type="number" disabled={disabled} />
        </VarInputArea>
        
        </>   
    )
}

