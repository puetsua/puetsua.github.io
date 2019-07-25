<template>
  <div id="art">
    <div id="artnav">
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
  width: 100%;
}

#artnav {
  padding: 10px 0px;
  margin-bottom: 20px;
  background-color: rgb(214, 208, 214);
}
</style>
