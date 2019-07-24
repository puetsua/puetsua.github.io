<template>
  <div id="home">
    <img alt="Puetsua logo" src="@/assets/logo.png" />
    <div>
    <Portal asset="art.png" desc="Art & Commission" to="/art"/>
    <Portal asset="games.png" desc="Games" to="/games"/>
    <Portal asset="aboutme.png" desc="About Pue-Tsuâ" to="/about"/>
    </div>
  </div>
</template>

<script>
import Portal from '@/components/Portal.vue'

export default {
  name: "home",
  components: {
    Portal
  },
};
</script>

<style>
#home {
  text-align: center;
  vertical-align: middle;
  width: 1000px;
  position: relative;
  margin: 0px 10px auto;
  display: inline-block;
}
</style>