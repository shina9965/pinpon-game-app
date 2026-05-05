import './App.css'
import { GameEngine, type IGameEngine } from './Presenter/GameEngine'
import { useEffect, useRef, useState } from 'react'

function App() {
  const gameEngineRef = useRef<IGameEngine | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)

  const [displaySize, setDisplaySize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    const gameEngine = new GameEngine(canvasRef.current)
    gameEngineRef.current = gameEngine

    setDisplaySize(gameEngine.GetDisplaySize())

    const loop = (time: number) => {
      // 前フレームからの経過時間(ms)
      const deltaTime =
        lastTimeRef.current === null ? 0 : time - lastTimeRef.current;
      lastTimeRef.current = time;

      gameEngine.MainUpdate(deltaTime);

      animationIdRef.current = requestAnimationFrame(loop);
    };

    animationIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
      gameEngineRef.current = null
    };
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
        id="left-arrow"
        type="button"
        value="<-"
        onPointerDown={() => gameEngineRef.current?.PressLeft()}
        onPointerUp={() => gameEngineRef.current?.ReleaseLeft()}
        onPointerLeave={() => gameEngineRef.current?.ReleaseLeft()}
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
    </div>
  )
}

export default App