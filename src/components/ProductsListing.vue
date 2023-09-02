<script setup>
// import { getTokenApi, deleteTokenApi } from '../api/token'
// import { getCategoriesApi } from '../api/category'
import { defineProps } from 'vue'
// import { RouterLink } from 'vue-router'

const { product } = defineProps({
  product: String
})

console.log(product)
// const { product } = toRefs(props)
// const token = getTokenApi()
// const categories = ref()
// const logout = () => {
//   deleteTokenApi()
//   location.replace('/')
// }

// onMounted(async () => {
//   const response = await getCategoriesApi()
//   categories.value = response?.data
//   console.log(categories?.value)
// })
</script>

<template>
  <div class="ui secondary menu">
    <h1>{{ product?.attributes?.Name }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #16202b;

  .item {
    color: #fff;
    &:hover {
      color: #1fa1f1;
    }
  }

  .menu.left {
    width: 50%;
    .ui.image {
      width: 40px;
    }
  }

  .menu.right {
    width: 50%;
    justify-content: flex-end;

    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
