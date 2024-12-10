<script lang="ts" setup>
interface Props {
  menus: any[];
}

defineProps<Props>();
const isShow = ref(false);
const tl = useGsap.timeline({ paused: true });

const onToggleMenu = () => {
  isShow.value = !isShow.value;
  tl.reversed(!tl.reversed());
};

onMounted(() => {
  const menu = document.querySelector('.menu-mobile');
  const overlay = document.querySelector('.overlay');
  const links = menu.querySelectorAll('.link');

  tl.to(menu, {
    duration: 0.5,
    opacity: 1,
    display: 'block',
    ease: 'expo.inOut',
  });

  tl.to(overlay, {
    duration: 2.5,
    top: '-50%',
    right: '-100%',
    ease: 'expo.inOut',
  });

  tl.from(
    links,
    {
      duration: 0.75,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'expo.inOut',
    },
    '-=0.5',
  );

  tl.reverse();
});
</script>
<template>
  <HamburgerButton
    class="md:hidden z-30"
    :checked="isShow"
    @click="onToggleMenu" />

  <div
    class="overlay fixed h-[200%] w-[200%] bg-primary -top-[200%] -right-[50%] !m-0 rounded-full z-10"></div>

  <div
    :class="`menu-mobile absolute top-0 left-0 w-full py-10 px-4 text-white text-center space-y-3 opacity-0 h-dvh hidden overflow-hidden z-20`">
    <nuxt-link
      v-for="menu in menus"
      :to="menu.url"
      class="block link">
      <span>
        {{ menu.text }}
      </span>
    </nuxt-link>
  </div>
</template>
