<script lang="ts" setup>
interface Props {
  name: string,
  placeholder?: text,
  label?: text,
}

defineProps<Props>()
</script>
<template>
  <div>
    <label class="mb-2">
      {{ label }}
    </label>
    <Field :name="name" class="input px-2 py-1 rounded-md border-2 border-gray-200" rows="8" :placeholder="placeholder" as="textarea" />
    <ErrorMessage :name="name" class="text-red-500" />
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
