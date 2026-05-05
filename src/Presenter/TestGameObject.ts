import { GameObject } from "./GameObject";
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

    if(this.inputModel.GetRightPressed()){
      this.GameObjectModel.SetPosition(this.GameObjectModel.GetPosition().x + 20, this.GameObjectModel.GetPosition().y)

    }
    if(this.inputModel.GetLeftPressed()){
      this.GameObjectModel.SetPosition(this.GameObjectModel.GetPosition().x - 20, this.GameObjectModel.GetPosition().y)
    }

  }
}