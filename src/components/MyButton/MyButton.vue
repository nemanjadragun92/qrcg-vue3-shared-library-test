<script setup lang="ts">
</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
}
.btn.primary {
  background: hsl(239, 100%, 27%);
  color: #fff;
}
</style>
