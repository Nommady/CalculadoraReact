import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
    height:512px;
    width:100%;
    display: grid;
     grid-template-columns: 25% 25% 25% 25%;
     grid-template-rows: 20% 20% 20% 20% 20%;  
    padding: 10px 20px 50px 20px;    
`
const Button = styled.button`
    border-radius:50%;
    width:60px;
    height:60px;
    margin:5px;
    font-size:35px;
    letter-spacing:2px;
    font-weight:bolder;
    color: #222;
    background-color:#fff;
    box-shadow: 2px 2px 20px 2px rgba(0,0,0,0.15);
    border:none;
    outline:none;
    :active{
        background:#ccc;
    }
`
const Buttonf = styled.button`
    border-radius:50%;
    width:60px;
    height:60px;
    margin:5px;
    font-size:30px;
    letter-spacing:2px;
    font-weight:bolder;
    color: #627CE3;
    border:none;
    background-color:#fff;
    box-shadow: 2px 2px 20px 2px rgba(0,0,0,0.15);
    outline:none;
    :active{
        background:#ccc;
    }
`
const ButtonR = styled.button`
    grid-column:span 2;
    height:60px;
    max-width:370px;
    border-radius:40px;
    margin:5px;
    font-size:40px;
    font-weight:bolder;
    color: #fff;
    border:none;    
    background: linear-gradient(45deg, rgba(109,133,228,1) 0%, rgba(107,131,228,1) 70%, rgba(118,140,229,1) 95%);
    box-shadow: 2px 2px 20px 2px rgba(0,0,0,0.25);
    outline:none;
    :active{
        background: linear-gradient(45deg, rgba(92,109,176,1) 0%, rgba(83,101,173,1) 70%, rgba(70,82,133,1) 95%);
    }
`

export default ()=>{

    return(
        <Buttons>
        {/* <Buttonf>(Ar)</Buttonf>
        <Buttonf>(Rq)</Buttonf> */}
        <Buttonf label="c">c</Buttonf>
        <Buttonf label="+">+/-</Buttonf>
        <Buttonf label="%">%</Buttonf>
        <Buttonf label="*">*</Buttonf>
        <Button id="9">9</Button>
        <Button id="8">8</Button>
        <Button id="7">7</Button>
        <Buttonf label="/">/</Buttonf>
        <Button id="6">6</Button>
        <Button id="5">5</Button>
        <Button id="4">4</Button>
        <Buttonf label="+">+</Buttonf>
        <Button id="3">3</Button>
        <Button id="2">2</Button>
        <Button id="1">1</Button>
        <Buttonf label="-">-</Buttonf>
        <Button id="0">0</Button>
        <Button label=",">,</Button>
        <ButtonR label="=">=</ButtonR>
        </Buttons>
    )
}