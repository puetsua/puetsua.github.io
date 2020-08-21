<i18n>
en:
  title: Commissions | Pue-Tsuâ
  description: "Pue-Tsuâ's commission box and information."
  itemTitle: Half-body
  refPrice: "All prices are for reference only. The price may increase by having more characters or background etc... All prices are in USD."
  coloredsketch:
    name: "Colored Sketch $20-40"
    desc: "Max characters 2, Size: higher than 1000x1000"
  coloredsketchchibi:
    name: "Colored Sketch (Chibi) $20-40"
    desc: "Max characters 2, Size: higher than 1000x1000"
  gradient:
    name: "Gradient $30-60"
    desc: "Max characters 2, Size: higher than 1000x1000"
zh:
  title: 委託 | 飛蛇
  description: "飛蛇的委託資訊"
  itemTitle: 半身
  refPrice: "以下價格僅作參考，視情形於需求可能會加價。例如有更多角色的話或是背景等等。以下的價格以台幣計價。"
  coloredsketch:
    name: "草稿上色 $600-1200"
    desc: "最多2個角色，大小：大於 1000x1000 像素"
  coloredsketchchibi:
    name: "草稿上色 (Q版) $600-1200"
    desc: "最多2個角色，大小：大於 1000x1000 像素"
  gradient:
    name: "漸層上色 $1000-2000"
    desc: "最多2個角色，大小：大於 1000x1000 像素"
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
          examples: ['852091210', '807548619', '852486089'],
          isAvailable: true
        },
        {
          name: this.$t('coloredsketchchibi')['name'],
          description: this.$t('coloredsketchchibi')['desc'],
          examples: ['848689781'],
          isAvailable: true
        },
        {
          name: this.$t('gradient')['name'],
          description: this.$t('gradient')['desc'],
          examples: ['849426143'],
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
