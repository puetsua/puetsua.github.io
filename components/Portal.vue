<template>
  <div class="portal" @mouseover="hover = true" @mouseleave="hover = false">
    <nuxt-link :to="to">
      <div class="itemimg">
        <img :alt="desc" :src="imageSrc" />
      </div>
      <div class="itemdesc">{{ desc }}</div>
      <transition name="itemfade">
        <div v-if="hover" class="itemhovered" />
      </transition>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Portal',
  props: {
    asset: { type: String, default: '' },
    desc: { type: String, default: '' },
    to: { type: String, default: '' }
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
    imageSrc: function () {
      try {
        return require('@/assets/' + this.asset)
      } catch (e) {
        console.log(e)
        return null
      }
    }
  }
}
</script>

<style scoped>
.portal {
  width: 300px;
  height: 200px;
  position: relative;
  margin: 0px 10px auto;
  display: inline-block;
}

.itemimg {
  width: 300px;
  height: 200px;
  overflow: hidden;
}

.itemimg img {
  width: 300px;
}

.itemdesc {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 20px;
  padding: 0px 10px;
  box-sizing: border-box;
  font-size: 14px;
  overflow: hidden;
  text-align: left;
  vertical-align: middle;
  color: white;
  background-color: rgba(140, 91, 255, 0.8);
}

.itemhovered {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
}

.itemfade-enter-active,
.itemfade-leave-active {
  transition: opacity 0.1s ease-in-out, transform 0.1s ease;
}

.itemfade-enter,
.itemfade-leave-to {
  opacity: 0;
}
</style>
