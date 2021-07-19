import React,{ createRef } from "react";
import "./App.css";
import styled from 'styled-components' ;
import { BiDollar } from 'react-icons/bi' ;

function App() {
  const input = createRef(null)
  return (
    <AppWrapper>
      <Title>spli<br/>tier</Title>
      <Main>
        <FormInput>
          <InputContainer>
            <label htmlFor='bill'>Bill</label>
            <div className='input-container' onClick={() => input.current.focus()} >
              <BiDollar />
              <Input ref={input} id='bill' step="0.01" max='10000' pattern=".{6,10}" maxLength={9} />
            </div>
          </InputContainer>
        </FormInput>
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
  padding: 20px ;
`

const FormInput = styled.form`
  padding-left: 10px ;
`
const ResultInput = styled.section``

const InputContainer = styled.div`
  display: flex ;
  flex-direction: column  ;
  & > label {
    cursor: pointer ;
    color: #57696B ;
    font-weight: 700 ;
  }
`
const Input = styled.input.attrs(props => ({
  type: "number",
  placeholder: '0' ,
}))`
  border: none ;
  outline: none ;
  background-color: #F3F8FB ;
  padding: 10px 15px;
  font-size: 24px ;
  text-align: right; 
  font-family: 'Space Mono', monospace;
  color: #0D4144 ;
  font-weight: 700 ;
  border-radius: 7px ;
  grid-column: 3/4 ;
`;

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