<i18n>
en:
  game: Norah Galaksio
zh:
  game: 探險專家：諾拉
</i18n>

<template>
  <footer>
    {{ $t('game') }} © Puetsua, 2019-2020.
    <br />
    <a href="https://x.com/PuetsuaGameDev" target="_blank">
      <img src="@/assets/social_x_white.png" height="20px" />
    </a>
    <a href="https://www.facebook.com/puetsua.gamedev" target="_blank">
      <img src="@/assets/social_facebook_white.png" height="20px" />
    </a>
  </footer>
</template>

<style scoped>
/* Palette #12254c #18226d #24599e #6c94c1 #c6e9ff */
footer {
  font-family: "Microsoft JhengHei", "LiHei Pro", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
  padding: 10px 10px;
  color: #c6e9ff;
  background-color: #24599e;
}
</style>
