export default interface IGameObjectModel {
  GetPosition(): { x: number, y: number }
  GetSize(): { width: number, height: number }
  SetSize(width: number, height: number): void
  SetPosition(x: number, y: number): void
}


export default class GameObjectModel implements IGameObjectModel {

  private position = {
    x: 0,
    y: 0
  }

  private size = {
    width: 50,
    height: 10
  }

  constructor() {
    console.log('PlayerPresenter initialized')
  }

  public GetPosition() {
    return this.position
  }

  public GetSize() {
    return this.size
  }
  
  public SetSize(width: number, height: number) {
    this.size.width = width
    this.size.height = height
  }

  public SetPosition(x: number, y: number) {
    this.position.x = x
    this.position.y = y
  }
}