//BlockPresenter.ts
//ブロックに関するクラス。

import { GameObject } from "./GameObject";
import type { IGameObjectModel } from "../Model/GameObjectModel"
import type { IInputModel } from "../Model";
import { GameEngine } from "./GameEngine";

export class BlockPresenter extends GameObject {

  constructor(GameObjectModel: IGameObjectModel, gameEngine: GameEngine, inputModel: IInputModel) {
    super(GameObjectModel, gameEngine, inputModel)
    console.log("BlockPresenter initialized")
  }

  public Update() {

    

  }
}