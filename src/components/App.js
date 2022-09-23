import '../App.css';
import { useState } from 'react'

function App() {
  const x = require('../assets/X.png')
  const o = require('../assets/O.png')

  const [boardStatus, setBoardStatus] = useState({
    tl: null, tm: null, tr: null, 
    ml: null, mm: null, mr: null,
    bl: null, bm: null, br: null
  })
  // <img src={o} className='game-image img-fluid'/>

  const handleClick = (e) => {
    console.log(e.target.id)
    setBoardStatus(boardStatus[e.target.id] = 'taken')
    console.log(boardStatus)
  }

  return (
    <div className='container'>
      {/* Main Header */}
      <div className="jumbotron mt-3">
        <h1 className="display-4">Welcome to Tic Tac Toe!</h1>
        <p className="lead">Play a simple game of Tic Tac Toe...</p>
        <hr className="my-4" />
        <p>Press the button to start a new game.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
      {/* Add Game Info Text Here */}
      {/* Game Board */}
      <div className='container my-5'>
        {/* First Row */}
        <div className='row justify-content-center' align='center'>
          <div className='col border-bottom border-end border-dark border-5 tic-box' id='tl' onClick={(e) => handleClick(e)}>
            {boardStatus['tl'] === null ? null : <img src={o} className='game-image img-fluid'/>}
          </div>
          <div className='col border-bottom border-start border-end border-5 border-dark tic-box' id='tm' onClick={handleClick}>
            
          </div>
          <div className='col border-start border-bottom border-5 border-dark tic-box' id='tr' onClick={handleClick}>
            
          </div>
        </div>
        {/* Second Row */}
        <div className='row justify-content-center' align='center'>
          <div className='col border-top border-bottom border-end border-5 border-dark tic-box' id='ml' onClick={handleClick}>
            
          </div>
          <div className='col border border-5 border-dark tic-box' id='mm' onClick={handleClick}>
            
          </div>
          <div className='col border-top border-bottom border-start border-5 border-dark tic-box' id='mr' onClick={handleClick}>
            
          </div>
        </div>
        {/* Third Row */}
        <div className='row justify-content-center' align='center'>
          <div className='col border-top border-end border-5 border-dark tic-box' id='bl' onClick={handleClick}>
            
          </div>
          <div className='col border-start border-end border-top border-5 border-dark tic-box' id='bm' onClick={handleClick}>
            
          </div>
          <div className='col border-start border-top border-5 border-dark tic-box' id='br' onClick={handleClick}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
