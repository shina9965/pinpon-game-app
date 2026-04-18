import IGameDisplayModel from "../Model/GameDisplayModel"

export default interface IRenderer {

  RemdererUpdate():void
}

export default class Renderer implements IRenderer {

  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private gameDisplayModel: IGameDisplayModel


  constructor(canvas: HTMLCanvasElement, gameDisplayModel: IGameDisplayModel) {
    this.canvas = canvas
    this.gameDisplayModel = gameDisplayModel

    const context = canvas.getContext('2d')
    context?.translate(gameDisplayModel.GetGameCanvasSize().width / 2, gameDisplayModel.GetGameCanvasSize().height / 2)

    if (context) {
      this.context = context
    }
    else {
      throw new Error('Failed to get 2D context')
    }
  }

  public RendererUpdate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.context.save()
    this.context.translate(this.canvas.width / 2, this.canvas.height / 2)

    this.context.restore()
  }


}