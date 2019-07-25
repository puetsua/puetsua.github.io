<template>
  <div id="App">
    <div id="mainpage">
      <Header />
      <div style="height:10px" />
      <div id="mainDisplay">
        <nuxt-child />
      </div>
      <div style="height:50px" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      title: 'Pue-Tsuâ',
      description: 'Pue-Tsuâ is a game developer, artist, programmer from Taiwan, R.O.C!'
    }
  },
  head () {
    var currentUrl = process.env.baseUrl + this.$route.fullPath
    var head = {
      title: this.title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:description', name: 'og:description', content: this.description },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:url', name: 'og:url', content: currentUrl }
      ]
    }
    head.meta = head.meta.concat(process.env.socialMeta)
    return head
  }
}
</script>

<style>
#App {
  text-align: center;
  vertical-align: middle;
  height: 100%;
}

#mainpage {
  min-height: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.2s ease;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.itemFade-enter-active,
.itemFade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.itemFade-enter,
.itemFade-leave-to {
  opacity: 0;
}
</style>
