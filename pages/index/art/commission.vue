<i18n>
en:
  title: Commissions | Pue-Tsuâ
  description: "Pue-Tsuâ's commission box and information."
  fullbodyPrice: All prices are in full-body drawings. Half-body drawings and portraits can be lower.
  feral: Feral
  feralItem:
    - Pony, changelings
    - Cat
    - Eeveelutions (Pokemon)
  recommended: "Recommended, but not limited to:"
  anthro: Anthro
  anthroItem:
    - Pony Anthro, dragons
    - Furry
    - Equestria Girl
  itemDesc:
    feral:
      coloredsketch:
        name: "Colored Sketch $15-30"
        desc: "Max characters 4, Size: higher than 1000x1000"
      celshading:
        name: "Cel Shading $20-40"
        desc: "Max characters 2, Size: higher than 1000x1000"
      detailedshading:
        name: "Detailed Shading $40-70"
        desc: "Max characters 2, Size: higher than 1000x1000"
    anthro:
      coloredsketch:
        name: "Colored Sketch $25-50"
        desc: "Max characters 2, Size: higher than 1000x1000"
      celshading:
        name: "Cel Shading $35-60"
        desc: "Max characters 2, Size: higher than 1000x1000"
      detailedshading:
        name: "Detailed Shading $60-90"
        desc: "Max characters 1, Size: higher than 1000x1000"
zh:
  title: 委託 | 飛蛇
  description: "飛蛇的委託資訊"
  fullbodyPrice: 所有的價格都是以全身做計算。半身或頭像可以有更低的價格。
  feral: 野獸型
  feralItem:
    - 小馬、幻影蟲
    - 貓
    - 各種伊布 (寶可夢)
  recommended: "推薦，但不限於："
  anthro: 人形
  anthroItem:
    - 人形小馬、龍
    - 各種獸人
    - 小馬國女孩
  itemDesc:
    feral:
      coloredsketch:
        name: "有色草稿 NTD$450-900"
        desc: "最多4個角色，大小：大於 1000x1000 像素"
      celshading:
        name: "卡通風格 NTD$600-1200"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
      detailedshading:
        name: "精細風格 NTD$1200-2100"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
    anthro:
      coloredsketch:
        name: "有色草稿 NTD$750-1500"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
      celshading:
        name: "卡通風格 NTD$1000-1800"
        desc: "最多2個角色，大小：大於 1000x1000 像素"
      detailedshading:
        name: "精細風格 NTD$1800-2700"
        desc: "最多1個角色，大小：大於 1000x1000 像素"
</i18n>

<template>
  <div id="commish">
    <CommissionInfo />
    <hr />
    <div class="comType">
      <h2>{{ $t('feral') }}</h2>
      <p>{{ $t('recommended') }}</p>
      <ul>
        <li v-for="item in $t('feralItem')" :key="item">
          {{ item }}
        </li>
      </ul>
      <p>{{ $t('fullbodyPrice') }}</p>
      <CommissionItem v-for="item in feralItems" :key="item.name" v-bind="item" />
    </div>
    <div class="comType">
      <h2>{{ $t('anthro') }}</h2>
      <p>{{ $t('recommended') }}</p>
      <ul>
        <li v-for="item in $t('anthroItem')" :key="item">
          {{ item }}
        </li>
      </ul>
      <p>{{ $t('fullbodyPrice') }}</p>
      <CommissionItem v-for="item in anthroItems" :key="item.name" v-bind="item" />
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
    feralItems () {
      return [
        {
          name: this.$t('itemDesc')['feral']['coloredsketch']['name'],
          description: this.$t('itemDesc')['feral']['coloredsketch']['desc'],
          examples: ['807305572', '793342828', '796764913'],
          isAvailable: true
        },
        {
          name: this.$t('itemDesc')['feral']['celshading']['name'],
          description: this.$t('itemDesc')['feral']['celshading']['desc'],
          examples: ['794761840', '711080605', '782408545'],
          isAvailable: true
        },
        {
          name: this.$t('itemDesc')['feral']['detailedshading']['name'],
          description: this.$t('itemDesc')['feral']['detailedshading']['desc'],
          examples: ['789974602', '792378218'],
          isAvailable: true
        }
      ]
    },
    anthroItems () {
      return [
        {
          name: this.$t('itemDesc')['anthro']['coloredsketch']['name'],
          description: this.$t('itemDesc')['anthro']['coloredsketch']['desc'],
          examples: ['807548619'],
          isAvailable: true
        },
        {
          name: this.$t('itemDesc')['anthro']['celshading']['name'],
          description: this.$t('itemDesc')['anthro']['celshading']['desc'],
          examples: ['799141636', '799141625'],
          isAvailable: true
        },
        {
          name: this.$t('itemDesc')['anthro']['detailedshading']['name'],
          description: this.$t('itemDesc')['anthro']['detailedshading']['desc'],
          examples: ['798004297', '804577339'],
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
