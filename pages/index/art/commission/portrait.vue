<i18n>
en:
  title: Commissions | Pue-Tsuâ
  description: "Pue-Tsuâ's commission box and information."
  itemTitle: Portrait
  refPrice: "All prices are for reference only. The price may increase by having more characters or background etc... All prices are in USD."
  coloredsketch:
    name: "Colored Sketch $10-20"
    desc: "One character only, Size: higher than 1000x1000"
  flatcolored:
    name: "Flat Colored $15-30"
    desc: "One character only, Size: higher than 1000x1000"
  shaded:
    name: "Shaded $25-50"
    desc: "One character only, Size: higher than 1000x1000"
zh:
  title: 委託 | 飛蛇
  description: "飛蛇的委託資訊"
  itemTitle: 頭像
  refPrice: "以下價格僅作參考，視情形於需求可能會加價。例如有更多角色的話或是背景等等。以下的價格以台幣計價。"
  coloredsketch:
    name: "草稿上色 $300-600"
    desc: "只能一個角色，大小：大於 1000x1000 像素"
  flatcolored:
    name: "一般上色 $450-900"
    desc: "只能一個角色，大小：大於 1000x1000 像素"
  shaded:
    name: "完整上色 $750-1500"
    desc: "只能一個角色，大小：大於 1000x1000 像素"
</i18n>

<template>
  <div class="comType">
    <h2>{{ $t('itemTitle') }}</h2>
    <p>{{ $t('refPrice') }}</p>
    <CommissionItem v-for="item in items" :key="item.name" v-bind="item" />
  </div>
</template>

<script>
import CommissionItem from '@/components/CommissionItem.vue'

export default {
  components: {
    CommissionItem
  },
  data () {
    return {
      title: this.$t('title'),
      description: this.$t('description')
    }
  },
  computed: {
    items () {
      return [
        {
          name: this.$t('coloredsketch')['name'],
          description: this.$t('coloredsketch')['desc'],
          examples: ['848689733', '848994496'],
          isAvailable: true
        },
        {
          name: this.$t('flatcolored')['name'],
          description: this.$t('flatcolored')['desc'],
          examples: [],
          isAvailable: false
        },
        {
          name: this.$t('shaded')['name'],
          description: this.$t('shaded')['desc'],
          examples: ['847858965', '849315886'],
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
.comType {
  text-align: left;
  margin: 0px 20px auto;
}
</style>
