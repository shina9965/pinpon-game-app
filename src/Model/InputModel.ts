export default interface IInputModel {
  getRightPressed(): boolean
  setRightPressed(value: boolean): void
  getLeftPressed(): boolean
  setLeftPressed(value: boolean): void
}


export default class InputModal implements IInputModel {

  private input_x = {
    rightPressed: false,
    leftPressed: false
  }

  public getRightPressed() {
    return this.input_x.rightPressed
  }

  public setRightPressed(value: boolean) {
    this.input_x.rightPressed = value
  }

  public getLeftPressed() {
    return this.input_x.leftPressed
  }

  public setLeftPressed(value: boolean) {
    this.input_x.leftPressed = value
  }
}