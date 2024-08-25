<template>
  <div v-if="loading" class="op-loading-view">
    <slot name="template">
      <div v-if="props.type === 'loading'" class="loading-wrapper">
        <VanLoading />
      </div>
      <div v-if="props.type === 'skeleton'" class="skeleton-wrapper">
        <VanSkeleton :row="5" title avatar />
        <VanSkeleton :row="10" title />
      </div>
    </slot>
  </div>

  <slot v-else></slot>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  loading: Boolean,
  type: String as PropType<'loading' | 'skeleton'>,
})
</script>

<style lang="scss" scoped>
.op-loading-view {
  background: white;
  .loading-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  .skeleton-wrapper {
    padding: 20px 10px;
  }
}
</style>
