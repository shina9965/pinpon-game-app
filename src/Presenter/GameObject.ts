import { type IUpdate, type IRendererUpdate } from "../Interface"
import { GameEngine } from "./GameEngine"
import {type IGameObjectModel} from "../Model/GameObjectModel"
import { RigidBody } from "./RigidBody"
import type { IInputModel } from "../Model"

export interface IGameObject extends IUpdate, IRendererUpdate {

  
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

    this.rigidBody = new RigidBody(GameObjectModel)

    this.GameObjectModel = GameObjectModel
    this.inputModel = inputModel
    this.gameEngine = gameEngine
    this.gameEngine.AddRendererUpdateObject(this)
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
  
  public RendererUpdate(deltaTime: number){
    console.log("GameObject RendererUpdate called")

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.GameObjectModel.GetColor();
    this.ctx.fillRect(this.GameObjectModel.GetPosition().x, this.GameObjectModel.GetPosition().y, this.GameObjectModel.GetSize().width, this.GameObjectModel.GetSize().height);

  }

  abstract Update() : void
}