<i18n>
en:
  title: Hexdoku
  description: "A sudoku-like, puzzle game with hexagons. Player must fill the grid with different shapes and ensure each directions and area contains only unique shapes."
  introTitle: >
    Sudoku but hexagons?
  socialmedia: Social Media
  other: Other stuffs
  othergame: Games from Puetsua
  presskit: Press kit
  steamBadge: "en-us/steam_logo_small.png"
zh:
  title: 形獨
  description: "類數獨的解謎遊戲，有別於一般的數獨，使用六角形的網格讓玩家填入形狀，並能在三個方向與區域能夠不重複。"
  introTitle: >
    Sudoku but hexagons?
  socialmedia: 社群媒體
  other: 其他東西
  othergame: 其他飛蛇的遊戲
  presskit: 新聞包
  steamBadge: "zh-tw/steam_logo_small.png"
</i18n>

<template>
  <div id="home">
    <client-only>
      <div id="introduction">
        <div class="infobox_outer">
          <img src="@/assets/hexdoku/icon.png" height="64px" class="sticker" />
          <div class="infobox">
            <center>
              <h1>{{ $t("introTitle") }}</h1>
              <img src="@/assets/hexdoku/play.gif" height="256px" v-responsive.lg.xl.md/>
              <img src="@/assets/hexdoku/play.gif" height="128px" v-responsive.sm.xs/>
            </center>
            <p>{{ $t("description") }}</p>
            <a href="https://store.steampowered.com/app/1414270/Hexdoku/">
              <img :src="imageSrc($t('steamBadge'))" height="50px" />
            </a>
          </div>
        </div>
        <div class="infobox_outer">
          <img src="@/assets/hexdoku/icon.png" height="64px" class="sticker" />
          <div class="infobox">
            <h3>{{ $t("socialmedia") }}</h3>
            <a href="https://x.com/PuetsuaGameDev" target="_blank">
              <img src="@/assets/socialmedia_x.png" height="50px" />
            </a>
            <a href="https://facebook.com/puetsua.gamedev" target="_blank">
              <img src="@/assets/socialmedia_fb.png" height="50px" />
            </a>
            <h3>{{ $t("other") }}</h3>
            <ul>
              <li>
                <a href="/games/">{{ $t('othergame') }}</a>
              </li>
              <li>
                <a href="/games/hexdoku/presskit">{{ $t('presskit') }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: this.$t('title'),
      description: this.$t('description'),
      index: null
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
  methods: {
    imageSrc (link) {
      try {
        return require('@/assets/' + link)
      } catch (e) {
        console.log(e)
        return null
      }
    }
  }
}
</script>

<style scoped>
/* Palette #5DADE2 #B8FFE8 #2981C3 #003b94 #25D4FF #FAFFDA */
#home {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  font-family: Arial, Helvetica, sans-serif;
}

#home a {
  color: #003b94;
}

#home a:hover {
  color: #25D4FF;
}

#introduction {
  padding: 0px 0px 20px 0px;
}

.sticker {
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
}

.infobox_outer {
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.infobox {
  text-align: left;
  padding: 30px 20px 10px 20px;
  border-radius: 5px;
  color: #003b94;
  background-color: #b8ffe8;
  border: 5px solid #5dade2;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
}
</style>
