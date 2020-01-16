import React from 'react';
import styled from 'styled-components';


import chat from './../../../img/itensCard/chat.png'
import coment from './../../../img/itensCard/coment.png'
import prodCelu from './../../../img/itensCard/prodCelu.jpg'
import share from './../../../img/itensCard/share.png'
import like from './../../../img/itensCard/like.png'
import UserFoto from './../../../img/itensCard/UserFoto.png'




export default function Card() {
  return (
    <>
      
      <CardSection>
          <DivUserProd>
            <User>
              <ImgUser src={UserFoto} alt=""/>
              <H1User>user.1</H1User>
            </User>
            <ImgProd src={prodCelu} alt=""/>
          </DivUserProd>
          <InfoCard>
            <InfoText>
              <PinfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis libero, tincidunt in euismod a, finibus a metus.</PinfoText>
            </InfoText>
            <AcoesCard>
              <ImgAcao src={chat} alt=""/>
              <ImgAcao src={coment} alt=""/>
              <ImgAcao src={like} alt=""/>
              <ImgAcao src={share} alt=""/>
            </AcoesCard>
          </InfoCard>

      </CardSection>

    </>
  );
}

const CardSection = styled.section`
   display:flex;
    max-width:700px;
    min-height:260px;
    padding:10px;
    padding-right:28px;
    background: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin : 0 40px;
    margin-top:50px;

    &:hover{
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
      transition: 0.4s;
    }
`;

const DivUserProd = styled.section`
  display:flex;
  flex-direction:column;
  align-content: center;
  justify-content: flex-start;
`;

const User = styled.div`
display:flex;
align-items:center;
justify-content:start;
margin-left: 10px;
max-width:265px;
background: #FFFFFF;
border-radius: 45.5207px;
`;
const ImgUser = styled.img`
margin-left:2px;
`;
const H1User = styled.h1`
  font-family: Catamaran;
  font-style: normal;
  font-weight: bold;
  font-size: 31.8645px;
  line-height: 52px;
  text-align: center;

  color: #000000;
  margin-left:8px;
`;
const ImgProd = styled.img`
margin:10px;
border-radius:10px;
max-height:200px;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

&:hover{
  max-height:220px;
  transition: 0.5s;
}

`;
const InfoCard = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-left:25px;
`;
const InfoText = styled.div`
    
    background: #FFFFFF;
    border-radius: 4.55207px;
    max-width:190px;
    padding:10px;
    height:auto;
`;
const PinfoText = styled.p`
    display:flex;
    /* flex-wrap:wrap; */
    min-height:20px;
    font-family: Catamaran;
    font-style: normal;
    font-weight: 500;
    min-width: 160px;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
`;
const AcoesCard = styled.section`
display:inline-flex;
justify-content: space-between;
align-items:center;
max-width:190px;

`;
const ImgAcao = styled.img`

`;
