import { theme } from "@/styles/colors";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps){
    return <InputTemplate {...props}/>
}

const InputTemplate = styled.input`
  width: calc(100% - 24px);
  height: 40px;
  background-color: ${theme.color3};
  border: 0;
  padding: 0;
  border-radius: 8px;
  outline: 0;
  padding: 0 12px;
  color: ${theme.colorText};
`;