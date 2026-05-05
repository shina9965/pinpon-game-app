import type { GameEngine } from "./GameEngine"
import {type IGameObject } from "./GameObject"
import { GameObjectModel } from "../Model/GameObjectModel"
import { TestGameObject } from "./TestGameObject"
import type { IInputModel } from "../Model"

export class GameObjectPresenter {

  private static GameObjectList: IGameObject[] = []
  private gameEngine: GameEngine

  constructor(gameEngine: GameEngine) {
    this.gameEngine = gameEngine
    console.log("GameObjectPresenter initialized")

    //テスト用のGameObjectを生成
    const testGameObjectModel = new GameObjectModel("rectangle", { x: 50, y: 50 }, { width: 50, height: 50 }, { x: 1, y: 0 }, "red")
    const testGameObject = new TestGameObject(testGameObjectModel, this.gameEngine, this.gameEngine.inputModel)
    GameObjectPresenter.GameObjectList.push(testGameObject)
    //
  }

  public GetGameObjectList(value: number | string){

    if(typeof value === "number"){
      return GameObjectPresenter.GameObjectList[value]
    }

    //UUIDでの取得は未実装
    return null
  }


}