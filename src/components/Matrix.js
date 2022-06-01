import React, { Component } from 'react'
import Board from './Board.js';

export default class Matrix extends Component {
  handleClick() {
    // const history = this.state.history.slice(0, this)
  }
    constructor (props){
        super(props);
        this.state ={
          stepNumber:0,
            history: [
              {squares: Array(16).fill(null)}
            ]
        }
    }
  render() {
      const history = this.state.history;
      const current =history[this.state.stepNumber];
    return (
      <div className="matrix">
          <div className="matrixBoard">
              <Board onClick = {(i)=> this.handleClick(i)} squares ={current.squares}/>

          </div>
    
    </div>
    )
  }
}
