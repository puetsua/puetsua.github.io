<template>
  <div id="art">
    <blockquote class="trello-card-compact">
      <a href="https://trello.com/c/7qdlWk9U">Trello Card</a>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'art',
  data () {
    return {
      title: 'Art | Pue-Tsuâ'
    }
  },
  head () {
    return {
      titleTemplate: this.title,
      meta: [
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@puetsua' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Pue-Tsuâ\'s art gallery.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.puetsua.me/logo.png' },
        { hid: 'twitter:image:src', name: 'twitter:image:src', content: 'https://www.puetsua.me/logo.png' }
      ]
    }
  },
  mounted () {
    window.TrelloCards.load(document, { compact: true, allAnchors: false })
  }
}
</script>

<style>
</style>
