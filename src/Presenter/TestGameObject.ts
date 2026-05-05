import { GameObject, type IGameObject } from "./GameObject";
import type { IGameObjectModel } from "../Model/GameObjectModel"
import type { IInputModel } from "../Model";
import { GameEngine } from "./GameEngine";

export class TestGameObject extends GameObject {

  constructor(GameObjectModel: IGameObjectModel, gameEngine: GameEngine, inputModel: IInputModel) {
    super(GameObjectModel, gameEngine, inputModel)
    console.log("TestGameObject initialized")
  }

  public Update() {

    console.log("TestGameObject Update called", this.GameObjectModel.GetPosition().x)

    this.rigidBody.Move(0.2)

  }

  public Colision(obj: IGameObject) {
      console.log("TestGameObject Colision with ", obj)
  }
}