<i18n>
en:
  game: Norah Galaksio
  developer: Developer
zh:
  game: 探險專家：諾拉
  developer: 開發者
</i18n>

<template>
  <footer>
    {{ developer }}
    <a href="https://twitter.com/puetsua" target="_blank">
      <img src="@/assets/social_twitter_white.png" height="20px" />
    </a>
    <a href="https://www.facebook.com/puetsua" target="_blank">
      <img src="@/assets/social_facebook_white.png" height="20px" />
    </a>
    <br />
    {{ $t('game') }} © Puetsua, 2019-2020.
  </footer>
</template>

<style>
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
