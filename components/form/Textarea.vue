<script lang="ts" setup>
interface Props {
  name: string;
  placeholder?: string;
  label?: string;
}

defineProps<Props>();
</script>
<template>
  <FormBase :name="name" :label="label" v-slot="slotProps">
    <Field
      :class="slotProps.class"
      :name="name"
      as="textarea"
      rows="8"
      :placeholder="placeholder" />
  </FormBase>
</template>
