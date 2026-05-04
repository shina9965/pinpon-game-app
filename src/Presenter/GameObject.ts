import { type IUpdate, type IRendererUpdate } from "../Interface"
import { GameEngine } from "./GameEngine"
import {type IGameObjectModel} from "../Model/GameObjectModel"

export interface IGameObject extends IUpdate, IRendererUpdate {

  
}

export abstract class GameObject implements IGameObject {

  public GameObjectModel: IGameObjectModel

  constructor(GameObjectModel: IGameObjectModel) {
    console.log("GameObject initialized")
    this.GameObjectModel = GameObjectModel
    GameEngine.AddRendererUpdateObject(this)
    GameEngine.AddUpdateObject(this)
  }
  
  public RendererUpdate(deltaTime: number){
    console.log("GameObject RendererUpdate called")
  }

  abstract Update() : void
}