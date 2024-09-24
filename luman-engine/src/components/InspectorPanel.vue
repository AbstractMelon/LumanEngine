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
      <div>
        <h4>Script:</h4>
        <textarea v-model="scriptContent"></textarea>
        <button @click="applyScript">Apply Script</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      selectedEntity: Object,
    },
    data() {
      return {
        scriptContent: '',
      };
    },
    methods: {
      applyScript() {
        this.$emit('apply-script', this.scriptContent);
      }
    }
  };
  </script>
  
  <style scoped>
  .inspector-panel {
    width: 20%;
    height: 100%;
    background-color: #1e1e2e;
    color: white;
    padding: 10px;
  }
  textarea {
    width: 100%;
    height: 100px;
    background-color: #2d2d3a;
    color: white;
  }
  </style>
  