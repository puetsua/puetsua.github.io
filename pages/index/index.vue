<i18n>
en:
  title: Pue-Tsuâ
  description: "Pue-Tsuâ is a game developer, artist, programmer from Taiwan, R.O.C!"
  art: Art & Commission
  games: Games
  about: About Pue-Tsuâ
  socialmedia: Social Media
  subscribe: Subscribe
  subTitle: Subscribe to my art and games news
  subDesc: Subscribe to my list so you don't miss any Commissions, YCH or any major game release or updates from me!
zh:
  title: 飛蛇
  description: "飛蛇，一位喜歡遊戲開發、繪圖、寫程式的普通人。來自自由地區的台灣。"
  art: 繪圖與委託
  games: 自製遊戲
  about: 關於飛蛇
  socialmedia: 社群媒體
  subscribe: 訂閱
  subTitle: 訂閱
  subDesc: 訂閱
</i18n>

<template>
  <div id="home">
    <div>
      <Portal asset="art.png" :desc="$t('art')" to="/art" />
      <Portal asset="games.png" :desc="$t('games')" to="/games" />
      <Portal asset="aboutme.png" :desc="$t('about')" to="/about" />
    </div>
    <div class="panelHolder">
      <h2>{{ $t("socialmedia") }}</h2>
      <div class="panel">
        <a href="https://x.com/puetsua" target="_blank">
          <img src="@/assets/socialmedia_x.png" height="50px" />
        </a>
        <a href="https://bsky.app/profile/puetsua.bsky.social" target="_blank">
          <img src="@/assets/socialmedia_bluesky.png" height="50px" />
        </a>
        <a href="https://www.facebook.com/puetsua" target="_blank">
          <img
            src="@/assets/socialmedia_fb.png"
            height="50px"
            v-if="$i18n.locale == 'zh'"
          />
        </a>
        <a href="https://puetsua.itch.io/">
          <img src="@/assets/socialmedia_itchio.png" height="50px" />
        </a>
      </div>
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

#tinyletter {
  font-size: 10px;
}

.panelHolder {
  max-width: 1000px;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
}

.panel {
  border: 1px dashed #4e2470;
  margin: 10px 0px auto;
  padding: 10px 10px;
  text-align: left;
  background-color: #ffffff;
}

input[type="text"] {
  margin: 3px 0px;
  padding: 4px 4px;
  border: 2px solid #3d1b5a;
  border-radius: 10px;
  background-color: #f9f1ff;
}

input[type="text"]:focus {
  background-color: white;
}

input[type="submit"] {
  margin: 3px 0px;
  padding: 4px 15px;
  background: #3d1b5a;
  border: 2px solid #3d1b5a;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

input[type="submit"]:hover {
  background: #f0e8ed;
  color: #3d1b5a;
}
</style>
