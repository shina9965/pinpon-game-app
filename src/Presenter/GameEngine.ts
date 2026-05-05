// GameEngine.ts
//ゲームエンジンに関するクラス。Input、Render、Display、Updateを管理
import { type IGameDisplayModel, GameDisplayModel } from "../Model/GameDisplayModel"
import { type IInputModel, InputModal } from "../Model/InputModel"
import { type IUpdate, type IRendererUpdate} from "../Interface/IUpdate"
import { Test } from "./Test"
import { GameObjectPresenter } from "./GameObjectPresenter"


export interface IGameEngine {
  MainUpdate(deltaTime: number): void
  PressRight(): void
  ReleaseRight(): void
  PressLeft(): void
  ReleaseLeft(): void
  GetDisplaySize(): { width: number, height: number }
  AddUpdateObject(obj: IUpdate): void 
  RemoveUpdateObject(obj: IUpdate): void 
  AddRendererUpdateObject(obj: IRendererUpdate): void 
  RemoveRendererUpdateObject(obj: IRendererUpdate): void 
  
}

export class GameEngine implements IGameEngine {
  private gameDisplayModel: IGameDisplayModel
  public inputModel: IInputModel
  private updateObjects: IUpdate[]
  private RendererUpdateObjects: IRendererUpdate[]
  private GameObjectPresenter: GameObjectPresenter
  public canvas: HTMLCanvasElement

  

  constructor(canvas: HTMLCanvasElement) {
    console.log('GameEngine initialized')
    this.canvas = canvas

    //initialize models
    this.gameDisplayModel = new GameDisplayModel()
    this.inputModel = new InputModal()
    this.updateObjects = []
    this.RendererUpdateObjects = []

    //initialize presenter
    this.GameObjectPresenter = new GameObjectPresenter(this)
  }

  public MainUpdate(deltaTime: number) {

    if (this.RendererUpdateObjects.length === 0 || this.updateObjects.length === 0) {
      console.log("No objects to update")
      return
    }

    for (const obj of this.RendererUpdateObjects) {
      obj.RendererUpdate(deltaTime)
    }

    for (const obj of this.updateObjects) {
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

  AddUpdateObject(obj: IUpdate): void {

    console.log("Adding Update object", obj)

    this.updateObjects.push(obj)
  }

  RemoveUpdateObject(obj: IUpdate): void {
    const index = this.updateObjects.indexOf(obj)
    if (index > -1) {
      this.updateObjects.splice(index, 1)
    }
  }

  AddRendererUpdateObject(obj: IRendererUpdate): void {

    console.log("Adding RendererUpdate object", obj)

    this.RendererUpdateObjects.push(obj)
  }

  RemoveRendererUpdateObject(obj: IRendererUpdate): void {
    const index = this.RendererUpdateObjects.indexOf(obj)
    if (index > -1) {
      this.RendererUpdateObjects.splice(index, 1)
    }
  }
}