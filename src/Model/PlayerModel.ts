
export default class PlayerModel {

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

  public SetPosition(x: number, y: number) {
    this.position.x = x
    this.position.y = y
  }
}