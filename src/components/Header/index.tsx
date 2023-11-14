import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoSvg from "../../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}