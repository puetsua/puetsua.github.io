<template>
  <div id="notfound">
    <div>
      <h2>404 Page is not found.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notfound',
  data () {
    return {
      title: '404 Not Found | Pue-Tsuâ'
    }
  },
  head () {
    return {
      titleTemplate: this.title,
      meta: [
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@puetsua' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: '404 Not Found, why are you sharing this? O_o' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.puetsua.me/logo.png' },
        { hid: 'twitter:image:src', name: 'twitter:image:src', content: 'https://www.puetsua.me/logo.png' }
      ]
    }
  }
}
</script>

<style>

</style>
