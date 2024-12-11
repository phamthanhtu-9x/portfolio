<script lang="ts" setup>
import information from '~/data/information';
</script>
<template>
  <div class="min-h-[40px] flex items-center">
    <Container>
      <div class="text-xs text-gray-400 inline-flex items-center">Copy right by {{ information.email }}</div>
    </Container>
  </div>
</template>
