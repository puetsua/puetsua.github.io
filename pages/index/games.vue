<template>
  <div id="games">
    <div>
      <h2>Games</h2>
      <h2>Under construction... ᕕ( ᐛ )ᕗ</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'games',
  data () {
    return {
      title: 'Games | Pue-Tsuâ',
      description: 'Games made by Pue-Tsuâ.'
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
#games {
  max-width: 1000px;
  position: relative;
  display: inline-block;
}
</style>
