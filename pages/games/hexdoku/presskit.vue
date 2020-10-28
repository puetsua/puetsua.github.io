<i18n>
en:
  title: Hexdoku
  description: >
    A sudoku-like, puzzle game with hexagons. Player must fill the grid with different shapes and
    ensure each directions and area contains only unique shapes.
  information: Information
  facts:
    - "Release date: Q4 2020"
    - "Platform: PC, Mac"
    - "Price: $4.99"
    - "Tags: 2d, puzzle, hexagon, sudoku"
    - "Game Engine: Unity"
    - "Developer: Puetsua"
  gamewebsite: "Game Website: "
  devwebsite: "Developer Website: "
  aboutgame: Gameplay
  aboutgame_desc1: >
    Unlike traditional Sudoku with 9x9 grids, Hexdoku features many different levels and uses shapes as marks instead of numbers.
    The level is completed when all marks are cleared and placed in cells.
    The game has many different rules that players will need new methods to solve the puzzle.
  aboutgame_desc2: >
    A level creator is also included for player to design their levels. Player can also challenge themselves with harder premade puzzles in custom levels.
  socialmedia: Social Media
  othergame: Games from Puetsua
  presskit: Press kit
  freedemo: Free Demo
  requestcopy: Or contact Puetsua for a copy.
  gamelogo: Game logo and icons
  videoAnimated: Video and Animated Gif
  screenshot: Screenshots
  aboutdev: About Developer
  puetsua_irlname: Liau, Pik-Han
  puetsua_about:
     - "A Taiwanese game developer, artist, programmer. Master's degree in Computer Science. I worked in a networking company for three years before I started my career in video game development."
     - "Most of people know me as Puetsua. I worked on Norah Galaksio and some misc games released on itch.io. I'm also a small artist draws cute pictures and fanarts online."
  credits: Credits
  itchioBadge: "itchio.svg"
  steamBadge: "en-us/steam_logo_small.png"
zh:
  title: 形獨
  description: "類數獨的解謎遊戲，有別於一般的數獨，使用六角形的網格讓玩家填入形狀，並能在三個方向與區域能夠不重複。"
  information: 遊戲資訊
  facts:
    - "發布日期：Q4 2020"
    - "平台：PC、Mac"
    - "價錢：NTD$150"
    - "標籤：2d, puzzle, hexagon, sudoku"
    - "遊戲引擎：Unity"
    - "開發者：Puetsua"
  gamewebsite: "遊戲網站："
  devwebsite: "開發商網站："
  aboutgame: 遊戲玩法
  aboutgame_desc1: >
    Unlike traditional Sudoku with 9x9 grids, Hexdoku features many different levels and uses shapes as marks instead of numbers.
    The level is completed when all marks are cleared and placed in cells.
    The game has many different rules that players will need new methods to solve the puzzle.
  aboutgame_desc2: >
    A level creator is also included. Player can also challenge themselves with harder puzzles in custom levels.
  socialmedia: 社群媒體
  othergame: 其他飛蛇的遊戲
  presskit: 新聞包
  freedemo: 免費試玩版
  requestcopy: 或是聯絡飛蛇取得一份遊戲軟體
  gamelogo: 遊戲標誌與圖示
  videoAnimated: 影片與Gif動畫
  screenshot: 遊戲截圖
  aboutdev: 關於開發者
  puetsua_irlname: Liau, Pik-Han
  puetsua_about:
     - "A Taiwanese game developer, artist, programmer. Master's degree in Computer Science. I worked in a networking company for three years before I started my career in video game development."
     - "Most of people know me as Puetsua. I worked on Norah Galaksio and some misc games released on itch.io. I'm also a small artist draws cute pictures and fanarts online."
  credits: 感謝名單
  itchioBadge: "itchio.svg"
  steamBadge: "zh-tw/steam_logo_small.png"
</i18n>

<template>
  <div id="home">
    <client-only>
      <div id="presskit">
        <h1>{{ $t("presskit") }}</h1>
        <img src="@/assets/hexdoku/banner.png" />
        <h1>{{ $t("information") }}</h1>
        <div class="textbox">
          <ul>
            <li v-for="fact in $t('facts')" :key="fact">{{ fact }}</li>
            <li>
              {{ $t("gamewebsite") }}
              <a
                href="https://puetsua.net/games/hexdoku"
              >https://puetsua.net/games/hexdoku</a>
            </li>
            <li>
              {{ $t("devwebsite") }}
              <a href="https://puetsua.net/games">https://puetsua.net/games</a>
            </li>
          </ul>
        </div>
        <h1>{{ $t("aboutgame") }}</h1>
        <div class="textbox">
          <p>{{ $t("description") }}</p>
          <p>{{ $t("aboutgame_desc1") }}</p>
          <p>{{ $t("aboutgame_desc2") }}</p>
        </div>
        <h2>{{ $t("freedemo") }}</h2>
        <a href="https://puetsua.itch.io/hexdoku">
          <img :src="imageSrc($t('itchioBadge'))" height="50px" />
        </a>
        <p>{{ $t("requestcopy") }}</p>
        <h1>{{ $t("gamelogo") }}</h1>
        <img src="@/assets/hexdoku/icon_512.png" height="128px" />
        <br />
        <img src="@/assets/hexdoku/title.png" height="128px" />
        <br />
        <img src="@/assets/hexdoku/title_raw.png" height="128px" />
        <h1>{{ $t("videoAnimated") }}</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5IE13T-cw6o"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <img src="@/assets/hexdoku/play.gif" height="256px" />
        <img src="@/assets/hexdoku/candidates.gif" height="256px" />
        <h1>{{ $t("screenshot") }}</h1>
        <div class="widebox">
          <img src="@/assets/hexdoku/screenshot_20201023_234110.png" width="400px" />
          <img src="@/assets/hexdoku/screenshot_20201023_234355.png" width="400px" />
          <img src="@/assets/hexdoku/screenshot_20201023_234510.png" width="400px" />
          <img src="@/assets/hexdoku/screenshot_20201007_141147.png" width="400px" />
          <img src="@/assets/hexdoku/screenshot_20201007_141147.png" width="400px" />
          <img src="@/assets/hexdoku/screenshot_20201007_141147.png" width="400px" />
        </div>
        <h1>{{ $t("aboutdev") }}</h1>
        <div class="textbox">
          <table>
            <tr>
              <td style="width: 100px;">
                <img src="@/assets/liaupikhan.jpg" height="100px" />
                <img
                  src="https://secure.gravatar.com/avatar/2442bb6d2dac9b858d2f6f04dab821be?size=50"
                  height="50px"
                />
              </td>
              <td>
                <h3>{{ $t("puetsua_irlname") }}</h3>
                <p v-for="line in $t('puetsua_about')" :key="line">{{ line }}</p>
              </td>
            </tr>
          </table>
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
  color: #25d4ff;
}

#presskit {
  padding: 20px 0px 20px 0px;
  color: #003b94;
}

.widebox {
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
}

.textbox {
  max-width: 700px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
</style>
