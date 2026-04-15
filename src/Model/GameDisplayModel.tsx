/*GameDisplayModel.tsx*/

export default class GameDisplayModel {

  private gameCanvasSize = {
    width: 800,
    height: 600
  }

  public GetGameCanvasSize() {
    return this.gameCanvasSize
  }
}