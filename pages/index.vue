<script lang="ts" setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import information from '~/data/information';
import skills from '~/data/skills';
useHead({
  title: information.head.title,
  meta: [{ name: 'description', content: information.head.description }],
});
</script>
<template>
  <Container class="relative h-full">
    <div class="h-full flex items-center">
      <div class="md:basis-1/2 relative z-10">
        <div class="sm:text-5xl text-4xl font-pacifico text-primary mb-1">
          Hello!
        </div>
        <div class="sm:text-5xl text-4xl mb-2 font-bold">
          My name's <br class="xl:hidden inline-block" /><span
            class="text-primary"
            >{{ information.name }}</span
          >
        </div>
        <div class="sm:text-4xl text-3xl mb-3 font-bold uppercase">
          {{ information.title }}
        </div>
        <div class="sm:text-xl text-lg text-zinc-500 mb-6 font-light">{{ information.descriptions }}</div>
        <div class="flex flex-wrap gap-4 items-center">
          <Tooltip
            v-for="skill in skills"
            :tooltip="skill.name">
            <Icon
              :name="`i-logos:${skill.icon}`"
              class="md:size-9 size-7" />
          </Tooltip>
        </div>
      </div>
      <div class="basis-1/2 justify-end items-center md:flex hidden">
        <DotLottieVue
          class="xl:w-[600px] xl:h-[600px] lg:w-[400px] lg:h-[400px]"
          autoplay
          loop
          src="https://lottie.host/a2ce0f8d-2ba6-4c78-8580-e70d55a57111/cAkFrTpNtx.lottie" />
      </div>

      <div
        class="md:hidden block absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-[500px] z-0">
        <DotLottieVue
          class="w-full h-full"
          autoplay
          loop
          src="https://lottie.host/a35968c6-b029-4803-876f-57899c928424/hDdG9PCDEi.lottie" />
      </div>
    </div>
  </Container>
</template>
