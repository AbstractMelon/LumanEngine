<template>
    <div class="file-panel">
      <h3>Files</h3>
      <input type="file" @change="handleFile" />
    </div>
  </template>
  
  <script lang="ts">
  export default {
    methods: {
      handleFile(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
          const file = input.files[0];
          const reader = new FileReader();
          reader.onload = (e) => {
            const scriptContent = e.target?.result?.toString() || '';
            this.$emit('load-script', scriptContent);
          };
          reader.readAsText(file);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .file-panel {
    height: 100%;
    background-color: #1e1e2e;
    color: white;
    padding: 10px;
  }
  input[type="file"] {
    background-color: #2d2d3a;
    color: white;
    border: 1px solid #444;
    padding: 5px;
  }
  </style>
  