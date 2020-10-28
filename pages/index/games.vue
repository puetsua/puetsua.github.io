<i18n>
en:
  title: Games | Pue-Tsuâ
  description: Games made by Pue-Tsuâ.
  games: Games
  fangames: Fangames
  underConstruction: Under construction... ᕕ( ᐛ )ᕗ
  gameDarkDream:
    imageSrc: darkdream.png
    name: Dark Dream
    description: |
      Starlight is trapped in an endless world with hostile shadow entities.

      This is a little web game to get familiar with Unity.
  gameNorahGalaksio:
    imageSrc: norahgalaksio.png
    name: Norah Galaksio
    description: |
      Norah Galaksio is a brick breaking adventure mobile game. Your spaceship is equipped with balls and a multi-purpose rebounder to clear all obstacles.

      Join Norah's team on their exploration the planet and help local citizens defeat invading enemy.
  gameTsuilam:
    imageSrc: tsuilam.png
    name: Star Tsui-Lam
    description: |
      Star Tsui-Lam is a strategy puzzle game. Player can explore planets, collect treasures, find relics from ancient civilization and solving puzzles.
  follow: Follow my game devlog and community
  gameHexdoku:
    imageSrc: hexdoku.png
    name: Hexdoku
    description: |
      A sudoku-like, puzzle game with hexagons. Player must fill the grid with different shapes and ensure each directions and area contains only unique shapes.
zh:
  title: 自製遊戲 | 飛蛇
  description: 所有飛蛇做的遊戲。
  games: 自製遊戲
  fangames: 二創遊戲
  underConstruction: 施工中... ᕕ( ᐛ )ᕗ
  gameDarkDream:
    imageSrc: darkdream.png
    name: 黑暗夢境 (英文)
    description: |
      Starlight被困在了一個無止境的世界之中，面對著各種邪惡的黑暗物體。

      這款網頁遊戲是用來練習Unity而做的。
  gameNorahGalaksio:
    imageSrc: norahgalaksio.png
    name: 探險磚家：諾拉
    description: |
      「探險磚家：諾拉」是一款破磚探險的手機遊戲。一位名為諾拉●蓋拉西歐的小馬，已經準備好要去探索星球並協助當地人了。

      這款遊戲之前有在Google Play上，不過我為了改版先行下架了。
  gameTsuilam:
    imageSrc: tsuilam.png
    name: 水藍星 (英文)
    description: |
      水藍星是一款策略解謎遊戲。玩家可以探索星球、收集寶物、尋找上古文明的遺物並解決各種難題。
  gameHexdoku:
    imageSrc: hexdoku.png
    name: 形獨
    description: |
      類數獨的解謎遊戲，有別於一般的數獨，使用六角形的網格讓玩家填入形狀，並能在三個方向與區域能夠不重複。
  follow: 追蹤我的開發紀錄與社群
</i18n>

<template>
  <div id="games">
    <div>
      <h2>{{ $t('games') }}</h2>
      <GameItem v-for="item in games" :key="item.name" v-bind="item" />
      <h2>{{ $t('fangames') }}</h2>
      <GameItem v-for="item in fangames" :key="item.name" v-bind="item" />
      <h2>{{ $t('follow') }}</h2>
      <div class="panelHolder">
        <div class="panel">
          <a href="https://discord.gg/EhxjnDy" target="_blank"><img src="@/assets/socialmedia_discord.png" height="50px"></a>
          <a href="https://twitter.com/puetsuagamedev" target="_blank"><img src="@/assets/socialmedia_twitter.png" height="50px"></a>
          <a href="https://www.instagram.com/puetsua.dev/" target="_blank"><img src="@/assets/socialmedia_instagram.png" height="50px" /></a>
          <a href="https://www.facebook.com/puetsua.gamedev/" target="_blank" v-if="$i18n.locale == 'zh'"><img src="@/assets/socialmedia_fb.png" height="50px"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameItem from '@/components/GameItem.vue'

export default {
  name: 'games',
  components: {
    GameItem
  },
  data () {
    return {
      title: this.$t('title'),
      description: this.$t('description')
    }
  },
  computed: {
    games () {
      return [
        {
          asset: this.$t('gameHexdoku')['imageSrc'],
          name: this.$t('gameHexdoku')['name'],
          desc: this.$t('gameHexdoku')['description'],
          statusCode: 'InDevelopment',
          steamLink: 'https://store.steampowered.com/app/1414270/Hexdoku/',
          itchioLink: 'https://puetsua.itch.io/hexdoku',
          newgroundsLink: 'https://www.newgrounds.com/portal/view/764662'
        },
        {
          asset: this.$t('gameNorahGalaksio')['imageSrc'],
          name: this.$t('gameNorahGalaksio')['name'],
          desc: this.$t('gameNorahGalaksio')['description'],
          statusCode: 'Released',
          pageLink: '/games/norahgalaksio',
          gpLink: 'https://play.google.com/store/apps/details?id=com.puetsua.norahgalaksio',
          appsLink: 'https://apps.apple.com/app/id1510273568'
        },
        {
          asset: this.$t('gameTsuilam')['imageSrc'],
          name: this.$t('gameTsuilam')['name'],
          desc: this.$t('gameTsuilam')['description'],
          statusCode: 'Suspended'
        }
      ]
    },
    fangames () {
      return [
        {
          asset: this.$t('gameDarkDream')['imageSrc'],
          name: this.$t('gameDarkDream')['name'],
          desc: this.$t('gameDarkDream')['description'],
          statusCode: 'Released',
          itchioLink: 'https://puetsua.itch.io/darkdream'
        }
      ]
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
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
}
</style>
