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
    <slot class="input input px-2 py-1.5 rounded-md border-2 border-gray-200 text-md block w-full" />
    <ErrorMessage
      :name="name"
      class="text-red-500" />
  </div>
</template>
<style scoped>
.input {
  width: 100%;
  outline: none;
  overflow: hidden;
  background-color: white;
  transition: all 0.2s;
}

.input:hover,
.input:focus {
  border: 2px solid var(--primary);
  box-shadow: 0px 0px 0px 4px rgb(255, 209, 100, 20%);
  background-color: white;
}
</style>
