<script lang="ts" setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
useHead({
  title: 'TuPahm',
  meta: [
    { name: 'description', content: 'This is my portfolio' }
  ],
})
</script>
<template>
  <Container class="h-full">
    <div class="h-full flex items-center">
      <div class="basis-1/2">
        <div class="text-5xl font-pacifico text-primary mb-1">Hi!</div>
        <div class="text-5xl mb-2 font-bold">
          My name's <span class="text-primary">Pham Thanh Tu</span>
        </div>
        <div class="text-4xl mb-3 font-bold">
          FRONT END DEVELOPER
        </div>
        <div class="text-xl text-gray-300 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quas aspernatur, fugit dolor obcaecati ad pariatur eveniet, odio veritatis cupiditate repellat quam. Rerum alias ipsum aut perferendis enim ipsam incidunt.
        </div>
        <div class="flex gap-3 items-center">
          <Icon name="i-logos:html-5" class="size-10" />
          <Icon name="i-logos:css-3" class="size-10" />
          <Icon name="i-logos:javascript" class="size-10" />
          <Icon name="i-logos:vue" class="size-10" />
          <Icon name="i-logos:nuxt-icon" class="size-10" />
          <Icon name="i-logos:figma" class="size-10" />
          <Icon name="i-logos:adobe-xd" class="size-10" />
          <Icon name="i-logos:github-icon" class="size-10" />
          <Icon name="i-logos:vitejs" class="size-10" />
          <Icon name="i-logos:visual-studio-code" class="size-10" />
        </div>
      </div>
      <div class="basis-1/2 flex justify-center items-center">
        <DotLottieVue style="height: 600px; width: 600px" autoplay loop src="https://lottie.host/a2ce0f8d-2ba6-4c78-8580-e70d55a57111/cAkFrTpNtx.lottie" />
      </div>
    </div>
  </Container>
</template>
