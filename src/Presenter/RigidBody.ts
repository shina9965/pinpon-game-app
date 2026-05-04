import { RigidBodyModel, type IRigidBodyModel } from "../Model";
import { type IGameObjectModel } from "../Model/GameObjectModel";
import { type IRendererUpdate } from "../Interface";

export class RigidBody implements IRendererUpdate {

  public RigidBodyModel: IRigidBodyModel;
  private gameObjectModel: IGameObjectModel;

  constructor(gameObjectModel: IGameObjectModel) {

    console.log("RigidBody initialized")
    this.RigidBodyModel = new RigidBodyModel()
    this.gameObjectModel = gameObjectModel
  }

  public Move(value: number) {
    const deltaTime = this.RigidBodyModel.GetDeltatime();
    const position = this.gameObjectModel.GetPosition();
    const direction = this.gameObjectModel.GetDirection();

    this.gameObjectModel.SetPosition(
      position.x + direction.x * value * deltaTime,
      position.y + direction.y * value * deltaTime
    );
  }

  public RendererUpdate(deltaTime: number){
    this.RigidBodyModel.SetDeltatime(deltaTime);
  }
}