<template>
  <div class="home-top">
    <div class="top">
      <img class="location-icon" src="@/assets/imgs/index_page/location.png" alt="" />
      <div class="location">地址地址</div>
      <img class="shopcart-icon" src="@/assets/imgs/index_page/shopcart.png" />
      <img class="comments-icon" src="@/assets/imgs/index_page/comments.png" />
    </div>
    <VanSticky>
      <OpSearch
        shape="round"
        background="linear-gradient(to right,rgb(53,200,250),rgb(31,175,243))"
        placeholder="世界茶饮，35减2"
        @inputClick="emits('searchClick')"
      >
        <template #right-icon>
          <div @click="emits('searchClick')">搜索</div>
        </template>
      </OpSearch>
    </VanSticky>

    <div class="search-recommend">
      <span v-for="item in props.recomments" class="tag" :key="item.value">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'
import { ISearchRecomment } from '@/types'
import OpSearch from '@/components/OpSearch.vue'
const props = defineProps({
  recomments: {
    type: Array as PropType<ISearchRecomment[]>,
    default: () => [],
  },
})
interface IEmits {
  (e: 'searchClick'): void
}
const emits = defineEmits<IEmits>()
const searchValue = ref('test')
const onSearch = (v?: string | number) => {
  console.log('search', v)
}
const onCancel = () => {
  console.log('onCancel')
}
const onClear = () => {
  console.log('onClear')
}
</script>

<style scoped lang="scss">
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  color: white;
  .top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0 10px;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;
    .location-icon {
      width: 20px;
      height: 20px;
    }
    .location {
      flex: 1;
    }
    .shopcart-icon {
      width: 24px;
      height: 24px;
    }
    .comments-icon {
      width: 28px;
      height: 24px;
      margin-left: 10px;
    }
  }
  .search-recommend {
    display: flex;
    padding: 0 10px 8px;
    .tag {
      font-size: 12px;
      border-radius: 10px;
      background: rgb(242, 242, 242, 0.3);
      padding: 2px 8px;
      margin-right: 10px;
    }
  }
}
</style>

<style lang="scss">
.home-top {
  .van-field__right-icon {
    margin-right: 0;
  }
}
</style>
