<template>
  <div id="personal">
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
  }
}
</script>

<style>
#personal {
  font-family: Helvetica, "Microsoft JhengHei", "LiHei Pro", Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3d1b5a;

  text-align: center;
  vertical-align: middle;
  height: 100%;
}

#personal a {
  color: #a855ec;
  text-decoration: none;
}

#personal a:hover {
  color: #cb8bff;
}

#mainpage {
  min-height: 100%;
  background-color: #f0e8ed;
}

</style>
