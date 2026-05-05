import type { IGameObject } from "../Presenter";

export interface IColisionObject {
  
  Colision(obj : IGameObject): void
}