<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const active = ref(route.name as string)

watch(active, (newVal) => {
  console.log(newVal)
  router.push(newVal)
})
</script>
<template>
  <RouterView />
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="wap-home-o" info="3">首页</van-tabbar-item>
    <van-tabbar-item name="order" icon="miniprogram-o">订单</van-tabbar-item>
    <van-tabbar-item name="me" icon="user">我的</van-tabbar-item>
  </van-tabbar>
</template>
