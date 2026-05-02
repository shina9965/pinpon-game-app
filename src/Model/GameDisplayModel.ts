/*GameDisplayModel.tsx*/
export interface IGameDisplayModel {
  GetGameCanvasSize(): { width: number, height: number }
}


export class GameDisplayModel implements IGameDisplayModel {

  private gameCanvasSize = {
    width: 800,
    height: 600
  }

  public GetGameCanvasSize() {
    return this.gameCanvasSize
  }

  
}