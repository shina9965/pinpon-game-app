//gameObjectPresenter.ts
//GameObjectに関するクラス。GameObjectの生成、管理を行う。
import { GameEngine } from "./GameEngine"
import {type IGameObject } from "./GameObject"
import { GameObjectModel } from "../Model/GameObjectModel"
import { TestGameObject } from "./TestGameObject"
import { Renderer, type IRenderer } from "../View"
import { BlockPresenter } from "./BlockPresenter"
import { PlayerPresenter } from "./PlayerPresenter"
import { ColisionPresenter } from "./ColisionPresenter"

export class GameObjectPresenter {

  private GameObjectList: IGameObject[] = []
  private gameEngine: GameEngine
  private renderer: IRenderer
  private colisionPresenter: ColisionPresenter

  constructor(gameEngine: GameEngine) {
    this.gameEngine = gameEngine
    console.log("GameObjectPresenter initialized")

    this.renderer = new Renderer(gameEngine.canvas, gameEngine, this.GameObjectList)
    this.colisionPresenter = new ColisionPresenter(gameEngine)

    const gameObjectModel = new GameObjectModel("Rect", { x: 400, y: 500 }, { width: 80, height: 20 }, { x: 1, y: 0 }, "lightgreen")
    const gameObject = new PlayerPresenter(gameObjectModel, this.gameEngine, this.gameEngine.inputModel)
    this.GameObjectList.push(gameObject)

    

    const blockWidth = 70
    const blockHeight = 25
    const gap = 10

    const screenWidth = 800

    const rows = 2
    const cols = Math.floor(screenWidth / (blockWidth + gap))

    const startX = (screenWidth - (cols * blockWidth + (cols - 1) * gap)) / 2
    const startY = 50

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = startX + col * (blockWidth + gap)
        const y = startY + row * (blockHeight + gap)

        const blockModel = new GameObjectModel(
          "Rect",
          { x, y },
          { width: blockWidth, height: blockHeight },
          { x: 0, y: 0 },
          "lightblue"
        )

        const block = new BlockPresenter(
          blockModel,
          this.gameEngine,
          this.gameEngine.inputModel
        )

        this.GameObjectList.push(block)
      }
    }

    for (let i = 0; i < this.GameObjectList.length; i++) {
      this.colisionPresenter.AddColisionObject(this.GameObjectList[i])
    }
  }

  public GetGameObjectList(value: number | string){

    if(typeof value === "number"){
      return this.GameObjectList[value]
    }

    //UUIDでの取得は未実装
    return null
  }


}