<template>
  <div id="Default">
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style>
#Default {
  height: 100%;
}
</style>
