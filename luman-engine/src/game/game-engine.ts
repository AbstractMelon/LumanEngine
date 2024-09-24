// Simple 2D Game Engine
export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private entities: Entity[] = [];
    private lastTimestamp: number = 0;
    private isRunning: boolean = false;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d")!;
    }

    addEntity(entity: Entity) {
        this.entities.push(entity);
    }

    start() {
        this.isRunning = true;
        this.lastTimestamp = performance.now();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    stop() {
        this.isRunning = false;
    }

    private gameLoop(timestamp: number) {
        if (!this.isRunning) return;

        const delta = timestamp - this.lastTimestamp;
        this.lastTimestamp = timestamp;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.entities.forEach((entity) => {
            entity.update(delta);
            entity.draw(this.ctx);
        });

        requestAnimationFrame(this.gameLoop.bind(this));
    }
}

export abstract class Entity {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    abstract update(delta: number): void;
    abstract draw(ctx: CanvasRenderingContext2D): void;
}

// Simple Rectangle Entity
export class Rectangle extends Entity {
    width: number;
    height: number;
    color: string;

    constructor(x: number, y: number, width: number, height: number, color: string) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.color = color;
    }

    update(delta: number) {
        // Simple movement logic (e.g. gravity or input)
        this.y += delta * 0.01;  // Simple gravity effect
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
