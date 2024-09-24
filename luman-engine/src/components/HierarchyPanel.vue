<template>
    <div class="hierarchy-panel">
      <h3>Hierarchy</h3>
      <ul>
        <li v-for="(entity, index) in entities" :key="index" @click="selectEntity(entity)">
          {{ entity.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props: {
      entities: Array,
    },
    methods: {
      selectEntity(entity) {
        this.$emit('select-entity', entity);
      }
    }
  });
  </script>
  
  <style scoped>
  .hierarchy-panel {
    width: 20%;
    height: 100%;
    background-color: #1e1e2e;
    color: white;
    padding: 10px;
  }
  </style>
  