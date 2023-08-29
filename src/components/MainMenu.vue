<script setup>
import { getTokenApi, deleteTokenApi } from '../api/token'
import { getCategoriesApi } from '../api/category'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const token = getTokenApi()
const categories = ref()
const logout = () => {
  deleteTokenApi()
  location.replace('/')
}

onMounted(async () => {
  const response = await getCategoriesApi()
  categories.value = response?.data
  console.log(categories?.value)
})
</script>

<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/">
          <img class="ui small image" src="../assets/logo.png" alt="Ecommerce" />
        </router-link>

        <router-link
          v-for="category in categories"
          class="item"
          :key="category?.attributes?.id"
          :to="`/category/${category?.attributes?.slug}`"
        >
          <!-- :to="{
            name: 'category',
            params: { slug: category?.attributes?.slug }
          }" -->
          {{ category?.attributes?.title }}
        </router-link>
      </div>

      <div class="right menu">
        <router-link class="item" to="/login" v-if="!token"> Iniciar sesión </router-link>
        <template v-if="token">
          <router-link class="item" to="/orders">Pedidos</router-link>
          <span class="ui item cart" @click="openCart">
            <i class="shopping cart icon"></i>
          </span>
          <span class="ui item logout" @click="logout">
            <i class="sign-out icon"></i>
          </span>
        </template>
      </div>
    </div>
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
