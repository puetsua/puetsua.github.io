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
zh:
  title: 委託 | 飛蛇
  description: "飛蛇的委託資訊"
  refPrice: "以下價格僅作參考，視情形於需求可能會加價。例如有更多角色的話或是背景等等。"
  portrait: 頭像
  halfbody: 半身
  fullbody: 全身
  feral: 野獸型
  anthro: 人形
</i18n>

<template>
  <div id="commish">
    <blockquote class="trello-card-compact">
      <a href="https://trello.com/c/7qdlWk9U" target="_blank">Commission Status Trello Card</a>
    </blockquote>
    <CommissionInfo />
    <hr />
    <div id="comType" v-responsive.lg.xl.md>
      <nuxt-link to="/art/commission/portrait">
        <TextButton>{{ $t('portrait') }}</TextButton>
      </nuxt-link>
      <nuxt-link to="/art/commission/halfbody">
        <TextButton>{{ $t('halfbody') }}</TextButton>
      </nuxt-link>
      <nuxt-link to="/art/commission/fullbody">
        <TextButton>{{ $t('fullbody') }}</TextButton>
      </nuxt-link>
    </div>
    <div id="comType" v-responsive.sm.xs>
      <nuxt-link to="/art/commission/portrait">
        <TextButton block>{{ $t('portrait') }}</TextButton>
      </nuxt-link>
      <nuxt-link to="/art/commission/halfbody">
        <TextButton block>{{ $t('halfbody') }}</TextButton>
      </nuxt-link>
      <nuxt-link to="/art/commission/fullbody">
        <TextButton block>{{ $t('fullbody') }}</TextButton>
      </nuxt-link>
    </div>
    <div id="commishDisplay">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import CommissionInfo from '@/components/CommissionInfo.vue'
import TextButton from '@/components/TextButton.vue'

export default {
  name: 'commish',
  components: {
    CommissionInfo,
    TextButton
  },
  data () {
    return {
      title: this.$t('title'),
      description: this.$t('description')
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
.v-btn {
  margin: 10px 0px;
  color: white;
}

#commishDisplay {
  min-height: 700px;
}

#commish {
  max-width: 1000px;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
}

#comType {
  margin: 10px 0px auto;
}
</style>
