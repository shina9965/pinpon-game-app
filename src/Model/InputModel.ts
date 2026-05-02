export interface IInputModel {
  GetRightPressed(): boolean
  SetRightPressed(value: boolean): void
  GetLeftPressed(): boolean
  SetLeftPressed(value: boolean): void
}


export class InputModal implements IInputModel {

  private input_x = {
    rightPressed: false,
    leftPressed: false
  }

  public GetRightPressed() {
    return this.input_x.rightPressed
  }

  public SetRightPressed(value: boolean) {
    this.input_x.rightPressed = value
  }

  public GetLeftPressed() {
    return this.input_x.leftPressed
  }

  public SetLeftPressed(value: boolean) {
    this.input_x.leftPressed = value
  }
}