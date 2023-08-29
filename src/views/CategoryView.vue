<script setup>
// import { ref, onMounted, watch } from 'vue'
import BasicLayout from '../layout/BasicLayout.vue'
import { useRoute } from 'vue-router'

// // import { getProductsCategory } from "../api/product";
// // import Product from "../components/Product.vue";

const route = useRoute()
console.log(route.params.variant)
// const categoryRoute = ref(null)
// console.log(params)
// console.log(params.category)
// // const products = ref(null);

// onMounted(() => {
//   categoryRoute.value = params.category
// })

// watch(
//   () => params,
//   (newParams) => {
//     categoryRoute.value = newParams.category
//   },
//   { deep: true }
// )

// const getProduts = async (category) => {
//   const response = await getProductsCategory(category);
//   products.value = response;
// };

// onMounted(() => {
//   getProduts(params.category);
// });
</script>

<template>
  <main>
    <BasicLayout>
      <h3>Category {{ route.params.variant }}</h3>
    </BasicLayout>
  </main>
</template>
