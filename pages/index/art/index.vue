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
      title: 'Art | Pue-Tsuâ',
      description: 'Pue-Tsuâ\'s art gallery and status.'
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
  },
  mounted () {
    window.TrelloCards.load(document, { compact: true, allAnchors: false })
  }
}
</script>

<style>
</style>
