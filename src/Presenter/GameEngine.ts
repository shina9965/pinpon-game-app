// GameEngine.ts
//ゲームエンジンに関するクラス。Input、Render、Display、Updateを管理
import GameDisplayModel from "../Model/GameDisplayModel"
import InputModal from "../Model/InputModel"
import Renderer from "../View/Renderer"
import PlayerModel from "../Model/PlayerModel"
import PlayerPresenter from "./PlayerPresenter"

export default class GameEngine {
  private gameDisplayModel: GameDisplayModel
  private inputModel: InputModal
  private renderer: Renderer
  private playerPresenter: PlayerPresenter
  private playerModel: PlayerModel

  constructor(canvas: HTMLCanvasElement) {
    console.log('GameEngine initialized')

    //initialize models
    this.gameDisplayModel = new GameDisplayModel()
    this.inputModel = new InputModal()
    this.renderer = new Renderer(canvas)

    //initialize presenters
    this.playerModel = new PlayerModel()
    this.playerPresenter = new PlayerPresenter(this.playerModel, this.inputModel, this.renderer)
  }

  public Update(deltaTime: number) {
    
    
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