<template>
  <div class="loader-wrap">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss">
.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  animation: l16 1s infinite linear;

  &-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
  }
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
}
.loader::before {
  border-color: var(--color-blue) white;
  animation: inherit;
  animation-duration: .5s;
  animation-direction: reverse;
}
.loader::after {
  margin: 8px;
}
@keyframes l16 {
  100%{transform: rotate(1turn)}
}
</style>
<script setup lang="ts">
</script>