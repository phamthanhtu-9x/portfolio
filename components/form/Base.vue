<script setup lang="ts">
interface Props {
  name: string;
  label?: string;
}

defineProps<Props>();
</script>
<template>
  <div>
    <label v-if="label" class="mb-2 block">
      {{ label }}
    </label>
    <slot class="input input px-2 py-1.5 rounded-md border-2 border-gray-200 text-md block" />
    <ErrorMessage
      :name="name"
      class="text-red-500" />
  </div>
</template>
<style scoped>
:deep(.input) {
  width: 100%;
  outline: none;
  overflow: hidden;
  background-color: white;
  transition: all 0.2s;
}

:deep(.input:hover),
:deep(.input:focus) {
  border: 2px solid var(--primary);
  box-shadow: 0px 0px 0px 4px var(--primary-shadow);
  background-color: white;
}
</style>
