<i18n>
en:
  commish: Commission
  ych: YCH
  tos: Terms of Service
zh:
  commish: 委託
  ych: YCH
  tos: 服務條款
</i18n>

<template>
  <div id="art">
    <div id="artnav">
    <Portal asset="commish.png" :desc="$t('commish')" to="/art/commission"/>
    <Portal asset="ych.png" :desc="$t('ych')" to="/art/ych"/>
    <Portal asset="tos.png" :desc="$t('tos')" to="/art/tos"/>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import Portal from '@/components/Portal.vue'

export default {
  name: 'art',
  components: {
    Portal
  }
}
</script>

<style>
#art {
  width: 100%;
}

#artnav {
  padding: 10px 0px;
  margin-bottom: 20px;
  background-color: rgb(214, 208, 214);
}
</style>
