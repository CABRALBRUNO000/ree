import React from 'react'
import styled from 'styled-components';

import NavPerfil from './../../componentes/NavPerfil';

import HeaderPrivt from './../../componentes/CabecalhoPrivado'
import Config from '../../img/PerfilBiografia/Config.svg';
import User from '../../img/PerfilBiografia/User.png';
import Mapa from '../../img/PerfilBiografia/Mapa.jpg';
import Local from '../../img/PerfilBiografia/Local.png';

export default function BioPerfil() {
    return ( 
        <>
        <HeaderPrivt/>
            <Main>
            
                <NavPerfil/>
                    <Perfil>

                        <MainPessoal>
                            <img  alt = "iconuser"src = { User }weight = "50" heigth = "100"                        width ="100"/>  
                            <MainCol> 
                                <P> João Silva </P> 
                                <img  alt = "imagem de configuracao" src = { Config } />
                            </MainCol> 
                        </MainPessoal> 

                    <MainInfo>

                        <MainCol>

                            <Card>
                                <H1> Altere suas Informações Pessoais </H1> 
                                <Listra>
                                    <Campos>
                                        Nome completo 
                                    </Campos> 
                                    
                                    <Dados/>
                                                                 
                                    </Listra> 
                                <Listra>
                                    <Campos>
                                        Número de celular 
                                    </Campos> 

                                    <Dados/>
                                                                 
                                </Listra> 
                                <Listra>
                                    <Campos>
                                        E - mail 
                                    </Campos> 

                                    <Dados/> 
                            
                                </Listra> 
                                <Listra >
                                    <Campos >
                                        Nome de usuário 
                                    </Campos> 

                                    <Dados/>
                            
                                </Listra> 
                                <Listra>
                                    <Campos>
                                        Senha
                                    </Campos> 

                                    <Dados/>
                            
                                </Listra> <Listra >
                                    <Campos >
                                        Data de nascimento 
                                    </Campos> 

                                    <Dados/>
                              
                                </Listra> 

                                <Listra >
                                    <Campos>
                                        Idade
                                    </Campos> 

                                    <Dados/>
                              
                                </Listra>
                                <Listra >
                                    <Campos >
                                        Participa desde 
                                    </Campos> 

                                    <Dados/>
                              
                                </Listra>
                            </Card> 

                        <Card>
                           <H1 >
                                Altere sua Localidade  
                                <img  alt = "imagemlocal" src = { Local } weight = "50" heigth = "15" width = "15"  /> 
                            </H1> 
                            <DadosLocal >
                                <Campos > Endereço </Campos> 

                                <Dados/>

                            </DadosLocal> 

                            <DadosLocal >
                                <Campos > CEP </Campos> 

                                <Dados/> 

                            </DadosLocal> 

                            <DadosLocal >
                                <Campos > Complemento </Campos> 

                                <Dados/> 

                            </DadosLocal> 

                            <Button type="submit">Salvar</Button>

                        </Card> 
                        </MainCol> 
                    </MainInfo> 
                </Perfil> 
            </Main> 
        </>
    )
}

const Button = styled.button`
    height:60px;
    width:50%; 
    background-image: linear-gradient(to bottom right, rgb(68, 226, 139), rgb(68, 233, 90) );
    display:block;
    margin-top: 40px;
    font-weight:bold;
    font-size:17px;
    color: white;

    &:hover {
    background-image: linear-gradient(to bottom right, rgb(68, 255, 139), rgb(68, 255, 90) );
    cursor: pointer
    }

    @media (max-width:765px){

        margin:10px 100px;
    }

  `
const P = styled.p `
    font-size:30pt;
    font-weight:bolder;
    margin-left:30px;
    color: rgba(0,0,0,0.8);
`

const Perfil = styled.section `
    display:flex;
    flex-direction:column;
    margin: 20px;

    @media (max-width:765px){
        margin:0;
    }
`;

const DadosLocal = styled.ul `
width: 310px;
height: 30px;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
margin: 0 0 10px 0;
display: flex;
justify-content: space-between;

@media (max-width:765px){
    width:250px;
}


`
const Dados = styled.input `
margin:0 3px 0 0;
font-size:10pt;
font-weight: bold;
color:rgba(0, 0, 0, 1);

@media(max-width:765px){
    margin:0;
    padding:2px;
    font-size:8pt;
}
`

const Campos = styled.p `
font-size:10pt;
font-weight: bold;
color:rgba(0, 0, 0, 0.4);

`

const Listra = styled.ul `
width: 410px;
height: 30px;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
margin: 0 0 10px 0;
display: flex;
justify-content: space-between;

@media (max-width:765px){
    width:300px;
}

`

const Card = styled.div `
min-width:450px;
background-color:white;
box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.1);
border-radius: 8px;
margin: 15px;
padding:20px;
/* flex */
display:flex;
flex-direction: column;
align-items: center;

@media (max-width:765px){
    min-width: 300px;
    width:300px;
}

`

const H1 = styled.h1 `
font-family: Catamaran;
font-weight: bold;
font-size: 20pt;
line-height: 85%;
margin: 0 0 15px 0;

@media (max-width:765px){
    font-size: 15pt;
}
`

const MainCol = styled.section `
display:flex;
flex-wrap:wrap;
`

const MainPessoal = styled.section `
margin:3px 0;
display:flex;
justify-content:center;
max-height:100px;
display:flex;
align-items: center;
`

const MainInfo = styled.section `
display:flex;
margin: 10px;

`

const Main = styled.section `
display:flex;
background-color:  white;

@media (max-width:765px){
    display:block;
}
`