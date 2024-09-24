<template>
    <div class="file-panel">
      <h3>Files</h3>
      <ul>
        <li v-for="(file, index) in files" :key="index">
          {{ file.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    data() {
      return {
        files: [ { name: "script1.js" }, { name: "script2.js" } ],  
      };
    },
  });
  </script>
  
  <style scoped>
  .file-panel {
    height: 20%;
    background-color: #1e1e2e;
    color: white;
    padding: 10px;
    overflow: auto;
  }
  </style>
  