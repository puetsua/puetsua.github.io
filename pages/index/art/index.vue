<i18n>
en:
  title: Art | Pue-Tsuâ
  description: Pue-Tsuâ's art gallery and status.
  community: Discord server
zh:
  title: 繪圖 | 飛蛇
  description: 飛蛇的畫廊跟委託情形
  community: Discord伺服器
</i18n>

<template>
  <div id="art">
    <blockquote class="trello-card-compact">
      <a href="https://trello.com/c/7qdlWk9U" target="_blank"
        >Commission Status Trello Card</a
      >
    </blockquote>
    <blockquote class="trello-card-compact">
      <a href="https://trello.com/c/O96zIs0A" target="_blank"
        >Fixed YCH Status Trello Card</a
      >
    </blockquote>
    <blockquote class="trello-card-compact">
      <a href="https://trello.com/c/IknDWOtO" target="_blank"
        >Ongoing YCH Auction</a
      >
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'art',
  data () {
    return {
      title: this.$t('title'),
      description: this.$t('description')
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
