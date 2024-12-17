<script lang="ts" setup>
const useToast = useToastStore();
</script>
<template>
  <div class="min-h-dvh flex flex-col">
    <LayoutHeader />
    <div class="grow relative z-10">
      <NuxtPage />
    </div>
    <LayoutFooter />
    <Toast
      :is-show="useToast.isShow"
      :type="useToast.type"
      :message="useToast.message" />
  </div>
</template>
