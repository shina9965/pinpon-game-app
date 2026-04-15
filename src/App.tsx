/*App.tsx*/
import './App.css'
import GameEngine from './Presenter/GameEngine'
import { useEffect, useRef } from 'react'

function App() {

  const gameEngineRef = useRef<GameEngine | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  if (!gameEngineRef.current) {
    gameEngineRef.current = new GameEngine()
  }

  return (
    <div className='game-display'>
      <canvas ref={canvasRef} id='game-canvas' width={gameEngineRef.current?.GetDisplaySize().width} height={gameEngineRef.current?.GetDisplaySize().height} />
      <input className="arrow-button" id="right-arrow" type="button" value="->" onClick={() => gameEngineRef.current?.PressRight()} />
      <input className="arrow-button" id="left-arrow" type="button" value="<-" onClick={() => gameEngineRef.current?.PressLeft()} />
    </div>
  )
}

export default App
