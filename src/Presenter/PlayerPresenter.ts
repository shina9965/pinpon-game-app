import InputModal from "../Model/InputModel"
import Renderer from "../View/Renderer"
import PlayerModel from "../Model/PlayerModel"

export default class PlayerPresenter {

  private playerModel : PlayerModel
  private inputModel : InputModal
  private renderer : Renderer

  constructor(playerModel : PlayerModel, inputModel : InputModal, renderer : Renderer) {
    this.playerModel = playerModel
    this.inputModel = inputModel
    this.renderer = renderer
    console.log('PlayerPresenter initialized')
  }

  
}