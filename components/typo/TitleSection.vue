<script setup lang="ts">
interface Props {
  title: string;
  highlight?: string;
}

defineProps<Props>();
</script>
<template>
  <div class="text-4xl mb-5">
    <span class="font-bold">{{ title }}</span>
    <TypoHighLightText v-if="highlight" class="ml-2 font-pacifico bg-white shadow-lg rounded-lg px-2 py-1 inline-block">{{ highlight }}</TypoHighLightText>
  </div>
</template>
