<i18n>
en:
  contact: Contact
zh:
  contact: 聯絡信箱
</i18n>

<template>
  <footer>
    <div id="box">
      {{ $t("contact") }}:
      <a href="mailto:contact@puetsua.net">contact@puetsua.net</a><br />
      © Puetsua, since 2019.
    </div>
  </footer>
</template>

<style scoped>
#box {
  box-sizing: border-box;
  text-align: left;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
}

footer {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
  padding: 10px 10px;
  color: #ffffff;
  background-color: #4e2470;
}
</style>
