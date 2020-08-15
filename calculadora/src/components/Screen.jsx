import React from 'react'
import styled from 'styled-components'


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
export default (props)=>{

    return(
        <Div>
            <Input  type="text">{props.value}</Input>
        </Div>
        
    )
}