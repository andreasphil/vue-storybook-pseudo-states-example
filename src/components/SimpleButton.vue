<template>
  <button :disabled="disabled" @click="$emit('clicked')" :class="appearance">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    appearance: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="css">
:root {
  --color-background: rgba(255, 255, 255, 1);
  --color-focus: rgba(66, 185, 131, 0.35);
  --color-primary: rgba(66, 185, 131, 1);

  --color-dark-background: rgba(255, 255, 255, 1);
  --color-dark-focus: rgba(66, 185, 131, 0.35);
  --color-dark-primary: rgba(66, 185, 131, 1);
}

button {
  --button-background: var(--color-background);
  --button-border-color: var(--color-primary);
  --button-color: var(--color-primary);
  --button-shadow: transparent;

  background: var(--button-background);
  border-radius: 0.5rem;
  border: 2px solid var(--button-border-color);
  box-shadow: 0px 0px 0px 4px var(--button-shadow);
  color: var(--button-color);
  font-family: sans-serif;
  font-size: 1rem;
  padding: 1rem 1.25rem;
}

button:focus {
  --button-shadow: var(--color-focus);

  outline: none;
}

button:hover {
  --button-background: var(--color-primary);
  --button-color: var(--color-background);
}

button:active {
  --button-background: var(--color-focus);
  --button-color: var(--color-primary);
}

button:disabled {
  filter: grayscale();
  opacity: 0.5;
  pointer-events: none;
}

button.primary {
  --button-background: var(--color-primary);
  --button-color: var(--color-background);
}
</style>
