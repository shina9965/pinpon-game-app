import { RigidBodyModel, type IRigidBodyModel } from "../Model";
import { type IGameObjectModel } from "../Model/GameObjectModel";
import { type IRendererUpdate } from "../Interface";

export class RigidBody implements IRendererUpdate {

  public RigidBodyModel: IRigidBodyModel;
  private gameObjectModel: IGameObjectModel;

  private canvasSize = { width: 800, height: 600 }

  constructor(gameObjectModel: IGameObjectModel, {width, height}: {width: number, height: number}) {

    console.log("RigidBody initialized")
    this.RigidBodyModel = new RigidBodyModel()
    this.gameObjectModel = gameObjectModel
    this.canvasSize.width = width
    this.canvasSize.height = height
  }

  public Move(value: number) {
    const deltaTime = this.RigidBodyModel.GetDeltatime();
    const position = this.gameObjectModel.GetPosition();
    const direction = this.gameObjectModel.GetDirection();
    const size = this.gameObjectModel.GetSize();

    const canvasWidth = this.canvasSize.width;
    const canvasHeight = this.canvasSize.height;

    const nextX = position.x + direction.x * value * deltaTime;
    const nextY = position.y + direction.y * value * deltaTime;

    const clampedX = Math.max(0, Math.min(nextX, canvasWidth - size.width));
    const clampedY = Math.max(0, Math.min(nextY, canvasHeight - size.height));

    this.gameObjectModel.SetPosition(clampedX, clampedY);
  }

  public RendererUpdate(deltaTime: number){
    this.RigidBodyModel.SetDeltatime(deltaTime);
  }
}