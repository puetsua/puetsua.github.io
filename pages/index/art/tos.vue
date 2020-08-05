<i18n>
en:
  title: Terms of Service | Pue-Tsuâ
  description: Puetsua Art Terms of Service.
  tosTitle: Terms of Service (Puetsua Art)
  tosUpdate: "Last Updated: August 6th, 2020"
zh:
  title: 服務條款 | 飛蛇
  description: 繪圖委託的服務條款
  tosTitle: 服務條款 (飛蛇的繪圖委託) (待翻譯...)
  tosUpdate: "上次更新：民國109年(2020) 8月6日"
</i18n>

<template>
  <div id="tos">
    <h2>{{ $t('tosTitle') }}</h2>
    <h3 id="update">{{ $t('tosUpdate') }}</h3>
    <p>
      To commission me, you should follow everything that mentioned below.
      <b>If you don't want to read all stuffs, I have mark text bold for you.</b>
    </p>

    <h3>About the commission</h3>
    <p>The art you commissioned is only for personal use, such as using it as your avatar, banner or personal website etc. Commercial use without notifying me first is NOT allowed.</p>

    <h3>Before you commission</h3>
    <p>To commission, the reference to your characters must be included in your message. Any images of your character are fine. You cannot just say "I want my OC drawn" because I cannot read your mind. Other details like poses and expression are also recommended to be included.</p>

    <p>
      Paying via
      <b>Paypal</b> is recommended. I only start drawing your commission when I received the payment.
    </p>

    <p>Contact me via Discord, Twitter DM or any social media about your commission.</p>

    <p>
      <b>The art can take one month to finish</b> since I have a project to do. If you want it to be done in a certain time, we can discuss.
    </p>

    <p>If you don't want your commissioned artwork to be public please let me know in the note. Your name will be hidden and replaced with (Anon XXXXXX) in my to-do list. XXXXXX is 6-alphanumeric code I will give you once I received the payment.</p>

    <h3>During my work</h3>
    <p>I always send a sketch you before I do linework and coloring, if you found something isn't right, try to point them out during sketch stage as many as possible. Any modification after sketch stage will cost you more.</p>

    <p>If you would like to receive other WIP images, such as linework or flat-colored. Just ask away.</p>
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
