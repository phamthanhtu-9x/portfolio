<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import * as yup from 'yup';
import information from '~/data/information';

useHead({
  title: 'Contact me',
});

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required(),
});

const { handleSubmit, resetForm } = useForm<ContactForm>({
  validationSchema
});

const onSubmit = handleSubmit(values => {
  console.log('values', values);
  resetForm({
    values: {
      name: '',
      email: '',
      message: '',
    }
  })
})
</script>

<template>
  <Container class="h-full">
    <div class="h-full flex items-center justify-center">
      <DotLottieVue
        class="xl:w-[600px] xl:h-[600px] lg:w-[400px] lg:h-[400px] md:block hidden"
        autoplay
        loop
        src="/lottie/contact.lottie" />

      <div
        class="w-96 py-6 md:px-6 px-4 space-y-4 bg-white sm:shadow-md rounded-md overflow-hidden">
        <div class="text-3xl font-bold">
          Contact <span class="text-primary">Me!</span>
        </div>

        <form
          @submit="onSubmit">
          <div class="space-y-4">
            <FormInput
              name="name"
              type="text"
              label="Your name:" />

            <FormInput
              name="email"
              type="mail"
              label="Your email:" />

            <FormTextarea
              name="message"
              label="Your message:" />

            <div class="col-span-2 flex justify-center">
              <SecondaryButton
                type="submit"
                class="w-full"
                >Submit</SecondaryButton
              >
            </div>
          </div>
        </form>

        <div class="flex gap-3">
          <Tooltip tooltip="Gmail">
            <a :href="`mailto:${information.email}`" target="_blank">
              <Icon name="logos:google-gmail" class="md:size-6 size-5" />
            </a>
          </Tooltip>
          <Tooltip tooltip="Linkedin">
            <a :href="information.linkedin" target="_blank">
              <Icon name="logos:linkedin-icon" class="md:size-6 size-5" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  </Container>
</template>
