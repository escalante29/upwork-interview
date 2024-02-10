<script setup>
import { ref } from 'vue'
import buildMenuWithStack from '../utils/menu-builder-stack'

const {items} = defineProps({
  items: Array,
})

const menuHtml = buildMenuWithStack(items)
</script>

<template>
  <div>
    <h1>Menu is:</h1>
    <div v-html="menuHtml"></div>
  </div>
</template>

<style scoped>

.menu {
  margin: 0;
  padding-left: 25px;
}

.submenu {
  padding-left: 50px;
}
</style>
