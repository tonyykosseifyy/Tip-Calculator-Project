import React from "react";
import "./App.css";
import styled from 'styled-components' ;


function App() {
  return (
    <AppWrapper>
      <Title>spli<br/>tier</Title>
      <Main>
        <FormInput></FormInput>
        <ResultInput></ResultInput>
      </Main>
    </AppWrapper>
  );
}


export default App ;




const AppWrapper = styled.div`
  background-color: #C5E4E7 ; 
  height: 100% ;
  display: flex ;
  flex-direction: column ; 
  align-items: center ;
  justify-content: center ;
`

const Title = styled.h1`
  font-size: 2rem ;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center ;
  color: #3B5F60 ;
  margin-bottom: 30px ;

`
const Main = styled.main`
  display : flex ;
  background-color: white ;
  border-radius: 15px ;
  width: 50vw ;
  height: 300px ;
  box-shadow: 15px 15px 20px #bad5d8, -15px -15px 20px #bad5d8;
`

const FormInput = styled.section`


`
const ResultInput = styled.section`

`

/*
- Strong cyan: hsl(172, 67%, 45%)

- Very dark cyan: hsl(183, 100%, 15%)
- Dark grayish cyan: hsl(186, 14%, 43%)
- Dark grayish cyan: hsl(184, 14%, 56%)
- Light grayish cyan: hsl(185, 41%, 84%)
- Light grayish cyan: hsl(189, 41%, 97%)
- White: hsl(0, 0%, 100%)

- Font size (form inputs): 24px
*/