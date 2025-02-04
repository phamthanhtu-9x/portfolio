<script lang="ts" setup>
interface Props {
  typeArray: string[];
}

const { typeArray } = defineProps<Props>();

const state = reactive({
  typeValue: '',
  typeStatus: false,
  typingSpeed: 200,
  erasingSpeed: 100,
  newTextDelay: 200,
  typeArrayIndex: 0,
  charIndex: 0,
});

function typeText() {
  if (state.charIndex < typeArray[state.typeArrayIndex].length) {
    if (!state.typeStatus) {
      state.typeStatus = true;
    }

    state.typeValue += typeArray[state.typeArrayIndex].charAt(state.charIndex);
    state.charIndex += 1;

    setTimeout(typeText, state.newTextDelay);
  } else {
    state.typeStatus = false;
    setTimeout(eraseText, state.newTextDelay);
  }
}

function eraseText() {
  if (state.charIndex > 0) {
    if (!state.typeStatus) {
      state.typeStatus = true;
    }

    state.typeValue = typeArray[state.typeArrayIndex].substring(
      0,
      state.charIndex - 1,
    );
    state.charIndex -= 1;
    setTimeout(eraseText, state.erasingSpeed);
  } else {
    state.typeStatus = false;
    state.typeArrayIndex += 1;
    if (state.typeArrayIndex >= typeArray.length) {
      state.typeArrayIndex = 0;
    }

    setTimeout(typeText, state.typingSpeed + 1000);
  }
}

onMounted(() => {
  setTimeout(typeText, state.newTextDelay + 200);
});
</script>
<template>
  <span>
    <span class="typed-text">{{ state.typeValue }}</span>
    <span
      class="cursor"
      :class="{ typing: state.typeStatus }"
      >&nbsp;</span
    >
  </span>
</template>
<style>
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #000;
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #000;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
