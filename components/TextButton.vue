<template>
  <button class="button" :class="{ blockStyle: block }">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'TextButton',
  props: {
    block: Boolean
  }
}
</script>

<style scoped>
.button {
  display: inline-block;
  margin: 3px 0px;
  padding: 6px 20px;
  background: #3d1b5a;
  border: 2px solid #3d1b5a;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;
}

.blockStyle {
  min-width: 100%;
}

.button:hover {
  background: #f0e8ed;
  color: #3d1b5a;
}
</style>
