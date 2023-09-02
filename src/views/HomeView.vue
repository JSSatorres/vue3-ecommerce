<script setup>
import BasicLayout from '../layout/BasicLayout.vue'
import ProductsListing from '../components/ProductsListing.vue'
import { ref, onMounted } from 'vue'
import { getProductsApi } from '../api/products'

let products = ref(null)

onMounted(async () => {
  const response = await getProductsApi(2)
  products.value = response
  console.log('dfdsfsdefdsferefrerfreeeeeeeeeeeeeeeeee', products.value)
})
</script>

<template>
  <main>
    <BasicLayout>
      <h1>Ultimos Productos</h1>
      <div class="" v-for="product in products" :key="product.id">
        <ProductsListing :product="product" />
      </div>
    </BasicLayout>
  </main>
</template>
