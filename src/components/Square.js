import React from 'react'

export default function Square(props) {
  return (
    <button className="square"onClick ={props.onClick} value= {props.value} id={props.value}squares ={props.squares}>
        {props.value}
    </button>
  )
}
