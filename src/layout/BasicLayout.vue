<script setup>
import Menu from '../components/MainMenu.vue'
</script>

<template>
  <div class="basic-layout">
    <Menu />
    <div class="ui container">
      <slot />
    </div>
  </div>
</template>
