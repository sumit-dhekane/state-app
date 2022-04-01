import React, { useState } from 'react';

function State1(){

    const [num,setNum] = useState(1)

    let myfunction= function(){
        setNum(num+1)
    }
    let Decreamentcount=function(){
        setNum(num-1)
    }

    return (
        <React.Fragment>
            <h1>{num}</h1>
            <button onClick={myfunction}>click me</button>
            <button onClick={Decreamentcount}>Decreamentcount</button>
        </React.Fragment>
    )
}export default State1;