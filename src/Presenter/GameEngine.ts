// GameEngine.ts
//ゲームエンジンに関するクラス。Input、Render、Display、Updateを管理
import GameDisplayModel from "../Model/GameDisplayModel"
import InputModal from "../Model/InputModel"
import Renderer from "../View/Renderer"
import IGameDisplayModel from "../Model/GameDisplayModel"
import IInputModel from "../Model/InputModel"


export default interface IGameEngine {
  Update(deltaTime: number): void
  PressRight(): void
  ReleaseRight(): void
  PressLeft(): void
  ReleaseLeft(): void
  GetDisplaySize(): { width: number, height: number }
}

export default class GameEngine implements IGameEngine {
  private gameDisplayModel: IGameDisplayModel
  private inputModel: IInputModel
  private renderer: Renderer

  constructor(canvas: HTMLCanvasElement) {
    console.log('GameEngine initialized')

    //initialize models
    this.gameDisplayModel = new GameDisplayModel()
    this.inputModel = new InputModal()
    this.renderer = new Renderer(canvas)

  }

  public Update(deltaTime: number) {
    
    console.log("frame", deltaTime);
  }

  public PressRight() {
    this.inputModel.setRightPressed(true)
    console.log("Right pressed " + this.inputModel.getRightPressed())
  }

  public ReleaseRight() {
    this.inputModel.setRightPressed(false)
    console.log("Right released " + this.inputModel.getRightPressed())
  }

  public PressLeft() {
    this.inputModel.setLeftPressed(true)
    console.log("Left pressed " + this.inputModel.getLeftPressed())
  }

  public ReleaseLeft() {
    this.inputModel.setLeftPressed(false)
    console.log("Left released " + this.inputModel.getLeftPressed())
  }

  public GetDisplaySize() {
    return this.gameDisplayModel.GetGameCanvasSize()
  }
}