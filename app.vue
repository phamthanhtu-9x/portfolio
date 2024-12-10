<script lang="ts" setup>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
</script>
<template>
  <div class="h-full flex flex-col">
    <Header />
    <div class="grow">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
