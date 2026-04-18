/*GameDisplayModel.tsx*/
export default interface IGameDisplayModel {
  GetGameCanvasSize(): { width: number, height: number }
}


export default class GameDisplayModel implements IGameDisplayModel {

  private gameCanvasSize = {
    width: 800,
    height: 600
  }

  public GetGameCanvasSize() {
    return this.gameCanvasSize
  }
}