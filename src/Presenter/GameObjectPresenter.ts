//gameObjectPresenter.ts
//GameObjectに関するクラス。GameObjectの生成、管理を行う。
import { GameEngine } from "./GameEngine"
import {type IGameObject } from "./GameObject"
import { GameObjectModel } from "../Model/GameObjectModel"
import { TestGameObject } from "./TestGameObject"
import { Renderer, type IRenderer } from "../View"

export class GameObjectPresenter {

  private GameObjectList: IGameObject[] = []
  private gameEngine: GameEngine
  private renderer: IRenderer

  constructor(gameEngine: GameEngine) {
    this.gameEngine = gameEngine
    console.log("GameObjectPresenter initialized")

    this.renderer = new Renderer(gameEngine.canvas, gameEngine, this.GameObjectList)

    //テスト用のGameObjectを生成
    const testGameObjectModel = new GameObjectModel("Rect", { x: 50, y: 50 }, { width: 50, height: 50 }, { x: 1, y: 0 }, "red")
    const testGameObject = new TestGameObject(testGameObjectModel, this.gameEngine, this.gameEngine.inputModel)
    this.GameObjectList.push(testGameObject)
    //
  }

  public GetGameObjectList(value: number | string){

    if(typeof value === "number"){
      return this.GameObjectList[value]
    }

    //UUIDでの取得は未実装
    return null
  }


}