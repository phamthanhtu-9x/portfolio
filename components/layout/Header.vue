<script lang="ts" setup>
import HighLightText from '../typo/HighLightText';
const route = useRoute();
const line = ref();
const navs = ref();
const isShow = ref(false);

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

const onToggleMenu = () => {
  isShow.value = !isShow.value;
}

onMounted(() => {
  activeMenu();
});
</script>
<template>
  <div class="relative py-2 flex items-center">
    <Container>
      <div class="flex items-center justify-between">
        <HighLightText class="text-2xl">Pham Thanh Tu</HighLightText>

        <div class="flex gap-8 items-center">
          <div
            ref="navs"
            class="md:flex hidden gap-8 items-center relative"
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
              class="absolute top-full h-1 bg-primary transition-all"></div>
          </div>

          <div class="flex gap-4 items-center justify-center">
            <PrimaryButton>Download</PrimaryButton>

            <HamburgerButton class="md:hidden" :checked="isShow" @click="onToggleMenu" />

            <div :class="`absolute top-full left-0 w-full p-4 bg-primary text-white text-center space-y-3 transition-all ${isShow ? '' : 'opacity-0 invisible'}`">
              <nuxt-link
                v-for="menu in menus"
                :to="menu.url"
                class="block">
                <span @mouseover="onMouseOver">
                  {{ menu.text }}
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
