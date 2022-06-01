import React, { Component } from 'react'
import Board from './Board.js';

export default class Matrix extends Component {
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber+1)
    const current = history[history.length -1];
    const squares =current.squares.slice()
    squares[i] = this.state.xIsNext? 'X':'0';
    this.setState({
      history:history.concat({
        squares : squares

      })
  })
    // alert(i)
    console.log(i)
    // const history = this.state.history.slice(0, this)
  }
    constructor (props){
        super(props);
        this.state ={
          xIsNext:  true,
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
