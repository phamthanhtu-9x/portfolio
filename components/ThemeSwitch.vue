<template>
  <label
    for="theme"
    class="theme">
    <span class="theme-toggle-wrap">
      <input
        id="theme"
        class="theme-toggle"
        type="checkbox"
        role="switch"
        name="theme"
        value="dark" />
      <span class="theme-fill"></span>
      <span class="theme-icon">
        <span class="theme-icon-part"></span>
        <span class="theme-icon-part"></span>
        <span class="theme-icon-part"></span>
        <span class="theme-icon-part"></span>
        <span class="theme-icon-part"></span>
        <span class="theme-icon-part"></span>
        <span class="theme-icon-part"></span>
        <span class="theme-icon-part"></span>
        <span class="theme-icon-part"></span>
      </span>
    </span>
  </label>
</template>
<style scoped>
/* Default */
.theme {
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
}

.theme-fill,
.theme-icon {
  transition: 0.3s;
}

.theme-fill {
  background-color: var(--bg);
  display: block;
  mix-blend-mode: difference;
  position: fixed;
  inset: 0;
  height: 100%;
  transform: translateX(-100%);
}

.theme-icon,
.theme-toggle {
  z-index: 1;
}

.theme-icon,
.theme-icon-part {
  position: absolute;
}

.theme-icon {
  display: block;
  top: 0.6em;
  left: 0.65em;
  width: 0.8em;
  height: 0.8em;
}

.theme-icon-part {
  border-radius: 50%;
  box-shadow: 0.4em -0.4em 0 0.5em hsl(0, 0%, 100%) inset;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  width: 1em;
  height: 1em;
  transition: box-shadow var(--transDur) ease-in-out,
    opacity var(--transDur) ease-in-out, transform var(--transDur) ease-in-out;
  transform: scale(0.5);
}

.theme-icon-part ~ .theme-icon-part {
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.05em;
  top: 50%;
  left: calc(50% - 0.05em);
  transform: rotate(0deg) translateY(0.5em);
  transform-origin: 50% 0;
  width: 0.1em;
  height: 0.2em;
}

.theme-icon-part:nth-child(3) {
  transform: rotate(45deg) translateY(0.45em);
}

.theme-icon-part:nth-child(4) {
  transform: rotate(90deg) translateY(0.45em);
}

.theme-icon-part:nth-child(5) {
  transform: rotate(135deg) translateY(0.45em);
}

.theme-icon-part:nth-child(6) {
  transform: rotate(180deg) translateY(0.45em);
}

.theme-icon-part:nth-child(7) {
  transform: rotate(225deg) translateY(0.45em);
}

.theme-icon-part:nth-child(8) {
  transform: rotate(270deg) translateY(0.5em);
}

.theme-icon-part:nth-child(9) {
  transform: rotate(315deg) translateY(0.5em);
}

.theme__label,
.theme-toggle,
.theme-toggle-wrap {
  position: relative;
}

.theme-toggle,
.theme-toggle:before {
  display: block;
}

.theme-toggle {
  background-color: hsl(48, 90%, 85%);
  border-radius: 25% / 50%;
  box-shadow: 0 0 0 0.125em var(--primaryT);
  padding: 0.25em;
  width: 4em;
  height: 2em;
  -webkit-appearance: none;
  appearance: none;
  transition: background-color var(--transDur) ease-in-out,
    box-shadow 0.15s ease-in-out, transform var(--transDur) ease-in-out;
}

.theme-toggle:before {
  background-color: hsl(48, 90%, 55%);
  border-radius: 50%;
  content: '';
  width: 1.65em;
  height: 1.65em;
  margin-top: -1px;
  transition: 0.3s;
}

.theme-toggle:focus {
  box-shadow: 0 0 0 0.125em var(--primary);
  outline: transparent;
}

/* Checked */
.theme-toggle:checked {
  background-color: hsl(198, 90%, 15%);
}

.theme-toggle:checked:before,
.theme-toggle:checked ~ .theme-icon {
  transform: translateX(1.9em);
}

.theme-toggle:checked:before {
  background-color: hsl(198, 90%, 55%);
}

.theme-toggle:checked ~ .theme-fill {
  transform: translateX(0);
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(1) {
  box-shadow: 0.2em -0.2em 0 0.2em hsl(0, 0%, 100%) inset;
  transform: scale(1);
  /* top: 0.2em; */
  left: -0.1em;
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part ~ .theme-icon-part {
  opacity: 0;
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(2) {
  transform: rotate(45deg) translateY(0.8em);
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(3) {
  transform: rotate(90deg) translateY(0.8em);
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(4) {
  transform: rotate(135deg) translateY(0.8em);
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(5) {
  transform: rotate(180deg) translateY(0.8em);
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(6) {
  transform: rotate(225deg) translateY(0.8em);
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(7) {
  transform: rotate(270deg) translateY(0.8em);
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(8) {
  transform: rotate(315deg) translateY(0.8em);
}

.theme-toggle:checked ~ .theme-icon .theme-icon-part:nth-child(9) {
  transform: rotate(360deg) translateY(0.8em);
}

/* .theme-toggle-wrap {
  margin: 0 0.75em;
} */

@supports selector(:focus-visible) {
  .theme-toggle:focus {
    box-shadow: 0 0 0 0.125em var(--primaryT);
  }

  .theme-toggle:focus-visible {
    box-shadow: 0 0 0 0.125em var(--primary);
  }
}
</style>
