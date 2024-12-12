<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

useHead({
  title: 'Contact me'
})
</script>

<template>
  <Container class="h-full">
    <div class="h-full flex items-center justify-center">
      <DotLottieVue
        class="xl:w-[600px] xl:h-[600px] lg:w-[400px] lg:h-[400px]"
        autoplay
        loop
        src="/lottie/contact.lottie" />

      <div class="w-96 py-6 px-4 space-y-4 bg-white shadow-md rounded-md">
        <div class="text-3xl font-bold">
          Contact <span class="text-primary">Me!</span>
        </div>

        <FormInput type="text" label="Your name:" />
        <FormInput type="mail" label="Your email:" />
        <FormTextarea label="Your message:" />

        <div class="col-span-2 flex justify-center">
        <SecondaryButton class="w-full">Submit</SecondaryButton>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>

</style>
