<script lang="ts" setup>
import information from '~/data/information';
useHead({
  title: information.head.title,
  meta: [{ name: 'description', content: information.head.description }],
});
</script>
<template>
  <SectionsIntro />

  <SectionsAbout />

  <SectionsProjects />
</template>
