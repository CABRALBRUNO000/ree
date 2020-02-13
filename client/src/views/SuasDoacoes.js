// !    ARQUIVO criado para confeccionar a pagina de produtos disponiveis para os usuários logados



import React from 'react';
import AbasNav from '../componentes/AbasNavegacão';
import SecaoDeMeusProdutosMinhasDoacoes from './SecaoDeMeusProdutosMinhasDoacoes';
import Styled from 'styled-components';


export default function DoacoesPublicas() {
    return ( 
      <>
      <Container>
          <AbasNav />
          <SecaoDeMeusProdutosMinhasDoacoes /> 
        </Container>    
      </>
    );
}
const Container=Styled.section`
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  align-content: space-around;

`;
