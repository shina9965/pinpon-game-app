import InputModal from "../Model/InputModel"
import Renderer from "../View/Renderer"
import PlayerModel from "../Model/GameObjectModel"
import GameObject from "./GameObject"


export default class PlayerPresenter extends GameObject {

  private playerModel : PlayerModel
  private inputModel : InputModal
  private renderer : Renderer

  constructor(playerModel : PlayerModel, inputModel : InputModal, renderer : Renderer) {
    super()
    this.playerModel = playerModel
    this.inputModel = inputModel
    this.renderer = renderer
    console.log('PlayerPresenter initialized')
  }

  private Start() {
  }

  public Update(deltaTime: number) {
    console.log("PlayerPresenter Update", deltaTime); 
  }


}