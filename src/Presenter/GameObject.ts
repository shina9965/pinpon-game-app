import { type IUpdate, type IRendererUpdate } from "../Interface"
import { GameEngine } from "./GameEngine"
import {type IGameObjectModel} from "../Model/GameObjectModel"
import { RigidBody } from "./RigidBody"
import type { IInputModel } from "../Model"

export interface IGameObject extends IUpdate{

  GetGameObjectModel(): IGameObjectModel
}

export abstract class GameObject implements IGameObject {

  protected GameObjectModel: IGameObjectModel
  protected rigidBody: RigidBody
  private gameEngine: GameEngine
  protected inputModel: IInputModel

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(GameObjectModel: IGameObjectModel, gameEngine: GameEngine, inputModel: IInputModel) {
    console.log("GameObject initialized")

    this.rigidBody = new RigidBody(GameObjectModel, gameEngine.GetDisplaySize())

    this.GameObjectModel = GameObjectModel
    this.inputModel = inputModel
    this.gameEngine = gameEngine
    this.gameEngine.AddUpdateObject(this)
    this.gameEngine.AddRendererUpdateObject(this.rigidBody)

    this.canvas = this.gameEngine.canvas
    const ctx = this.canvas.getContext("2d")

    if (ctx) {
      this.ctx = ctx
    } else {
      throw new Error("Failed to get canvas context")
    }
  }

  public GetGameObjectModel() {
    return this.GameObjectModel
  }

  abstract Update() : void
}