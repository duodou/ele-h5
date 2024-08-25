<template>
  <div class="home-transformer">
    <div v-for="v in data" :key="v.label" class="home-transformer__item">
      <img :src="v.imgUrl" alt="" />
      <div>{{ v.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITransformer } from '@/types'
import { PropType } from 'vue'
defineProps({
  data: {
    type: Array as PropType<ITransformer[]>,
    default: [],
  },
})
</script>

<style scoped lang="scss">
.home-transformer {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;

  &__item {
    font-size: 13px;
    line-height: 15px;
    text-align: center;

    img {
      width: 48px;
    }
  }
}
</style>
