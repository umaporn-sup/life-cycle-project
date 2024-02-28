<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
//local registration
// import PageFooter from './components/Footer.vue'

//local registration
import PageHeader from './components/Header.vue'
onBeforeMount(() => {
  console.log('At App.vue, on before mount')
})
onMounted(() => {
  console.log('At App.vue, on mounted')
})
console.log('At App.vue, on created') //on created
const hasFooter = ref(true)
const yourName = ref('')
onBeforeUpdate(() => {
  // yourName.value = yourName.value.toUpperCase()
  console.log('At App.vue, on before update')
})
onUpdated(() => {
  console.log('At App.vue, on updated')
})
</script>

<template>
  <div>
    <PageHeader />
    <h1 class="flex p-2 text-2xl text-green-500">Vue Life Cycle</h1>
    <div class="flex items-center gap-2 p-2">
      <span class="text-lg">Footer</span>
      <input type="checkbox" v-model="hasFooter" />
      {{ hasFooter }}
    </div>
    <div class="flex items-center gap-2 p-2">
      <span>Your name:</span>
      <input
        v-model.trim="yourName"
        type="text"
        class="px-3 py-1 border border-gray-400 outline-none"
      />
      {{ yourName }}
    </div>
    <PageFooter v-if="hasFooter">
      <img src="./assets//congrat.svg" />
      <p>@copyright, School of Information of Technology, KMUTT</p>
    </PageFooter>
  </div>
</template>

<style scoped></style>
