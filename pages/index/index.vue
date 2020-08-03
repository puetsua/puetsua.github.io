<i18n>
en:
  title: Pue-Tsuâ
  description: "Pue-Tsuâ is a game developer, artist, programmer from Taiwan, R.O.C!"
  art: Art & Commission
  games: Games
  about: About Pue-Tsuâ
  socialmedia: Social Media
zh:
  title: 飛蛇
  description: "飛蛇，一位喜歡遊戲開發、繪圖、寫程式的普通人。來至自由地區的台灣。"
  art: 繪圖與委託
  games: 自製遊戲
  about: 關於飛蛇
  socialmedia: 社群媒體
</i18n>

<template>
  <div id="home">
    <div>
      <Portal asset="art.png" :desc="$t('art')" to="/art" />
      <Portal asset="games.png" :desc="$t('games')" to="/games" />
      <Portal asset="aboutme.png" :desc="$t('about')" to="/about" />
    </div>
    <div>
      <h2>{{ $t('socialmedia') }}</h2>
      <a href="https://twitter.com/puetsua" target="_blank"><img src="@/assets/socialmedia_twitter.png" height="50px"></a>
      <a href="https://www.facebook.com/puetsua" target="_blank"><img src="@/assets/socialmedia_fb.png" height="50px"></a>
      <a href="https://puetsua.itch.io/"><img src="@/assets/socialmedia_itchio.png" height="50px"></a>
    </div>
  </div>
</template>

<script>
import Portal from '@/components/Portal.vue'

export default {
  name: 'Home',
  components: {
    Portal
  },
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
#home {
  text-align: center;
  vertical-align: middle;
  width: 100%;
}
</style>
