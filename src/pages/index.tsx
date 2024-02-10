import styled from "styled-components";
import { theme } from "@/styles/colors";
import { useState } from "react";
import { Checkbox } from "@/components/Checkbox";
import { FormRegister } from "@/components/FormRegister";
import { FormLogin } from "@/components/FormLogin";

export default function Home() {
  const [checked, setChecked] = useState(false);

  return (
    <PageContainer>
      <Header checked={checked}>
        <TitleForm>Login</TitleForm>
        <Checkbox checked={checked} setChecked={setChecked} />
        <TitleForm>Register</TitleForm>
      </Header>
      <PageContent
        checked={checked}
        id="contentForms"
        className={!checked ? "flip" : ""}
      >
        <FormLogin id="front" className="face"/>
        <FormRegister id="back" className="face" />
      </PageContent>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    ${theme.color5},
    ${theme.color4},
    ${theme.color3}
  );
  position: relative;

  #front {
    transform: rotateY(180deg);
  }

  .face {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 8px;
  }

  .flip {
    transform: rotateY(180deg);
  }
`;

const PageContent = styled.div<{ checked: boolean }>`
  transform-style: preserve-3d;
  transition: 500ms;
  width: 500px;
  height: 500px;
  background-color: ${theme.color2};
  border-radius: 8px;
`;

const Header = styled.div<{ checked: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
`;

const TitleForm = styled.h1`
  font-size: 14px;
  color: ${theme.colorText};
`;
