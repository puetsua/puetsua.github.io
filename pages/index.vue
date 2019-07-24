<template>
  <div id="App">
    <transition name="fade" @after-enter="showPage">
      <Header v-if="fadeDisplay" />
    </transition>
    <div style="height:10px" />
    <transition name="page">
      <div v-if="pageDisplay" id="mainDisplay">
          <nuxt-child />
      </div>
    </transition>
    <div style="height:50px" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      fadeDisplay: false,
      pageDisplay: false
    }
  },
  mounted: function () {
    this.fadeDisplay = true
  },
  methods: {
    showPage: function () {
      this.pageDisplay = true
    }
  }
}
</script>

<style>
#App {
  text-align: center;
  vertical-align: middle;
  min-height: 100%;
}

.fade-enter-active,
.fade-leave-active,
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease;
}

.fade-enter,
.fade-leave-to,
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
