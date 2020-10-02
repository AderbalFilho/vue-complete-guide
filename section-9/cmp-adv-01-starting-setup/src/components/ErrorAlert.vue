<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  left: 30%;
  margin: 0;
  padding: 1rem;
  position: fixed;
  top: 20vh;
  width: 40%;
}
</style>
