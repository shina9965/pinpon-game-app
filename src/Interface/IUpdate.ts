
export interface IUpdate {
  Update(): void
}

export interface IRendererUpdate {
  RendererUpdate(deltaTime: number): void
}