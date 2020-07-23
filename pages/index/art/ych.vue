<i18n>
en:
  title: YCH | Pue-Tsuâ
  description: YCH commission information.
  fixed: Fixed
  fixedDesc: Fixed pose, expression or species etc. Similar to YCH. Any major change may raise the price.
  auctions: Auctions
  auctionsDesc: Classic YCH auctions. People who has highest bid wins the picture.
  ychWebDesc1: "You can find all YCH auctions on "
  ychWebDesc2: my YCH.commishes
  ychWebDesc3: .
  itemDesc:
    idcardavatar:
      name: "ID card avatar $7"
      desc: "Template for ponies, Size: 1000x1000. +$1 for a different expression. You can request transparent background for free."
zh:
  title: YCH | 飛蛇
  description: YCH的委託資訊。
  fixed: 固定樣板
  fixedDesc: 固定的姿勢、表情跟物種。類似 YCH。任何大改有可能提高價格。
  auctions: 拍賣
  auctionsDesc: 經典的 YCH 拍賣。競標價最高的可以標到該 YCH 圖。
  ychWebDesc1: 你可以在
  ychWebDesc2: "我的 YCH.commishes "
  ychWebDesc3: 找到我所有的拍賣圖。
  itemDesc:
    idcardavatar:
      name: "身分證頭像 NTD$200"
      desc: "小馬專用的模板，大小：1000x1000 像素。改表情+NTD$30。你可以免費要求透明背景的版本。"
</i18n>

<template>
  <div id="ych">
    <blockquote class="trello-card-compact">
      <a href="https://trello.com/c/O96zIs0A">Fixed YCH Status Trello Card</a>
    </blockquote>
    <YCHInfo/>
    <hr>
    <div class="ychType">
      <h2>{{ $t('fixed') }}</h2>
      <p>{{ $t('fixedDesc') }}</p>
      <CommissionItem v-for="item in items" :key="item.name" v-bind="item" />
    </div>
    <div class="ychType">
      <h2>{{ $t('auctions') }}</h2>
      <p>{{ $t('auctionsDesc') }}</p>
      <div v-if="auctions.length > 0">
        <CommissionItem v-for="item in auctions" :key="item.name" v-bind="item" />
      </div>
      <p>{{ $t('ychWebDesc1') }}<a href="https://ych.commishes.com/user/Puetsua" target="_blank">{{ $t('ychWebDesc2') }}</a>{{ $t('ychWebDesc3') }}</p>
    </div>
  </div>
</template>

<script>
import CommissionItem from '@/components/CommissionItem.vue'
import YCHInfo from '@/components/YCHInfo.vue'

export default {
  name: 'ych',
  components: {
    CommissionItem,
    YCHInfo
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
          name: this.$t('itemDesc')['idcardavatar']['name'],
          description: this.$t('itemDesc')['idcardavatar']['desc'],
          examples: ['781953981', '782100162', '782102439', '782104207'],
          isAvailable: true
        }
      ]
    },
    auctions () {
      return []
    }
  },
  head () {
    var currentUrl = process.env.baseUrl + this.$route.fullPath
    var head = {
      title: this.title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:description', name: 'og:description', content: this.description },
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
#ych {
  max-width: 1000px;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
}

.ychType {
  text-align: left;
  margin: 0px 20px auto;
}
</style>
