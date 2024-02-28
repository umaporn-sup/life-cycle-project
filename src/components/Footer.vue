<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
//add component to DOM
onBeforeMount(() => {
  console.log('At Footer.vue, before mount')
})
onMounted(() => {
  console.log('At Footer.vue, mounted')
})
//remove component from DOM
onBeforeUnmount(() => {
  console.log('At Footer.vue, before unmount')
})
onUnmounted(() => {
  console.log('At Footer.vue, unmounted')
})
</script>

<template>
  <div class="flex flex-col justify-center text-xs italic items-center">
    <div class="w-1/4 border border-gray-100 mt-10"></div>
    <slot><p>--- Replace with your footer ---</p></slot>
  </div>
</template>

<style scoped></style>
