export class ScriptRunner {
    constructor(private entity: any, private script: Function) {}
  
    update(delta: number) {
      this.script(this.entity, delta);
    }
  }
  
  // Example script:
  // function(entity, delta) {
  //     entity.x += delta * 0.1;  // Moves right over time
  // }
  