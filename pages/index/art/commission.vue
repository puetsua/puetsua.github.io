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
        name: "Colored Sketch $10-20"
        desc: "One character only, Size: higher than 1000x1000"
      shaded:
        name: "Shaded $25-50"
        desc: "One character only, Size: higher than 1000x1000"
    halfbody:
      coloredsketch:
        name: "Colored Sketch $20-40"
        desc: "Max characters 2, Size: higher than 1000x1000"
      coloredsketchchibi:
        name: "Colored Sketch (Chibi) (TBD)"
        desc: "Max characters 2, Size: higher than 1000x1000"
    fullbody:
      coloredsketch:
        name: "Colored Sketch $25-50"
        desc: "Max characters 2, Size: higher than 1000x1000"
      coloredsketchchibi:
        name: "Colored Sketch (Chibi) (TBD)"
        desc: "Max characters 2, Size: higher than 1000x1000"
      chibi:
        name: "Chibi (TBD)"
        desc: "Max characters 2, Size: higher than 1000x1000"
      gradient:
        name: "Gradient $35-70"
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
        name: "草稿上色 NTD$300-600"
        desc: "只能一個角色，大小：大於 1000x1000 像素"
      shaded:
        name: "完整上色 NTD$750-1500"
        desc: "只能一個角色，大小：大於 1000x1000 像素"
    halfbody:
      coloredsketch:
        name: "草稿上色 NTD$600-1200"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
      coloredsketchchibi:
        name: "草稿上色 (Q版) (TBD)"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
    fullbody:
      coloredsketch:
        name: "有色草稿 NTD$750-1500"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
      coloredsketchchibi:
        name: "有色草稿 (Q版) (TBD)"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
      chibi:
        name: "Q版 (TBD)"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
      gradient:
        name: "漸層上色 NTD$1000-2000"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
</i18n>

<template>
  <div id="commish">
    <blockquote class="trello-card-compact">
      <a href="https://trello.com/c/7qdlWk9U" target="_blank">Commission Status Trello Card</a>
    </blockquote>
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
          name: this.$t('itemDesc')['portrait']['coloredsketch']['name'],
          description: this.$t('itemDesc')['portrait']['coloredsketch']['desc'],
          examples: ['848689733'],
          isAvailable: true
        },
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
        },
        {
          name: this.$t('itemDesc')['halfbody']['coloredsketchchibi']['name'],
          description: this.$t('itemDesc')['halfbody']['coloredsketchchibi']['desc'],
          examples: ['848689781'],
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
          name: this.$t('itemDesc')['fullbody']['coloredsketchchibi']['name'],
          description: this.$t('itemDesc')['fullbody']['coloredsketchchibi']['desc'],
          examples: [],
          isAvailable: true
        },
        {
          name: this.$t('itemDesc')['fullbody']['chibi']['name'],
          description: this.$t('itemDesc')['fullbody']['chibi']['desc'],
          examples: ['846983151', '847222714', '847308285'],
          isAvailable: true
        },
        {
          name: this.$t('itemDesc')['fullbody']['gradient']['name'],
          description: this.$t('itemDesc')['fullbody']['gradient']['desc'],
          examples: ['847736276', '848066009'],
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
  },
  mounted () {
    window.TrelloCards.load(document, { compact: true, allAnchors: false })
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
