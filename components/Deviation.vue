<template>
  <div
    v-if="daData"
    class="deviation"
    :style="devStyle"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <a :href="uri">
      <img :src="daData.thumbnail_url_200h" />
    </a>
    <transition name="itemfade">
      <div v-if="hover" :style="hoveredStyle">{{ daData.title }}</div>
    </transition>
  </div>
</template>

<script>
import jsonp from 'jsonp'

export default {
  name: 'Deviation',
  props: {
    id: String
  },
  data () {
    return {
      hover: false,
      daData: null,
      uri: ''
    }
  },
  computed: {
    devStyle: function () {
      if (this.daData == null) {
        return {}
      }
      return {
        width: this.daData.thumbnail_width_200h + 'px',
        height: this.daData.thumbnail_height_200h + 'px',
        position: 'relative',
        margin: '0px 0px auto',
        display: 'inline-block'
      }
    },
    hoveredStyle: function () {
      if (this.daData == null) {
        return {}
      }
      return {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: this.daData.thumbnail_width_200h + 'px',
        height: '18px',
        overflow: 'hidden',
        padding: '0px 10px',
        color: 'white',
        display: 'inline-block',
        'box-sizing': 'border-box',
        'text-align': 'left',
        'font-size': '12px',
        'background-color': 'rgba(140, 91, 255, 0.8)',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap'
      }
    }
  },
  created () {
    this.uri = 'https://www.deviantart.com/puetsua/art/da-' + this.id
    const url = 'https://backend.deviantart.com/oembed?format=jsonp&url=' + encodeURI(this.uri)

    jsonp(url, null, (err, data) => {
      if (err) {
        console.error(err.message)
      } else {
        this.daData = data
      }
    })
  },
  methods: {}
}
</script>

<style scoped>
.deviation img {
  vertical-align: bottom;
}

.itemfade-enter-active {
  transition: all 0.3s ease;
  max-height: 18px;
}
.itemfade-leave-active {
  transition: all 0.8s ease-out;
  max-height: 18px;
}
.itemfade-enter,
.itemfade-leave-to {
  max-height: 0px;
  opacity: 0;
}
</style>
