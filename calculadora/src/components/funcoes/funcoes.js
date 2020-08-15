const initialState={
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends React.Component{
    state ={...initialState}

    render(){
        return(
            <div>
                ola
            </div>
        )
    }
}