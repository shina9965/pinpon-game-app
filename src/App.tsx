import './App.css'
import GameEngine from './Presenter/GameEngine'
import { useEffect, useRef, useState } from 'react'

function App() {
  const gameEngineRef = useRef<GameEngine | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [displaySize, setDisplaySize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    const gameEngine = new GameEngine(canvasRef.current)
    gameEngineRef.current = gameEngine

    setDisplaySize(gameEngine.GetDisplaySize())

    return () => {
      gameEngineRef.current = null
    }
  }, [])

  return (
    <div className='game-display'>
      <canvas
        ref={canvasRef}
        id='game-canvas'
        width={displaySize.width}
        height={displaySize.height}
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