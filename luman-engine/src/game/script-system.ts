import { Entity } from './entity';

export class ScriptRunner {
  private script: Function;

  constructor(script: Function) {
    this.script = script;
  }

  run(entity: Entity, delta: number) {
    this.script(entity, delta);
  }
}
