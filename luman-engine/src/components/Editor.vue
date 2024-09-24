<template>
    <div class="editor-layout">
      <split-pane direction="vertical" :split-percentage="80">
        <split-pane direction="horizontal" :split-percentage="20">
          <HierarchyPanel :entities="entities" @select-entity="selectEntity" />
          <canvas id="gameCanvas"></canvas>
          <InspectorPanel :selectedEntity="selectedEntity" @apply-script="applyScriptToEntity" />
        </split-pane>
        <FilePanel @load-script="loadScript" />
      </split-pane>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import SplitPane from "vue-split-pane";
  import HierarchyPanel from './HierarchyPanel.vue';
  import InspectorPanel from './InspectorPanel.vue';
  import FilePanel from './FilePanel.vue';
  import { Game } from '../game/engine';
  import { Entity } from '../game/entity';
  import { parseScript } from '../utils/script-parser';
  
  export default defineComponent({
    components: { HierarchyPanel, InspectorPanel, FilePanel, SplitPane },
    data() {
      return {
        game: null as Game | null,
        entities: [] as any[],
        selectedEntity: null as any | null,
      };
    },
    mounted() {
      this.game = new Game("gameCanvas");
      const rect = new Entity(50, 50, 100, 100, "red");
      this.game.addEntity(rect);
      this.entities.push(rect);
      this.game.start();
  
      window.addEventListener('resize', this.resizeCanvas);
      this.resizeCanvas();
    },
    methods: {
      resizeCanvas() {
        const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      },
      selectEntity(entity: any) {
        this.selectedEntity = entity;
      },
      applyScriptToEntity(scriptContent: string) {
        if (this.selectedEntity) {
          const parsedScript = parseScript(scriptContent);
          this.selectedEntity.addScript(parsedScript);
        }
      },
      loadScript(scriptContent: string) {
        if (this.selectedEntity) {
          this.applyScriptToEntity(scriptContent);
        }
      }
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.resizeCanvas);
    }
  });
  </script>
  
  <style scoped>
  .editor-layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  canvas {
    width: 100%;
    height: 100%;
    border: 1px solid #333;
  }
  
  .split-pane {
    width: 100%;
    height: 100%;
    background-color: #1e1e2e;
  }
  
  .split-pane__handler {
    background-color: #444;
  }
  </style>
  