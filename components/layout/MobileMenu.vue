<script lang="ts" setup>
import type { MenuType } from '~/types/menu';

interface Props {
  menus: MenuType[];
}

defineProps<Props>();
const router = useRouter();
const isShow = ref(false);
const tl = useGsap.timeline({ paused: true });

const onToggleMenu = () => {
  isShow.value = !isShow.value;
  tl.reversed(!tl.reversed());
};

const linkTo = async (path: string) => {
  await tl.reversed(!tl.reversed());
  isShow.value = false;
  router.push({ path })
}

onMounted(() => {
  const menu = document.querySelector('.menu-mobile');
  const overlay = document.querySelector('.overlay');
  const links = menu?.querySelectorAll('.link');

  if (!links) {
    return;
  }

  tl.to(menu, {
    duration: 0.5,
    opacity: 1,
    display: 'block',
    ease: 'expo.inOut',
  });

  tl.to(overlay, {
    duration: 1.75,
    height: '120%',
    width: '190%',
    top: '0',
    right: '0',
    ease: 'expo.inOut',
  }, '-=1');

  tl.from(
    links,
    {
      duration: 0.75,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'expo.inOut',
    }, '-=1'
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
    class="overlay fixed h-[0] w-[0] bg-primary -top-[50px] -right-[50px] rounded-bl-[100%] !m-0 z-10"></div>

  <div
    :class="`menu-mobile absolute top-0 left-0 w-full py-10 px-4 text-white text-center space-y-3 opacity-0 h-dvh hidden overflow-hidden z-20`">
    <span
      v-for="menu in menus"
      :to="menu.url"
      @click="linkTo(menu.url)"
      class="block link">
      <span>
        {{ menu.text }}
      </span>
    </span>
  </div>
</template>
