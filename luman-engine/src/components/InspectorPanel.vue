<template>
    <div class="inspector-panel" v-if="selectedEntity">
      <h3>Inspector</h3>
      <div>
        <label>Name:</label>
        <input type="text" v-model="selectedEntity.name" />
      </div>
      <div>
        <label>X Position:</label>
        <input type="number" v-model.number="selectedEntity.x" />
      </div>
      <div>
        <label>Y Position:</label>
        <input type="number" v-model.number="selectedEntity.y" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props: {
      selectedEntity: Object,
    },
  });
  </script>
  
  <style scoped>
  .inspector-panel {
    width: 20%;
    height: 100%;
    background-color: #1e1e2e;
    color: white;
    padding: 10px;
  }
  </style>
  