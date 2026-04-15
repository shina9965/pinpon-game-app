/*GameEngine.tsx*/
import GameDisplayModel from "../Model/GameDisplayModel"

export default class GameEngine {

  private gameDisplayModel: GameDisplayModel


  constructor() {
    console.log('GameEngine initialized')
    this.gameDisplayModel = new GameDisplayModel()
  }

  private input_x = {
    rightPressed: false,
    leftPressed: false
  }

  public PressRight() {
    this.input_x.rightPressed = true
  }

  public PressLeft() {
    this.input_x.leftPressed = true
  }

  public GetDisplaySize(){
    return this.gameDisplayModel.GetGameCanvasSize()
  }
}