import { type IUpdate, type IRendererUpdate } from "../Interface"
import { GameEngine } from "./GameEngine"
import {type IGameObjectModel} from "../Model/GameObjectModel"
import { RigidBody } from "./RigidBody"
import type { IInputModel } from "../Model"

export interface IGameObject extends IUpdate, IRendererUpdate {

  
}

export abstract class GameObject implements IGameObject {

  public GameObjectModel: IGameObjectModel
  private rigidBody: RigidBody
  private gameEngine: GameEngine
  private inputModel: IInputModel

  constructor(GameObjectModel: IGameObjectModel, gameEngine: GameEngine, inputModel: IInputModel) {
    console.log("GameObject initialized")

    this.rigidBody = new RigidBody(GameObjectModel)

    this.GameObjectModel = GameObjectModel
    this.inputModel = inputModel
    this.gameEngine = gameEngine
    this.gameEngine.AddRendererUpdateObject(this)
    this.gameEngine.AddUpdateObject(this)
    this.gameEngine.AddRendererUpdateObject(this.rigidBody)
  }
  
  public RendererUpdate(deltaTime: number){
    console.log("GameObject RendererUpdate called")
  }

  abstract Update() : void
}