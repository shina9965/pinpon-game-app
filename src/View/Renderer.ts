//Renderer.ts
//描画に関するクラス。Canvasを使用してGameObjectの描画を行う。

import { type IRendererUpdate } from "../Interface";
import { type IGameObject } from "../Presenter/GameObject";
import { type IGameEngine } from "../Presenter";

export interface IRenderer extends IRendererUpdate {

}

export class Renderer implements IRenderer {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  private gameEngine: IGameEngine
  private gameObjects: IGameObject[]

  constructor(canvas: HTMLCanvasElement, gameEngine: IGameEngine, gameObjects: IGameObject[]) {
    console.log("Renderer initialized")
    this.canvas = canvas
    this.gameEngine = gameEngine
    this.gameObjects = gameObjects
    const ctx = this.canvas.getContext("2d")

    if (ctx) {
      this.ctx = ctx
    } else {
      throw new Error("Failed to get canvas context")
    }

    gameEngine.AddRendererUpdateObject(this)
  }

  public RendererUpdate(deltaTime: number) {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const gameObject of this.gameObjects) {
      
      if(gameObject.GetGameObjectModel().GetShape() === "Rect"){

        this.ctx.fillStyle = gameObject.GetGameObjectModel().GetColor();
        this.ctx.fillRect(
          gameObject.GetGameObjectModel().GetPosition().x,
          gameObject.GetGameObjectModel().GetPosition().y,
          gameObject.GetGameObjectModel().GetSize().width,
          gameObject.GetGameObjectModel().GetSize().height
        );
      } 
      else if(gameObject.GetGameObjectModel().GetShape() === "Circle"){

        this.ctx.fillStyle = gameObject.GetGameObjectModel().GetColor();

        this.ctx.beginPath();
        this.ctx.arc(
          gameObject.GetGameObjectModel().GetPosition().x,
          gameObject.GetGameObjectModel().GetPosition().y,
          gameObject.GetGameObjectModel().GetSize().width / 2,
          0,
          Math.PI * 2
        );

        this.ctx.fill();
      }
    }
  }
}