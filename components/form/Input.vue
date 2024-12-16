<script lang="ts" setup>
interface Props {
  name: string;
  type: string;
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
      :type="type"
      :placeholder="placeholder" />
  </FormBase>
</template>
