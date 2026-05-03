// GameEngine.ts
//ゲームエンジンに関するクラス。Input、Render、Display、Updateを管理
import { type IGameDisplayModel, GameDisplayModel } from "../Model/GameDisplayModel"
import { type IInputModel, InputModal } from "../Model/InputModel"
import { type IUpdate } from "../Interface/IUpdate"
import { Test } from "./Test"
import { GameObjectPresenter } from "./GameObjectPresenter"


export interface IGameEngine {
  MainUpdate(deltaTime: number): void
  PressRight(): void
  ReleaseRight(): void
  PressLeft(): void
  ReleaseLeft(): void
  GetDisplaySize(): { width: number, height: number }
}

export class GameEngine implements IGameEngine {
  private gameDisplayModel: IGameDisplayModel
  private inputModel: IInputModel
  private static updateObjects: IUpdate[]
  private GameObjectPresenter: GameObjectPresenter

  //test用のUpdateオブジェクト
  private testUpdate: Test
  //

  constructor(canvas: HTMLCanvasElement) {
    console.log('GameEngine initialized')

    //initialize models
    this.gameDisplayModel = new GameDisplayModel()
    this.inputModel = new InputModal()
    GameEngine.updateObjects = []

    //initialize presenter
    this.GameObjectPresenter = new GameObjectPresenter()

    //test用のUpdateオブジェクトを追加
    this.testUpdate = new Test()
    //
  }

  public MainUpdate(deltaTime: number) {
    
    console.log("frame", deltaTime);

    for (const obj of GameEngine.updateObjects) {
      obj.Update()
    }
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

  static AddUpdateObject(obj: IUpdate): void {
    GameEngine.updateObjects.push(obj)
  }

  static RemoveUpdateObject(obj: IUpdate): void {
    const index = GameEngine.updateObjects.indexOf(obj)
    if (index > -1) {
      GameEngine.updateObjects.splice(index, 1)
    }
  }
}