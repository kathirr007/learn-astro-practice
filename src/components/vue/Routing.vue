<script setup lang="ts">
import { navigate } from 'astro:transitions/client'

function handleChange(e: Event) {
  const selectElement = e.target as HTMLSelectElement
  navigate(selectElement.value)
}
</script>

<template>
  <select @change="handleChange">
    <option value="/about">
      About
    </option>
    <option value="/blog">
      Blog
    </option>
  </select>
</template>

<style scoped>

</style>
