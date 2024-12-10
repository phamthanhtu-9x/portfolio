<script lang="ts" setup>
import HighLightText from '../typo/HighLightText';
const route = useRoute();
const line = ref();
const navs = ref();

const menus = [
  {
    text: 'Home',
    url: '/',
    name: 'index',
  },
  {
    text: 'About',
    url: '/about',
    name: 'about',
  },
  {
    text: 'Experience',
    url: '/experience',
    name: 'experience',
  },
  {
    text: 'Contact',
    url: '/contact',
    name: 'contact',
  },
];

const calLine = (target) => {
  const navsX = navs.value.getBoundingClientRect().x;
  const eX = target.getBoundingClientRect().x;

  const left = eX - navsX;

  line.value.style.left = left + 'px';
  line.value.style.width = target.offsetWidth + 'px';
};

const onMouseOver = (e) => {
  calLine(e.target);
};

const activeMenu = () => {
  const index = menus.findIndex((menu) => menu.name === route.name);
  const eTarget = navs.value.children[index];

  calLine(eTarget);
};
onMounted(() => {
  activeMenu();
});
</script>
<template>
  <div class="relative py-2 flex items-center">
    <Container>
      <div class="flex items-center justify-between">
        <HighLightText class="text-3xl font-pacifico">{{ `<TuPahm />` }}</HighLightText>

        <div class="flex gap-8 items-center">
          <div
            ref="navs"
            class="md:flex hidden lg:gap-8 gap-4 items-center relative"
            @mouseleave="activeMenu">
            <nuxt-link
              v-for="menu in menus"
              :to="menu.url">
              <span @mouseover="onMouseOver">
                {{ menu.text }}
              </span>
            </nuxt-link>

            <div
              ref="line"
              class="absolute top-full h-1 bg-primary transition-all ease-in-out"></div>
          </div>

          <div class="flex gap-2 items-center justify-center">
            <PrimaryButton class="text-md">Download CV<Icon name="i-humbleicons:download-alt" class="size-5" /></PrimaryButton>

            <LayoutMobileMenu :menus="menus" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
