<script setup lang="ts">
import { RouterView } from 'vue-router'
import { fetchTest } from '@/api/test'
//import TabsViews from '@/views/tabs/TabsViews.vue'

fetchTest()
</script>

<template>
  <RouterView />
</template>

<style>
@import 'normalize.css';
#app {
  /** 字体抗锯齿 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  --op-gray-bg-color: rgb(244, 244, 244);
}
</style>
