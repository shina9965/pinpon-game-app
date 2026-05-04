import type { GameEngine } from "./GameEngine"
import {type IGameObject } from "./GameObject"

export class GameObjectPresenter {

  private static GameObjectList: IGameObject[] = []
  private gameEngine: GameEngine

  constructor(gameEngine: GameEngine) {
    this.gameEngine = gameEngine
    console.log("GameObjectPresenter initialized")
  }

  public GetGameObjectList(value: number | string){

    if(typeof value === "number"){
      return GameObjectPresenter.GameObjectList[value]
    }

    //UUIDでの取得は未実装
    return null
  }


}