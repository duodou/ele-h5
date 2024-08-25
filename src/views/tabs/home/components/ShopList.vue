<template>
  <div class="home-shop-list">
    <OpList v-model:loading="loading" :finished="finished" finished-text="没有更过了" @load="onLoad">
      <ShopItem v-for="v in shopList" :key="v.id" :data="v"></ShopItem>
    </OpList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IShop } from '@/types'
import { fetchList } from '@/api/shop'
import OpList from '@/components/list/OpList'
import ShopItem from './ShopItem.vue'
const shopList = ref([] as IShop[])

const loading = ref(false)
const finished = ref(false)
let page = 1
const onLoad = async () => {
  console.log(shopList)
  const { data, total } = await fetchList({
    _page: page++,
    _limit: 6,
  })

  shopList.value.push(...data)
  loading.value = false
  if (shopList.value.length >= total) {
    finished.value = true
  }
}
</script>

<style lang="scss" scoped>
.home-shop-list {
  padding: 8px 10px;
}
</style>
