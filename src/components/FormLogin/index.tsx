import { theme } from "@/styles/colors";
import styled from "styled-components";
import { Input } from "../Input";
import { Button } from "../Button";
import { FormContent, Label, TitleForm } from "../FormRegister";

interface FormLoginProps {
  id: string;
  className: string;
}
export function FormLogin({ id, className }: FormLoginProps) {
  return (
    <FormLoginContainter id={id} className={className}>
      <TitleForm>Login</TitleForm>
      <FormContent>
        <Label htmlFor="email">Email</Label>
        <Input required id="email" type="email" />
        <Label htmlFor="password">Password</Label>
        <Input required id="password" type="password" />

        <Button>Send</Button>
      </FormContent>
    </FormLoginContainter>
  );
}

const FormLoginContainter = styled.div`
  flex-direction: column;
`;
