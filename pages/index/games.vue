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
      Norah Galaksio is a brick breaking adventure mobile game. It's also the name of protagonist who is exploring the planets in the galaxy!

      This game was on Google Play before, but I took it down to give it a major update.
  gameTsuilam:
    imageSrc: tsuilam.png
    name: Star Tsui-Lam
    description: |
      Star Tsui-Lam is a strategy puzzle game. Player can explore planets, collect treasures, find relics from ancient civilization and solving puzzles.
zh:
  title: 自製遊戲 | 飛蛇
  description: 所有飛蛇做的遊戲。
  games: 自製遊戲
  fangames: 二創遊戲
  underConstruction: 施工中... ᕕ( ᐛ )ᕗ
  gameDarkDream:
    imageSrc: darkdream.png
    name: 黑暗夢境
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
    name: 水藍星
    description: |
      水藍星是一款策略解謎遊戲。玩家可以探索星球、收集寶物、尋找上古文明的遺物並解決各種難題。
</i18n>

<template>
  <div id="games">
    <div>
      <h2>{{ $t('games') }}</h2>
      <GameItem v-for="item in games" :key="item.name" v-bind="item" />
      <h2>{{ $t('fangames') }}</h2>
      <GameItem v-for="item in fangames" :key="item.name" v-bind="item" />
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
          asset: this.$t('gameNorahGalaksio')['imageSrc'],
          name: this.$t('gameNorahGalaksio')['name'],
          desc: this.$t('gameNorahGalaksio')['description'],
          statusCode: 'InDevelopment',
          pageLink: '/games/norahgalaksio'
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
