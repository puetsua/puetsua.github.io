<template>
  <div id="norahgalaksio">
    <div id="mainpage_ng">
      <Header />
      <nuxt-child />
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
  /* Palette #12254c #18226d #24599e #6c94c1 #c6e9ff */
#norahgalaksio {
  font-family: Helvetica, "Microsoft JhengHei", "LiHei Pro", Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c6e9ff;

  text-align: center;
  vertical-align: middle;
  height: 100%;
}

#norahgalaksio a {
  color: #6c94c1;
  text-decoration: none;
}

#norahgalaksio a:hover {
  color: #c6e9ff;
}

#mainpage_ng {
  min-height: 100%;
  background-color: #12254c;
}

</style>
