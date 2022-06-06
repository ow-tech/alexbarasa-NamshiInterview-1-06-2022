import React, { useState,useRef, Component, useEffect } from 'react'
import Board from './Board.js';



function Matrix() {

  const [history, setHistory] = useState()
  const [squares, setSquares] = useState(16)

  const redStyle = {
    backgroundColor: 'red',
};

const blueStyle ={
  backgroundColor:'blue'
}


  let clicked = [];
 
  function handleClick (i, e){
      clicked.push(i.currentTarget)
      if (clicked.length >2){
         let removedElement = clicked.shift();
          removedElement.classList.add('blueStyle')

          for(let d=0; d<clicked.length; d++){       
            clicked[d].classList.add('redStyle')
          }
      }
      else { i.currentTarget.classList.add('redStyle')}
  }
  useEffect(()=>{

  },[clicked, history])

 


  return (
    <div className="matrix">
          <div className="matrixBoard">
              <Board onClick = {(i)=> handleClick(i)} squares={squares}/>

          </div>
    
    </div>
  )
}

export default Matrix


