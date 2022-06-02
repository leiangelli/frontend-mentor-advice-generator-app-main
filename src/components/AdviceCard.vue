<template>
  <section
    class="advice-card"
    :class="{
      'is-loading': !result
    }"
  >
    <h1>
      <template v-if="result">Advice #{{ result?.id }}</template>
    </h1>

    <p v-if="result">"{{ result?.advice }}"</p>

    <template v-else>
      <p v-for="i in 4" :key="i"></p>
    </template>

    <hr v-if="result" />

    <button class="advice-card__button" @click="getAdvice()">
      <img src="@/assets/images/icon-dice.svg" alt="dice" />
    </button>
  </section>
</template>

<script setup lang="ts">
// dependencies
import { onMounted, computed } from 'vue'

// store
import { adviceStore } from '@/stores/advice'
const advice = adviceStore()

async function getAdvice() {
  await advice.fetch()
}

onMounted(async () => {
  await getAdvice()
})

const result = computed(() => advice.list)
</script>

<style lang="scss">
@import '@/sass/style.scss';
</style>
