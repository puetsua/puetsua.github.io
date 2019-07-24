<template>
  <div id="App">
    <transition name="fade" @after-enter="showPage">
      <Header v-if="fadeDisplay" />
    </transition>
    <div style="height:10px" />
    <transition name="page">
      <div v-if="pageDisplay" id="mainDisplay">
        <transition name="view">
          <nuxt-child />
        </transition>
      </div>
    </transition>
    <div style="height:50px" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
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
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: "Microsoft JhengHei", "LiHei Pro", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3d1b5a;
}

body {
  background-color: #f0e8ed;
}

#App {
  text-align: center;
  vertical-align: middle;
  min-height: 100%;
}

.fade-enter-active,
.fade-leave-active,
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.fade-enter,
.fade-leave-to,
.page-enter,
.page-leave-to {
  opacity: 0;
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.2s ease;
}

.view-enter-active {
  transition-delay: 0.2s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>
