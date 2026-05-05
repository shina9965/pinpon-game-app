

import { GameObject } from "./GameObject";
import type { IGameObjectModel } from "../Model/GameObjectModel"
import type { IInputModel } from "../Model";
import { GameEngine } from "./GameEngine";

export class PlayerPresenter extends GameObject {

  private speed: number = 0.5

  constructor(GameObjectModel: IGameObjectModel, gameEngine: GameEngine, inputModel: IInputModel) {
    super(GameObjectModel, gameEngine, inputModel)
    console.log("PlayerPresenter initialized")
  }

  public Update() {

    
    if(this.inputModel.GetRightPressed()){

      this.GameObjectModel.SetDirection(1, 0)
      this.rigidBody.Move(this.speed)
    }
    if(this.inputModel.GetLeftPressed()){
      this.GameObjectModel.SetDirection(-1, 0)
      this.rigidBody.Move(this.speed)
    }
  }
}