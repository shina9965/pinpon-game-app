import { GameObject, type IGameObject } from "./GameObject";
import type { IGameObjectModel } from "../Model/GameObjectModel"
import type { IInputModel } from "../Model";
import { GameEngine } from "./GameEngine";

export class BallPresenter extends GameObject {

  constructor(GameObjectModel: IGameObjectModel, gameEngine: GameEngine, inputModel: IInputModel) {
    super(GameObjectModel, gameEngine, inputModel)
    console.log("BallPresenter initialized")
  }

  public Update() {
    this.ReflectCanvasEdge()

    this.rigidBody.Move(0.3)
  }

  public Colision(obj: IGameObject) {
    this.ReflectObject(obj)
  }

  private ReflectCanvasEdge() {
    const position = this.GameObjectModel.GetPosition()
    const size = this.GameObjectModel.GetSize()
    const direction = this.GameObjectModel.GetDirection()

    const displaySize = this.gameEngine.GetDisplaySize()

    let nextX = direction.x
    let nextY = direction.y

    if (position.x <= 0 || position.x + size.width >= displaySize.width) {
      nextX *= -1
    }

    if (position.y <= 0 || position.y + size.height >= displaySize.height) {
      nextY *= -1
    }

    this.GameObjectModel.SetDirection(nextX, nextY)
  }

  private ReflectObject(obj: IGameObject) {
    const myModel = this.GameObjectModel
    const otherModel = obj.GetGameObjectModel()

    const myPos = myModel.GetPosition()
    const mySize = myModel.GetSize()
    const myDir = myModel.GetDirection()

    const otherPos = otherModel.GetPosition()
    const otherSize = otherModel.GetSize()

    const myCenterX = myPos.x + mySize.width / 2
    const myCenterY = myPos.y + mySize.height / 2

    const otherCenterX = otherPos.x + otherSize.width / 2
    const otherCenterY = otherPos.y + otherSize.height / 2

    const dx = myCenterX - otherCenterX
    const dy = myCenterY - otherCenterY

    let nextX = myDir.x
    let nextY = myDir.y

    if (Math.abs(dx) > Math.abs(dy)) {
      nextX *= -1
    } else {
      nextY *= -1
    }

    this.GameObjectModel.SetDirection(nextX, nextY)
  }
}