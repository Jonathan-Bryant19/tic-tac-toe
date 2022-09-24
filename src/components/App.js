import '../App.css'
import { useState, useEffect } from 'react'

function App() {
  const x = require('../assets/X.png')
  const o = require('../assets/O.png')
  const [activePlayer, setActivePlayer] = useState(1)
  const [winner, setWinner] = useState(null)
  const [boardStatus, setBoardStatus] = useState({
    tl: null, tm: null, tr: null, 
    ml: null, mm: null, mr: null,
    bl: null, bm: null, br: null
  })
  const [imageStatus, setImageStatus] = useState({
    tl: null, tm: null, tr: null, 
    ml: null, mm: null, mr: null,
    bl: null, bm: null, br: null
  })
  
  useEffect(() => {
    checkForWinner()
  }, [boardStatus])

  const handleClick = (e) => {
    if (boardStatus[e.target.id] || e.target.id === "") {
      alert("That spot has already been taken. Please choose another spot.")
    } else {
      const value = e.target.id
      activePlayer === 1 ? setActivePlayer(2) : setActivePlayer(1)
      setBoardStatus({
        ...boardStatus,
        [value]: activePlayer
      })
    }
  }

  const checkForWinner = () => {
    if (boardStatus['tl'] === boardStatus['tm'] && boardStatus['tm'] === boardStatus['tr']) {
      if (boardStatus['tl'] !== null) setWinner(boardStatus['tl'])
    } else if (boardStatus['ml'] === boardStatus['mm'] && boardStatus['mm'] === boardStatus['mr']) {
      if (boardStatus['ml'] !== null) setWinner(boardStatus['ml'])
    } else if (boardStatus['bl'] === boardStatus['bm'] && boardStatus['bm'] === boardStatus['br']) {
      if (boardStatus['bl'] !== null) setWinner(boardStatus['bl'])
    } else if (boardStatus['tl'] === boardStatus['ml'] && boardStatus['ml'] === boardStatus['bl']) {
      if (boardStatus['tl'] !== null) setWinner(boardStatus['tl'])
    } else if (boardStatus['tm'] === boardStatus['mm'] && boardStatus['mm'] === boardStatus['bm']) {
      if (boardStatus['tm'] !== null) setWinner(boardStatus['tm'])
    } else if (boardStatus['tr'] === boardStatus['mr'] && boardStatus['mr'] === boardStatus['br']) {
      if (boardStatus['tr'] !== null) setWinner(boardStatus['tr'])
    } else if (boardStatus['tl'] === boardStatus['mm'] && boardStatus['mm'] === boardStatus['br']) {
      if (boardStatus['tl'] !== null) setWinner(boardStatus['tl'])
    } else if (boardStatus['tr'] === boardStatus['mm'] && boardStatus['mm'] === boardStatus['bl']) {
      if (boardStatus['tr'] !== null) setWinner(boardStatus['tr'])
    } else if (Object.values(boardStatus).every(elem => elem !== null)) {
      setWinner('cats')
    }
  }

  const newGame = () => {
    setBoardStatus({
      tl: null, tm: null, tr: null, 
      ml: null, mm: null, mr: null,
      bl: null, bm: null, br: null
    })
    setActivePlayer(1)
    setWinner(null)
  }

  return (
    <div className='container'>
      {/* Main Header */}
      <div className="jumbotron mt-3">
        <h1 className="display-2">Welcome to Tic Tac Toe!</h1>
        <p className="lead">Play a simple game of Tic Tac Toe...</p>
        <hr className="my-4" />
        <p>Press the button to start a new game.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button" onClick={newGame}>New Game</a>
      </div>
      {/* Game Status */}
      <div className='container'>
        <div className='row' align='center'>
          <div className='col'>
            <h1 className='display-4'>{winner ? winner === 'cats' ? `Cats Game!` : `Player ${winner} Wins!!!` : `Player ${activePlayer}'s Turn!`}</h1>
          </div>
        </div>
      </div>
      {/* Game Board */}
      <div className='container my-5'>
        {/* First Row */}
        <div className='row justify-content-center' align='center'>
          <div className='col border-bottom border-end border-dark border-5 tic-box' id='tl' onClick={(e) => handleClick(e)}>
            {boardStatus['tl'] === null ? null : boardStatus['tl'] === 1 ? <img src={x} className='game-image img-fluid'/> : <img src={o} className='game-image img-fluid'/> }
          </div>
          <div className='col border-bottom border-start border-end border-5 border-dark tic-box' id='tm' onClick={handleClick}>
            {boardStatus['tm'] === null ? null : boardStatus['tm'] === 1 ? <img src={x}   className='game-image img-fluid'/> : <img src={o} className='game-image img-fluid'/> }
          </div>
          <div className='col border-start border-bottom border-5 border-dark tic-box' id='tr' onClick={handleClick}>
            {boardStatus['tr'] === null ? null : boardStatus['tr'] === 1 ? <img src={x} className='game-image img-fluid'/> : <img src={o} className='game-image img-fluid'/> }
          </div>
        </div>
        {/* Second Row */}
        <div className='row justify-content-center' align='center'>
          <div className='col border-top border-bottom border-end border-5 border-dark tic-box' id='ml' onClick={handleClick}>
            {boardStatus['ml'] === null ? null : boardStatus['ml'] === 1 ? <img src={x} className='game-image img-fluid'/> : <img src={o} className='game-image img-fluid'/> }
          </div>
          <div className='col border border-5 border-dark tic-box' id='mm' onClick={handleClick}>
            {boardStatus['mm'] === null ? null : boardStatus['mm'] === 1 ? <img src={x} className='game-image img-fluid'/> : <img src={o} className='game-image img-fluid'/> }
          </div>
          <div className='col border-top border-bottom border-start border-5 border-dark tic-box' id='mr' onClick={handleClick}>
            {boardStatus['mr'] === null ? null : boardStatus['mr'] === 1 ? <img src={x} className='game-image img-fluid'/> : <img src={o} className='game-image img-fluid'/> }
          </div>
        </div>
        {/* Third Row */}
        <div className='row justify-content-center' align='center'>
          <div className='col border-top border-end border-5 border-dark tic-box' id='bl' onClick={handleClick}>
            {boardStatus['bl'] === null ? null : boardStatus['bl'] === 1 ? <img src={x} className='game-image img-fluid'/> : <img src={o} className='game-image img-fluid'/> }
          </div>
          <div className='col border-start border-end border-top border-5 border-dark tic-box' id='bm' onClick={handleClick}>
            {boardStatus['bm'] === null ? null : boardStatus['bm'] === 1 ? <img src={x} className='game-image img-fluid'/> : <img src={o} className='game-image img-fluid'/> }
          </div>
          <div className='col border-start border-top border-5 border-dark tic-box' id='br' onClick={handleClick}>
            {boardStatus['br'] === null ? null : boardStatus['br'] === 1 ? <img src={x} className='game-image img-fluid'/> : <img src={o} className='game-image img-fluid'/> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
