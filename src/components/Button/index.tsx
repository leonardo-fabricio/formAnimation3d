import { theme } from "@/styles/colors";
import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
}
export function Button({ children }: ButtonProps) {
  return <ButtonTemplate>{children}</ButtonTemplate>;
}

const ButtonTemplate = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  width: max-content;
  height: 40px;
  padding: 0 24px;
  color: ${theme.colorText};
  background-color: ${theme.color1};
  cursor: pointer;

  :active {
    opacity: 0.8;
  }
`;
