/*App.tsx*/
import './App.css'
import GameEngine from './Presenter/GameEngine'
import { useRef } from 'react'

function App() {

  const gameEngineRef = useRef<GameEngine | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  if (!gameEngineRef.current) {
    gameEngineRef.current = new GameEngine()
  }

  return (
    <div className='game-display'>
      <canvas ref={canvasRef} 
        id='game-canvas' 
        width={gameEngineRef.current?.GetDisplaySize().width} 
        height={gameEngineRef.current?.GetDisplaySize().height} 
      />
      <input
        className="arrow-button"
        id="right-arrow"
        type="button"
        value="->"
        onPointerDown={() => gameEngineRef.current?.PressRight()}
        onPointerUp={() => gameEngineRef.current?.ReleaseRight()}
        onPointerLeave={() => gameEngineRef.current?.ReleaseRight()}
      />
      <input
        className="arrow-button"
        id="left-arrow"
        type="button"
        value="<-"
        onPointerDown={() => gameEngineRef.current?.PressLeft()}
        onPointerUp={() => gameEngineRef.current?.ReleaseLeft()}
        onPointerLeave={() => gameEngineRef.current?.ReleaseLeft()}
      />
    </div>
  )
}

export default App
