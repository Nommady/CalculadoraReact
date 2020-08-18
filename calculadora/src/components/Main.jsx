import React,{Fragment} from 'react'
import Button from './Buttons/Button'
import ButtonOp from './Buttons/ButtonOp'
import ButtonRes from './Buttons/ButtonRes'
import styled from 'styled-components'
// import {initialState} from './funcoes/funcoes'
import '../components/Buttons/buttons.css'

const ButtonsA = styled.div`
    height:412px;
    width:100%;
    display: grid;
     grid-template-columns: 25% 25% 25% 25%;
     grid-template-rows: 20% 20% 20% 20% 20%;  
    padding: 10px 20px 50px 20px;    
`
const Div = styled.div`
    width:100%;
    height:300px;
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;
    `
const Input = styled.div`  
    width:100%;
    display:flex;
    justify-content:flex-end;
    height:50px;
    padding: 0px 40px 0px 40px;
    font-size:35px;
    letter-spacing:2px;
    font-weight:bolder;
    border:none;
    color: #607bE1;
    overflow:hidden;
    `

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
export default class Buttons extends React.Component {
    state=({...initialState})
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    clearMemory(){
        this.setState({...initialState})
    }
    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current:1, clearDisplay:true})
        }else{
            const equals = operation ==='='
            const currentOperations = this.state.operation
            
            const values = [ ...this.state.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperations} ${values[1]}`)
            }catch(e){
                values[0] = this.state.values[0]
            }            
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }
    addDigit(n){
        if(n === "." && this.state.displayValue.includes('.')){
            return
        }
        
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '': this.state.displayValue
        const displayValue = currentValue + n 
        this.setState({displayValue, clearDisplay:false})
        
        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
        }
    }
    render() {
        return (
            <Fragment>
            <Div>
                <Input>{this.state.displayValue}</Input>
            </Div>
            <ButtonsA>
                <ButtonOp label="c"  click={this.clearMemory}/>
                <ButtonOp label="+/-" click={this.setOperation} />
                <ButtonOp label="%"  click={this.setOperation}/>
                <ButtonOp label="*"  click={this.setOperation}/>
                <Button label="9" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="7" click={this.addDigit} />
                <ButtonOp label="/"  click={this.setOperation}/>
                <Button label="6" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="4" click={this.addDigit} />
                <ButtonOp label="+"  click={this.setOperation}/>
                <Button label="3" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="1" click={this.addDigit} />
                <ButtonOp label="-"  click={this.setOperation}/>
                <Button label="0" click={this.addDigit} />
                <Button label="." click={this.addDigit} />
                <ButtonRes label="=" click={this.setOperation}/>
            </ButtonsA>
            </Fragment>
        )
    }
}