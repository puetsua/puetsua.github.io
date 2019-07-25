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
  head () {
    return {
      title: 'Pue-Tsuâ | Art'
    }
  },
  mounted () {
    window.TrelloCards.load(document, { compact: true, allAnchors: false })
  }
}
</script>

<style>
</style>
