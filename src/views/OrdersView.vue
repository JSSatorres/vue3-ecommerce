<script setup>
import { ref, onMounted, watch } from 'vue'
import BasicLayout from '../layout/BasicLayout.vue'

const pepe = ref(null)
console.log(pepe.value)

onMounted(() => {})

watch()
</script>

<template>
  <main>
    <BasicLayout>
      <h3>orders</h3>
    </BasicLayout>
  </main>
</template>
