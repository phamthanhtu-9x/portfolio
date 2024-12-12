<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import * as yup from 'yup';

useHead({
  title: 'Contact me',
});

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required(),
});

const onSubmit = (values, actions) => {
  console.log('values', values);
  actions.resetForm({
    values: {
      name: '',
      email: '',
      message: '',
    },
  });
};
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
        class="w-96 py-6 px-4 space-y-4 bg-white sm:shadow-md rounded-md overflow-hidden">
        <div class="text-3xl font-bold">
          Contact <span class="text-primary">Me!</span>
        </div>

        <Form
          @submit="onSubmit"
          :validation-schema="schema">
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
        </Form>
      </div>
    </div>
  </Container>
</template>
