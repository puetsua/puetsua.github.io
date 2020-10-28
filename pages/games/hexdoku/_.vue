<template>
  <div id="notfound">
    <div>
      <h2>Page is not found.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notfound',
  data () {
    return {
      title: 'Page not Found | Norah Galaksio',
      description: 'Page not Found, why are you sharing this? O_o'
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

</style>
