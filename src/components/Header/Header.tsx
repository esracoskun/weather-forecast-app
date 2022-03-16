import React from 'react'
import { HeaderDiv, HeaderTitle} from './styled';

function Header() {
  return (
    <div>
      <HeaderDiv className="header">
        <HeaderTitle className="header-title">Hava Durumu</HeaderTitle>
      </HeaderDiv>
  </div>
  )
}

export default Header;