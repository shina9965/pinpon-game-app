/*GameEngine.tsx*/
import GameDisplayModel from "../Model/GameDisplayModel"
import InputModal from "../Model/InputModal"

export default class GameEngine {

  private gameDisplayModel: GameDisplayModel
  private inputModel : InputModal


  constructor() {
    console.log('GameEngine initialized')
    this.gameDisplayModel = new GameDisplayModel()
    this.inputModel = new InputModal()
  }

  public PressRight() {
    this.inputModel.setRightPressed(true)
    console.log("Right pressed" + this.inputModel.getRightPressed())
  }

  public ReleaseRight() {
    this.inputModel.setRightPressed(false)
    console.log("Right released" + this.inputModel.getRightPressed())
  }

  public PressLeft() {
    this.inputModel.setLeftPressed(true)
    console.log("Left pressed" + this.inputModel.getLeftPressed())
  }

  public ReleaseLeft() {
    this.inputModel.setLeftPressed(false)
    console.log("Left released" + this.inputModel.getLeftPressed())
  }

  public GetDisplaySize(){
    return this.gameDisplayModel.GetGameCanvasSize()
  }
}