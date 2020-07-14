<i18n>
en:
  title: Commissions | Pue-Tsuâ
  description: "Pue-Tsuâ's commission box and information."
  refPrice: "All prices are for reference only. The price may increase by having more characters or background etc..."
  portrait: Portrait
  halfbody: Half-body
  fullbody: Full-body
  feral: Feral
  anthro: Anthro
  anthroItem:
    - Pony Anthro, dragons
    - Furry
    - Equestria Girl
  itemDesc:
    portrait:
      coloredsketch:
        name: "Shaded $25-40"
        desc: "Max characters 1, Size: higher than 1000x1000"
    halfbody:
      coloredsketch:
        name: "Colored Sketch $25-50"
        desc: "Max characters 2, Size: higher than 1000x1000"
    fullbody:
      coloredsketch:
        name: "Colored Sketch $25-50"
        desc: "Max characters 2, Size: higher than 1000x1000"
      chibi:
        name: "Chibi $30-50"
        desc: "Max characters 2, Size: higher than 1000x1000"
zh:
  title: 委託 | 飛蛇
  description: "飛蛇的委託資訊"
  refPrice: "以下價格僅作參考，視情形於需求可能會加價。例如有更多角色的話或是背景等等。"
  portrait: 頭像
  halfbody: 半身
  fullbody: 全身
  feral: 野獸型
  anthro: 人形
  itemDesc:
    portrait:
      coloredsketch:
        name: "有色草稿 NTD$450-900"
        desc: "最多4個角色，大小：大於 1000x1000 像素"
    halfbody:
      coloredsketch:
        name: "有色草稿 NTD$750-1500"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
    fullbody:
      coloredsketch:
        name: "有色草稿 NTD$750-1500"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
      chibi:
        name: "Q版 NTD$750-1500"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
</i18n>

<template>
  <div id="commish">
    <CommissionInfo />
    <hr />
    <div class="comType">
      <h2>{{ $t('portrait') }}</h2>
      <p>{{ $t('refPrice') }}</p>
      <CommissionItem v-for="item in portraitItems" :key="item.name" v-bind="item" />
    </div>
    <div class="comType">
      <h2>{{ $t('halfbody') }}</h2>
      <p>{{ $t('refPrice') }}</p>
      <CommissionItem v-for="item in halfbodyItems" :key="item.name" v-bind="item" />
    </div>
    <div class="comType">
      <h2>{{ $t('fullbody') }}</h2>
      <p>{{ $t('refPrice') }}</p>
      <CommissionItem v-for="item in fullbodyItems" :key="item.name" v-bind="item" />
    </div>
  </div>
</template>

<script>
import CommissionItem from '@/components/CommissionItem.vue'
import CommissionInfo from '@/components/CommissionInfo.vue'

export default {
  name: 'commish',
  components: {
    CommissionItem,
    CommissionInfo
  },
  data () {
    return {
      title: this.$t('title'),
      description: this.$t('description')
    }
  },
  computed: {
    portraitItems () {
      return [
        {
          name: this.$t('itemDesc')['portrait']['shaded']['name'],
          description: this.$t('itemDesc')['portrait']['shaded']['desc'],
          examples: ['847858965'],
          isAvailable: true
        }
      ]
    },
    halfbodyItems () {
      return [
        {
          name: this.$t('itemDesc')['halfbody']['coloredsketch']['name'],
          description: this.$t('itemDesc')['halfbody']['coloredsketch']['desc'],
          examples: ['844362317', '807548619'],
          isAvailable: true
        }
      ]
    },
    fullbodyItems () {
      return [
        {
          name: this.$t('itemDesc')['fullbody']['coloredsketch']['name'],
          description: this.$t('itemDesc')['fullbody']['coloredsketch']['desc'],
          examples: ['807305572', '796764913'],
          isAvailable: true
        },
        {
          name: this.$t('itemDesc')['fullbody']['chibi']['name'],
          description: this.$t('itemDesc')['fullbody']['chibi']['desc'],
          examples: ['848066009', '847222714', '846983151'],
          isAvailable: true
        }
      ]
    }
  },
  head () {
    var currentUrl = process.env.baseUrl + this.$route.fullPath
    var head = {
      title: this.title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:url', name: 'og:url', content: currentUrl }
      ]
    }
    head.meta = head.meta.concat(process.env.socialMeta)
    return head
  }
}
</script>

<style scoped>
#commish {
  max-width: 1000px;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
}

.comType {
  text-align: left;
  margin: 0px 20px auto;
}
</style>
