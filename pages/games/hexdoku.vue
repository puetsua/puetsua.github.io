<template>
  <div id="hexdoku">
    <div id="mainpage_hd">
      <Header />
      <nuxt-child />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/hexdoku/header.vue'
import Footer from '~/components/hexdoku/footer.vue'

export default {
  name: 'NorahGalaksio',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Palette #5DADE2 #B8FFE8 #2981C3 #25D4FF #FAFFDA */
#hexdoku {
  font-family: Helvetica, "Microsoft JhengHei", "LiHei Pro", Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;

  text-align: center;
  vertical-align: middle;
  height: 100%;
}

#hexdoku a {
  color: #6c94c1;
  text-decoration: none;
}

#hexdoku a:hover {
  color: #c6e9ff;
}

#mainpage_hd {
  min-height: 100%;
  background-image: linear-gradient(#25D4FF, #FAFFDA);
  background-color: #FAFFDA;
}

</style>
