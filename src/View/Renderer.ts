

export default class Renderer {

  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas

    const context = canvas.getContext('2d')

    if (context) {
      this.context = context
    } 
    else {
      throw new Error('Failed to get 2D context')
    }
  }

  
}