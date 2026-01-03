<i18n>
en:
  title: Terms of Service | Pue-Tsuâ
  description: Puetsua Art Terms of Service.
  tosTitle: Terms of Service (Puetsua Art)
  tosUpdate: "Last Updated: June 8th, 2022"
  guide: >
    To commission me, you must read and agree my Terms of Service.
    <b>If you don't want to read all stuffs, I have mark text bold for you.</b>
  aboutTheCommission: About the commission
  aboutTheCommissionDesc: >
    The art you commissioned is only for personal use, such as using it as your avatar,
    banner or personal website etc. Commercial use without my permission first is NOT allowed.
    Your commission will be posted on my social media if it's not a private commission.
  beforeYouCommission: Before you commission
  beforeYouCommissionDesc: >
    To commission, the reference to your characters must be included in your message.
    Any images of your character are fine. You cannot just say "I want my OC drawn" because I can't read your mind.
    Other details like poses and expression are also recommended to be included.
  payment: >
    Payment through <b>Paypal</b> is recommended. Paypal fee, or any fee from other payment method, will be added.
    I will start working on your commission once I've received full payment.
  contactMe: >
    Contact me via Discord, X (Twitter) DM or any social media about your commission.
  workingTime: >
    <b>Your commission may take one month to finish</b> since I have other projects to do.
    We can discuss about it if you want your commission to be done in a certain time.
  privateCommission: >
    If you don't want your commissioned artwork to be public, please let me
    know in the note. Your name will be hidden and replaced with "Anon XXXXXX"
    in my to-do list. XXXXXX is 6-alphanumeric code I will give you.
  duringMyWork: During my work
  sendSketch: >
    I always send a sketch you before I do linework, coloring and shading.
    Try to point them out during sketch stage as many as possible if you found something isn't right.
    Any modification after sketch stage will cost you more.
  otherWIPImages: >
    If you would like to receive other WIP images, such as linework or flat-colored pictures. Just ask away.
zh:
  title: 服務條款 | 飛蛇
  description: 繪圖委託的服務條款
  tosTitle: 服務條款 (飛蛇的繪圖委託)
  tosUpdate: "上次更新：民國111年(2022) 6月8日"
  guide: >
    若要委託我，你必須閱讀並遵守我的服務條款。
    <b>如果你覺得服務條款過於攏長，我已經把重點以粗體表示。</b>
  aboutTheCommission: 關於委託
  aboutTheCommissionDesc: >
    你委託的圖僅供個人使用，像是頭像，横幅或個人網站等。在未經我同意而擅自商業使用是完全禁止的。
    如果你的委託不是私人委託，完成後皆會張貼到我的社群媒體上。
  beforeYouCommission: 在你委託之前
  beforeYouCommissionDesc: >
    委託時，你必須將你的角色參考圖傳給我。其他任何有該角色的圖片也是可以的。
    你不能只有說「可以畫我的角色嗎？」，我沒這麼厲害還能通靈。
    可以的話建議也給我你想要的姿勢、動作或表情。
  payment: >
    可使用<b>銀行匯款</b>、Paypal付款，Paypal會加收手續費。
    收到全部的款項後我才會開始進行繪製你的委託。
  contactMe: >
    請用臉書、推特、噗浪或其他社交媒體私訊聯絡，並敘述你的委託內容。
  workingTime: >
    由於手邊還有其他專案在進行，<b>你的委託最長會花一個月的時間完成</b>。
    如果你想要委託在某個特定時間完成，我們可以再討論。
  privateCommission: >
    如果你不想要你的委託公開，煩請事先告知我。你的名子在我的待辦清單(To-do list)中會以「Anon XXXXXX」顯示。
    XXXXXX是我會給你的六個字母數字字符的號碼。
  duringMyWork: 委託工作過程中
  sendSketch: >
    我在畫線稿或上色前一定會先給你看過草稿。
    請務必盡量在草稿階段就把所有錯誤或想要修改的地方指出，草稿階段後的所有修改將會加收費用。
  otherWIPImages: >
    如果你想要收到其他作業中的圖，例如線稿或平塗。知會我一聲即可。
</i18n>

<template>
  <div id="tos">
    <h2>{{ $t("tosTitle") }}</h2>
    <h3 id="update">{{ $t("tosUpdate") }}</h3>
    <p v-html="$t('guide')"></p>

    <h3>{{ $t("aboutTheCommission") }}</h3>
    <p v-html="$t('aboutTheCommissionDesc')"></p>

    <h3>{{ $t("beforeYouCommission") }}</h3>
    <p v-html="$t('beforeYouCommissionDesc')"></p>

    <p v-html="$t('payment')"></p>

    <p v-html="$t('contactMe')"></p>

    <p v-html="$t('workingTime')"></p>

    <p v-html="$t('privateCommission')"></p>

    <h3>{{ $t("duringMyWork") }}</h3>
    <p v-html="$t('sendSketch')"></p>

    <p v-html="$t('otherWIPImages')"></p>
  </div>
</template>

<script>

export default {
  name: 'ych',
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
        { hid: 'og:description', name: 'og:description', content: this.description },
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
#tos {
  max-width: 1000px;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
  text-align: left;
}
#update {
  color: green;
}
</style>
