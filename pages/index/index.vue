<template>
  <div id="home">
    <img alt="Puetsua logo" src="@/assets/logo.png">
    <div id="ptname">飛蛇 Pue-Tsuâ</div>
    <div>
      <Portal asset="art.png" desc="Art & Commission" to="/art" />
      <Portal asset="games.png" desc="Games" to="/games" />
      <Portal asset="aboutme.png" desc="About Pue-Tsuâ" to="/about" />
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
  head () {
    return {
      title: 'Pue-Tsuâ'
    }
  }
}
</script>

<style>
#home {
  text-align: center;
  vertical-align: middle;
  width: 100%;
}
#ptname {
  font-size:30px;
  padding: 0px 0px 50px 0px;
}
</style>
