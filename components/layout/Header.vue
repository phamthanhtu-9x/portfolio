<script lang="ts" setup>
import menus from '~/data/menus';
import information from '~/data/information';
import ThemeSwitch from '../ThemeSwitch.vue';

const route = useRoute();
const line = ref();
const navs = ref();

const calLine = (target: any) => {
  const navsX = navs.value.getBoundingClientRect().x;
  const eX = target.getBoundingClientRect().x;

  const left = eX - navsX;

  line.value.style.left = left + 'px';
  line.value.style.width = target.offsetWidth + 'px';
};

const onMouseOver = (e: any) => {
  calLine(e.target);
};

const activeMenu = () => {
  let index;

  if (route.hash) {
    index = menus.findIndex((menu) => menu.url === route.hash);
  } else {
    index = menus.findIndex((menu) => menu.name === route.name);
  }

  const eTarget = navs.value.children[index];

  calLine(eTarget);
};

onMounted(() => {
  activeMenu();
});
</script>
<template>
  <div class="relative py-2 flex items-center z-20">
    <Container>
      <div class="flex items-center justify-between">
        <TypoHighLightText class="md:text-3xl text-2xl font-pacifico"
          ><span class="text-black"><</span>{{ information.head.title
          }}<span class="text-black"> /></span></TypoHighLightText
        >

        <div class="flex gap-8 items-center">
          <div
            ref="navs"
            class="md:flex hidden lg:gap-8 gap-4 items-center relative"
            @mouseleave="activeMenu">
            <div v-for="menu in menus">
              <nuxt-link
                v-if="!menu.url.includes('#')"
                :to="menu.url">
                <span @mouseover="onMouseOver">
                  {{ menu.text }}
                </span>
              </nuxt-link>

              <a v-else :href="menu.url">
                <span @mouseover="onMouseOver">
                  {{ menu.text }}
                </span>
              </a>
            </div>


            <div
              ref="line"
              class="absolute top-full h-1 bg-primary transition-all ease-in-out"></div>
          </div>

          <div class="flex gap-2 items-center justify-center">
            <ThemeSwitch />

            <PrimaryButton class="md:text-md text-sm"
              ><span class="sm:inline-block hidden">Download</span> CV<Icon
                name="i-humbleicons:download-alt"
                class="size-5"
            /></PrimaryButton>

            <LayoutMobileMenu :menus="menus" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
