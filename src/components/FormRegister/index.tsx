import styled from "styled-components";
import { Input } from "../Input";
import { theme } from "@/styles/colors";
import { Button } from "../Button";
import InputMask from "react-input-mask";

interface FormRegisterProps {
  id: string;
  className: string;
}
export function FormRegister({ id, className }: FormRegisterProps) {
  return (
    <FormRegisterContainter id={id} className={className}>
      <TitleForm>Register</TitleForm>
      <FormContent>
        <Label htmlFor="name">Name</Label>
        <Input required id="name" type="text" />
        <Label htmlFor="email">Email</Label>
        <Input required id="email" type="email" />
        <Label htmlFor="cell">Cell Phone</Label>
        <InputCell maxLength={11} required id="cell" mask={"(99) 99999-9999"} />
        <Label htmlFor="password">Password</Label>
        <Input required id="password" type="password" />
        <Button>Send</Button>
      </FormContent>
    </FormRegisterContainter>
  );
}

const FormRegisterContainter = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: calc(100% - 48px);
`;
export const Label = styled.label`
  color: ${theme.colorText};
`;
export const TitleForm = styled.h2`
  color: ${theme.colorText};
`;
export const InputCell = styled(InputMask)`
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
