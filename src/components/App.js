import '../App.css'
import { useState, useEffect } from 'react'

function App() {
  const x = require('../assets/X.png')
  const o = require('../assets/O.png')
  const redO = require('../assets/red_O.png')
  const redX = require('../assets/red_X.png')
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
      if (activePlayer === 1) {
        setActivePlayer(2)
        setImageStatus({
          ...imageStatus,
          [value]: x
        })
      } else {
        setActivePlayer(1)
        setImageStatus({
          ...imageStatus,
          [value]: o
        })
      } 
      setBoardStatus({
        ...boardStatus,
        [value]: activePlayer
      })
    }
  }

  const checkForWinner = () => {
    if (boardStatus['tl'] === boardStatus['tm'] && boardStatus['tm'] === boardStatus['tr'] && boardStatus['tl'] !== null) {
      setWinner(boardStatus['tl'])
      if (boardStatus['tl'] === 1) {
        setImageStatus({
          ...imageStatus,
          ['tl']: redX, ['tm']: redX, ['tr']: redX
        })
      } else {
        setImageStatus({
          ...imageStatus,
          ['tl']: redO, ['tm']: redO, ['tr']: redO
        })
      }
    } else if (boardStatus['ml'] === boardStatus['mm'] && boardStatus['mm'] === boardStatus['mr'] && boardStatus['ml'] !== null) {
      setWinner(boardStatus['ml'])
      if (boardStatus['ml'] === 1) {
        setImageStatus({
          ...imageStatus,
          ['ml']: redX, ['mm']: redX, ['mr']: redX
        })
      } else {
        setImageStatus({
          ...imageStatus,
          ['ml']: redO, ['mm']: redO, ['mr']: redO
        })
      } 
    } else if (boardStatus['bl'] === boardStatus['bm'] && boardStatus['bm'] === boardStatus['br'] && boardStatus['bl'] !== null) {
      setWinner(boardStatus['bl'])
      if (boardStatus['bl'] === 1) {
        setImageStatus({
          ...imageStatus,
          ['bl']: redX, ['bm']: redX, ['br']: redX
        })
      } else {
        setImageStatus({
          ...imageStatus,
          ['bl']: redO, ['bm']: redO, ['br']: redO
        })
      }
    } else if (boardStatus['tl'] === boardStatus['ml'] && boardStatus['ml'] === boardStatus['bl'] && boardStatus['tl'] !== null) {
      setWinner(boardStatus['tl'])
      if (boardStatus['tl'] === 1) {
        setImageStatus({
          ...imageStatus,
          ['tl']: redX, ['ml']: redX, ['bl']: redX
        })
      } else {
        setImageStatus({
          ...imageStatus,
          ['tl']: redO, ['ml']: redO, ['bl']: redO
        })
      }  
    } else if (boardStatus['tm'] === boardStatus['mm'] && boardStatus['mm'] === boardStatus['bm'] && boardStatus['tm'] !== null) {
      setWinner(boardStatus['tm'])
      if (boardStatus['tm'] === 1) {
        setImageStatus({
          ...imageStatus,
          ['tm']: redX, ['mm']: redX, ['bm']: redX
        })
      } else {
        setImageStatus({
          ...imageStatus,
          ['tm']: redO, ['mm']: redO, ['bm']: redO
        })
      }
    } else if (boardStatus['tr'] === boardStatus['mr'] && boardStatus['mr'] === boardStatus['br'] && boardStatus['tr'] !== null) {
      setWinner(boardStatus['tr'])
      if (boardStatus['tr'] === 1) {
        setImageStatus({
          ...imageStatus,
          ['tr']: redX, ['mr']: redX, ['br']: redX
        })
      } else {
        setImageStatus({
          ...imageStatus,
          ['tr']: redO, ['mr']: redO, ['br']: redO
        })
      }
    } else if (boardStatus['tl'] === boardStatus['mm'] && boardStatus['mm'] === boardStatus['br'] && boardStatus['tl'] !== null) {
      setWinner(boardStatus['tl'])
      if (boardStatus['tl'] === 1) {
        setImageStatus({
          ...imageStatus,
          ['tl']: redX, ['mm']: redX, ['br']: redX
        })
      } else {
        setImageStatus({
          ...imageStatus,
          ['tl']: redO, ['mm']: redO, ['br']: redO
        })
      }
    } else if (boardStatus['tr'] === boardStatus['mm'] && boardStatus['mm'] === boardStatus['bl'] && boardStatus['tr'] !== null) {
      setWinner(boardStatus['tr'])
      if (boardStatus['tr'] === 1) {
        setImageStatus({
          ...imageStatus,
          ['tr']: redX, ['mm']: redX, ['bl']: redX
        })
      } else {
        setImageStatus({
          ...imageStatus,
          ['tr']: redO, ['mm']: redO, ['bl']: redO
        })
      }
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
  console.log(boardStatus)
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
            {boardStatus['tl'] === null ? null : <img src={imageStatus['tl']} className='game-image img-fluid'/>}
          </div>
          <div className='col border-bottom border-start border-end border-5 border-dark tic-box' id='tm' onClick={handleClick}>
            {boardStatus['tm'] === null ? null : <img src={imageStatus['tm']}   className='game-image img-fluid'/>}
          </div>
          <div className='col border-start border-bottom border-5 border-dark tic-box' id='tr' onClick={handleClick}>
            {boardStatus['tr'] === null ? null : <img src={imageStatus['tr']} className='game-image img-fluid'/>}
          </div>
        </div>
        {/* Second Row */}
        <div className='row justify-content-center' align='center'>
          <div className='col border-top border-bottom border-end border-5 border-dark tic-box' id='ml' onClick={handleClick}>
            {boardStatus['ml'] === null ? null : <img src={imageStatus['ml']} className='game-image img-fluid'/>}
          </div>
          <div className='col border border-5 border-dark tic-box' id='mm' onClick={handleClick}>
            {boardStatus['mm'] === null ? null : <img src={imageStatus['mm']} className='game-image img-fluid'/>}
          </div>
          <div className='col border-top border-bottom border-start border-5 border-dark tic-box' id='mr' onClick={handleClick}>
            {boardStatus['mr'] === null ? null : <img src={imageStatus['mr']} className='game-image img-fluid'/>}
          </div>
        </div>
        {/* Third Row */}
        <div className='row justify-content-center' align='center'>
          <div className='col border-top border-end border-5 border-dark tic-box' id='bl' onClick={handleClick}>
            {boardStatus['bl'] === null ? null : <img src={imageStatus['bl']} className='game-image img-fluid'/>}
          </div>
          <div className='col border-start border-end border-top border-5 border-dark tic-box' id='bm' onClick={handleClick}>
            {boardStatus['bm'] === null ? null : <img src={imageStatus['bm']} className='game-image img-fluid'/>}
          </div>
          <div className='col border-start border-top border-5 border-dark tic-box' id='br' onClick={handleClick}>
            {boardStatus['br'] === null ? null : <img src={imageStatus['br']} className='game-image img-fluid'/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
