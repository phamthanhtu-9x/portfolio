<script lang="ts" setup>
interface Props {
  menus: any[]
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
  const links = menu.querySelectorAll('.link');

  tl.to(menu, {
    duration: 0.75,
    opacity: 1,
    display: 'block',
    ease: 'expo.inOut',
  })

  tl.from(links, {
    duration: 0.75,
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: 'expo.inOut',
  }, "-=0.5");

  tl.reverse();
});
</script>
<template>
  <HamburgerButton
    class="md:hidden"
    :checked="isShow"
    @click="onToggleMenu" />

  <div
    :class="`menu-mobile absolute top-full left-0 w-full p-4 bg-primary text-white text-center space-y-3 opacity-0 hidden`">
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
