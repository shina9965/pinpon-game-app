import { type IGameEngine, type IGameObject } from "."
import { type IUpdate } from "../Interface"
import { type IColisionObject } from "../Interface"

export class ColisionPresenter implements IUpdate {

  private colisionObjects: IColisionObject[] = []
  private gameEngine: IGameEngine

  constructor(gameEngine: IGameEngine) {
    console.log("ColisionPresenter initialized")
    this.gameEngine = gameEngine

    // ここで1回だけ登録
    this.gameEngine.AddUpdateObject(this)
  }

  public Update() {
    for (let i = 0; i < this.colisionObjects.length; i++) {
      
      for (let j = i + 1; j < this.colisionObjects.length; j++) {
        const objA = this.colisionObjects[i]
        const objB = this.colisionObjects[j]
        // ここで衝突判定を行う

        if (this.CheckCollision(objA, objB)) {
          objA.Colision(objB as IGameObject)
          objB.Colision(objA as IGameObject)
        }
      }
    }
  }

  public AddColisionObject(obj: IColisionObject) {
    this.colisionObjects.push(obj)
  }

  public RemoveColisionObject(obj: IColisionObject) {
    const index = this.colisionObjects.indexOf(obj)
    if (index > -1) {
      this.colisionObjects.splice(index, 1)
    }
  }

  private CheckCollision(objA: IColisionObject, objB: IColisionObject): boolean {
    const a = objA as IGameObject
    const b = objB as IGameObject

    const aModel = a.GetGameObjectModel()
    const bModel = b.GetGameObjectModel()

    const aShape = aModel.GetShape()
    const bShape = bModel.GetShape()

    if (aShape === "Circle" && bShape === "Rect") {
      return this.CheckCircleRect(a, b)
    }

    if (aShape === "Rect" && bShape === "Circle") {
      return this.CheckCircleRect(b, a)
    }

    return false
  }

  private CheckCircleRect(circle: IGameObject, rect: IGameObject): boolean {
    
    const circleModel = circle.GetGameObjectModel()
    const rectModel = rect.GetGameObjectModel()

    const circlePos = circleModel.GetPosition()
    const circleSize = circleModel.GetSize()

    const rectPos = rectModel.GetPosition()
    const rectSize = rectModel.GetSize()

    const radius = circleSize.width / 2

    const circleCenterX = circlePos.x + radius
    const circleCenterY = circlePos.y + radius

    const closestX = Math.max(
      rectPos.x,
      Math.min(circleCenterX, rectPos.x + rectSize.width)
    )

    const closestY = Math.max(
      rectPos.y,
      Math.min(circleCenterY, rectPos.y + rectSize.height)
    )

    const dx = circleCenterX - closestX
    const dy = circleCenterY - closestY

    return dx * dx + dy * dy <= radius * radius
  }
}