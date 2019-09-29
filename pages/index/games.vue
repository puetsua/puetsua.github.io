<i18n>
en:
  title: Games | Pue-Tsuâ
  description: Games made by Pue-Tsuâ.
  games: Games
  underConstruction: Under construction... ᕕ( ᐛ )ᕗ
zh:
  title: 自製遊戲 | 飛蛇
  description: 所有飛蛇做的遊戲。
  games: 自製遊戲
  underConstruction: 施工中... ᕕ( ᐛ )ᕗ
</i18n>

<template>
  <div id="games">
    <div>
      <h2>{{ $t('games') }}</h2>
      <h2>{{ $t('underConstruction') }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'games',
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
