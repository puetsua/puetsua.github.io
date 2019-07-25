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
      title: 'Games | Pue-Tsuâ'
    }
  },
  head () {
    return {
      titleTemplate: this.title,
      meta: [
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@puetsua' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Games made by Pue-Tsuâ.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.puetsua.me/logo.png' },
        { hid: 'twitter:image:src', name: 'twitter:image:src', content: 'https://www.puetsua.me/logo.png' }
      ]
    }
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
