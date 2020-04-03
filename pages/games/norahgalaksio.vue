<template>
  <div id="NorahGalaksio">
    <div id="mainpage">
      <Header />
      <div id="mainDisplay">
        <nuxt-child />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/norahgalaksio/header.vue'
import Footer from '~/components/norahgalaksio/footer.vue'

export default {
  name: 'NorahGalaksio',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#NorahGalaksio {
  text-align: center;
  vertical-align: middle;
  height: 100%;
}

#mainpage {
  min-height: 100%;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica, "Microsoft JhengHei", "LiHei Pro", Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c6e9ff;
  /* Palette #12254c #18226d #24599e #6c94c1 #c6e9ff */
}

body {
  background-color: #12254c;
}

body a {
  color: #6c94c1;
  text-decoration: none;
}

body a:hover {
  color: #c6e9ff;
}

#__nuxt {
  height: 100%;
}

#__layout {
  height: 100%;
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
