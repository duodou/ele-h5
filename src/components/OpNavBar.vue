<script setup lang="ts">
const onClick = () => history.back()
</script>

<template>
  <div class="op-nav-bar">
    <VanIcon name="arrow-left" color="#fff" size="20px" @click="onClick" />
  </div>
</template>

<style lang="scss" scoped>
.op-nav-bar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 10px;
  left: 20px;

  z-index: 9999;
}
</style>
