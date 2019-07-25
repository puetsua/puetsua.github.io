<template>
  <div id="art">
    <div>
    <Portal asset="commish.png" desc="Commission" to="/art/commission"/>
    <Portal asset="ych.png" desc="YCH" to="/art/ych"/>
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
  width: 1000px;
  position: relative;
  margin: 0px 10px auto;
  display: inline-block;
}
</style>
