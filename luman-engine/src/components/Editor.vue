<template>
    <div class="editor-layout">
      <HierarchyPanel :entities="entities" @select-entity="selectEntity" />
      <canvas id="gameCanvas" width="500" height="500"></canvas>
      <InspectorPanel :selectedEntity="selectedEntity" />
      <FilePanel />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { Game, Rectangle } from '../game/game-engine';
  import HierarchyPanel from './HierarchyPanel.vue';
  import InspectorPanel from './InspectorPanel.vue';
  import FilePanel from './FilePanel.vue';
  
  export default defineComponent({
    components: { HierarchyPanel, InspectorPanel, FilePanel },
    data() {
      return {
        game: null as Game | null,
        entities: [] as any[],
        selectedEntity: null as any | null,
      };
    },
    mounted() {
      this.game = new Game("gameCanvas");
      const rect = new Rectangle(50, 50, 100, 100, "red");
      this.game.addEntity(rect);
      this.entities.push(rect);
      this.game.start();
    },
    methods: {
      selectEntity(entity: any) {
        this.selectedEntity = entity;
      }
    },
  });
  </script>
  
  <style scoped>
  .editor-layout {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
  canvas {
    margin: 0 auto;
    border: 1px solid #333;
  }
  </style>
  