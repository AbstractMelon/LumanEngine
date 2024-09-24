export class Entity {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    script: Function | null = null;
  
    constructor(x: number, y: number, width: number, height: number, color: string) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
  
    update(delta: number) {
      if (this.script) this.script(this, delta);
      this.y += delta * 0.01; // Sample gravity
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    addScript(script: Function) {
      this.script = script;
    }
  }
  