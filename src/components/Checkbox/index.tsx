import { theme } from "@/styles/colors";
import { SetStateAction, useState } from "react";
import styled from "styled-components";

interface CheckboxProps {
  checked: boolean;
  setChecked: (state: SetStateAction<boolean>) => void;
}
export function Checkbox({ setChecked, checked }: CheckboxProps) {
  return (
    <CheckBoxContainer onClick={() => setChecked(!checked)} checked={checked} />
  );
}

const CheckBoxContainer = styled.div<{ checked: boolean }>`
  width: 60px;
  height: 20px;
  display: flex;
  border-radius: 8px;
  position: relative;
  background: ${theme.color4};

  &::after {
    content: "";
    position: absolute;
    border-radius: 100%;
    height: 100%;
    width: 20px;
    background: ${theme.color1};
    cursor: pointer;
    transition: 500ms;
    left: ${({ checked }) => (!checked ? "0px" : "40px")};
  }
`;
