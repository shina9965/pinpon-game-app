// GameEngine.ts
//ゲームエンジンに関するクラス。Input、Render、Display、Updateを管理
import { type IGameDisplayModel, GameDisplayModel } from "../Model/GameDisplayModel"
import { type IInputModel, InputModal } from "../Model/InputModel"


export interface IGameEngine {
  Update(deltaTime: number): void
  PressRight(): void
  ReleaseRight(): void
  PressLeft(): void
  ReleaseLeft(): void
  GetDisplaySize(): { width: number, height: number }
}

export class GameEngine implements IGameEngine {
  private gameDisplayModel: IGameDisplayModel
  private inputModel: IInputModel

  constructor(canvas: HTMLCanvasElement) {
    console.log('GameEngine initialized')

    //initialize models
    this.gameDisplayModel = new GameDisplayModel()
    this.inputModel = new InputModal()

  }

  public Update(deltaTime: number) {
    
    console.log("frame", deltaTime);

    
  }

  public PressRight() {
    this.inputModel.SetRightPressed(true)
    console.log("Right pressed " + this.inputModel.GetRightPressed())
  }

  public ReleaseRight() {
    this.inputModel.SetRightPressed(false)
    console.log("Right released " + this.inputModel.GetRightPressed())
  }

  public PressLeft() {
    this.inputModel.SetLeftPressed(true)
    console.log("Left pressed " + this.inputModel.GetLeftPressed())
  }

  public ReleaseLeft() {
    this.inputModel.SetLeftPressed(false)
    console.log("Left released " + this.inputModel.GetLeftPressed())
  }

  public GetDisplaySize() {
    return this.gameDisplayModel.GetGameCanvasSize()
  }
}