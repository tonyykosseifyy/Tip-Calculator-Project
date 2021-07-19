import React,{ useState ,useEffect ,createRef } from "react";
import "./App.css";
import styled from 'styled-components' ;
import { BiDollar } from 'react-icons/bi' ;
import { MdSupervisorAccount } from 'react-icons/md' ;


function App() {
  const input = createRef(null) ;
  const secInput = createRef(null) ;
  const tips = [ 5 , 10 , 15 , 25 , 50 ] ;
  const [ billInput , setBillInput ] = useState('') ;
  const [ nb , setNb ] = useState('') ;
  const [ custom , setCustom ] = useState('') ;
  const [ customValue , setCustomV ] = useState('') ;
  console.log('bill input: ' , billInput)
  console.log('nb: ' , nb)
  console.log('custom: ' , custom)
  console.log('customV: ' , customValue)
  console.log('----------------------------------------------')
  const [ tipAmount , setTipAmount ] = useState(0) ; 
  const [ total , setTotal ] = useState(0) ;
  const [ ntfirstLoad , setNtFirstLoad ] = useState(false) ;
  const selectTip = (item) => {
    if ( item === custom ) {
      setCustom('') ;
    }
    else {
      setCustom(item) ;
      setCustomV('')
    }
  }
  const customTip = (e) => {
    setCustomV(e.target.value) ;
    setCustom('') ;
  }
  const reset = () => {
    setCustom('') ;
    setNb('')
    setBillInput('') ;
    setCustomV('') ;
    setCustom('')
    setTipAmount(0) ;
    setTotal(0)
  }
  useEffect(() => {
    let totalTip ;
    let totalPerson ; 
    if( billInput > 0 && nb > 0 && custom || billInput > 0 && nb > 0 && customValue ) {
      
      setNtFirstLoad(true)
      if (custom) {
      totalTip = (custom * billInput) / 100 ;
      setTipAmount( totalTip / nb ) ;
      totalPerson = (billInput * 1 ) + totalTip ;
      setTotal(totalPerson / nb );
      } else if (customValue) {
        totalTip = (customValue * billInput) / 100 ;
        setTipAmount( totalTip / nb ) ;
        totalPerson = (billInput * 1 ) + totalTip ;
        setTotal(totalPerson / nb );
      }
      
    } else return 
  }, [billInput, nb , custom , customValue])
  return (
    <AppWrapper>
      <Title>spli<br/>tier</Title>
      <Main>
        <FormInput>
          <InputContainer>
            <label htmlFor='bill'>Bill</label>
            <div className='input-container' onClick={() => input.current.focus()} >
              <BiDollar />
              <Input ref={input} id='bill' step="0.01" max='10000' pattern=".{6,10}" maxLength={9} value={billInput} onChange={(e) => setBillInput(e.target.value)} />
            </div>
          </InputContainer>

          <InputContainer>
            <label>Select Tip % </label>
            <TipContainer>
              { tips.map((item , index) => (
                <Tip key={index} active={ custom === item ? true : false } onClick={() => selectTip(item)} >{item}%</Tip>
              ))}
              <input type='number' className='custom-tip' value={customValue} onChange={(e) => customTip(e)} placeholder='Custom' />
            </TipContainer>
          </InputContainer>

          <InputContainer>
            <div className='nb-container'>
              <label htmlFor='nb'>Number of People</label>
              <p style={{color:'#B77D72', fontWeight: '700', transition:'.3s ease',display: ntfirstLoad && !nb ? "block" :"none"}}>Can't be zero</p>
            </div>
            <div className='input-container' onClick={() => secInput.current.focus()} style={{border: ntfirstLoad && !nb ? '3px solid #B77D72' : '' }}>
              <MdSupervisorAccount />
              <Input ref={secInput} id='nb' step="0.01" max='1000' pattern=".{6,10}" maxLength={9} value={nb} onChange={(e) => setNb(e.target.value)} />
            </div>
          </InputContainer>
        </FormInput>

        <ResultInput>
          <div>
            <Amount>
              <div className='amount-container'>
                  <h3>Tip Amount</h3>
                  <p>/ person</p>
              </div>
              <h1>${tipAmount.toFixed(2)}</h1>
            </Amount>

            <Amount>
              <div className='amount-container'>
                    <h3>Total</h3>
                    <p>/ person</p>
                </div>
              <h1>${total.toFixed(2)}</h1>
            </Amount>
          </div>
          <Button active={true} onClick={() => reset()}>Reset</Button>
        </ResultInput>
      </Main>
    </AppWrapper>
  );
}


export default App ;


const Button = styled.button`
  font-weight: 700 ;
  font-size: 24px ;
  width: 90% ;
  margin: 0 auto ;
  text-transform: uppercase;
  outline: none ;
  border:none ;
  border-radius: 5px ;
  cursor: pointer ;
  padding: 8px 0 ;
  background-color: ${(props) => props.active ? '#9FE8DF' : '#0D686D'} ;
  color: ${(props) => props.active ? '#004542': '#065F63' } ;
  transition: .3s ease-in ;
  &:hover {
    background-color: ${(props) => props.active ? '#BFEFE9' : ''} ;
  }

`
const AppWrapper = styled.div`
  background-color: #C5E4E7 ; 
  height: 100% ;
  display: flex ;
  flex-direction: column ; 
  align-items: center ;
  justify-content: center ;
  @media (max-width : 860px) {
    height: auto ;
  }
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
  width: 70vw ;
  box-shadow: 15px 15px 20px #bad5d8, -15px -15px 20px #bad5d8;
  padding: 20px ;
  max-width: 1300px;
  @media (max-width: 860px) {
    flex-direction: column ;
    width: 85vw ;
  }
  @media (max-width: 500px) {
    width: 100% ;
    padding: 10px ;
  }
`

const FormInput = styled.form`
  padding-left: 10px ;
  flex: .5 ;
`
const ResultInput = styled.section`
  flex : .5 ;
  background-color: #00474B ;
  border-radius: 15px ;
  margin: 20px 20px 20px 40px ;
  padding: 20px 20px ;
  display: flex ;
  flex-direction: column  ;
  justify-content: space-between ;
  @media (max-width: 500px) {
    margin: 10px 10px 10px 20px ;
  }
  @media (max-width: 350px) {
    margin: 10px 0px 0px 0px ;
  }
`

const Amount = styled.div`
  display: flex ;
  align-items: center ;
  justify-content: space-between ;
  margin: 25px 0 ;
  & > h1 {
    color: #29C4AC;
    font-size: 3rem ;
  }
  @media (max-width: 1230px) {
    & > h1 {
      font-size: 2.2rem ;
    }
  }
  @media (max-width: 700px) {
    & > h1 {
      font-size: 1.7rem ;
    }
  }
`

const TipContainer = styled.div`
  display: grid ;
  grid-template-rows: repeat(2 , 40px) ;
  grid-template-columns: repeat(3 ,calc(33% - 6.5px) );
  grid-gap : 10px ;
  padding-top: 15px ;
`

const Tip = styled.div`
  background-color: ${(props) => props.active ? '#26C2AD' : '#00474B' } ;
  color: ${(props) => props.active ? '#044B52' : 'white' } ;
  border-radius: 5px ;
  cursor: pointer ;
  font-size: 24px ;
  display: flex ;
  align-items: center ;
  justify-content: center ;
  font-weight: 700 ;
  transition: .3s ease-in ;
  min-width: 70px ;
  &:hover {
    background-color: ${(props) => props.active ? '' : '#9FE8DF' } ;
    color: ${(props) => props.active ? '' : 'black' };
  }
`

const InputContainer = styled.div`
  display: flex ;
  flex-direction: column  ;
  margin-bottom: 30px ;
  & label {
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
  min-width: 0 ;
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