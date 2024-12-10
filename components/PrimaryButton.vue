<template>
  <button class="btn py-1 px-2">
    <slot />
  </button>
</template>
<style scoped>
button {
  font-family: inherit;
  display: inline-block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid var(--primary);
  transition: color 0.5s;
  z-index: 1;
  border-radius: 6px;
  font-weight: 500;
  color: var(--primary);
}

button:before {
  content: "";
  position: absolute;
  z-index: -1;
  background: var(--primary);
  height: 150px;
  width: 200px;
  border-radius: 50%;
}

button:hover {
  color: #fff;
}

button:before {
  top: 100%;
  left: 100%;
  transition: all 0.7s;
}

button:hover:before {
  top: -30px;
  left: -30px;
}

button:active:before {
  background: var(--primary);
  transition: background 0s;
}
</style>
