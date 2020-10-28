<i18n>
en:
  game: Hexdoku
zh:
  game: 形獨
</i18n>

<template>
  <footer>
    {{ $t('game') }} © Puetsua, 2019-2020.
    <br />
    <a href="https://twitter.com/PuetsuaGameDev" target="_blank">
      <img src="@/assets/social_twitter_white.png" height="20px" />
    </a>
    <a href="https://www.facebook.com/puetsua.gamedev" target="_blank">
      <img src="@/assets/social_facebook_white.png" height="20px" />
    </a>
  </footer>
</template>

<style scoped>
/* Palette #5DADE2 #B8FFE8 #2981C3 */
footer {
  font-family: "Microsoft JhengHei", "LiHei Pro", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
  padding: 10px 10px;
  color: white;
  background-color: #2981C3;
}
</style>
