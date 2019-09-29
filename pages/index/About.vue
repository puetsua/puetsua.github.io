<i18n>
en:
  title: About | Pue-Tsuâ
  description: Everything about Pue-Tsuâ and how to contact.
  aboutme: About me
  contactme: Contact me
  descMyRealName: Pik-Han Liau
  descMyName: |
    Puetsua, pronounced as "pu-eh zu-ah". Also known as Hankofficer, Hank.
  descDegree: |
    I have a Master of computer science of information engineering at National Taiwan Ocean University.
    I'm also a self-taught artist and taking commissions as a part time job.
    Currently I'm a game developer and dedicated in making video games.
  descKnowLang: |
    I speak Mandarin and English. I'm learning Japanese as my fourth language.
    I also speak Taiwanese Hokkien, which is my first language in my hometown Taiwan.
zh:
  title: 關於 | 飛蛇
  description: 所有關於飛蛇的事，包含聯絡方式。
  aboutme: 關於我
  contactme: 聯絡方式
  descMyRealName: 廖柏翰, Pik-Han Liau
  descMyName: |
    飛蛇，英文名 Puetsua 是由閩南語 Pue-Tsuâ 發想出來的。也可以叫我 Hankofficer 或 Hank。
  descDegree: |
    臺灣國立海洋大學資訊工程學系碩士畢業。同時也是業餘繪師，有時候會接一些委託賺小錢。
    目前是遊戲設計師，專注於遊戲開發。
  descKnowLang: |
    我會國語跟英文，目前正在學日文做為第四語言。
    我也會講自己家鄉的母語，台語。
</i18n>

<template>
  <div id="about">
    <div style="height:50px" />
    <center><img src="@/assets/aboutme.png"></center>
    <h2>{{ $t('aboutme') }}</h2>
    <p>{{ $t('descMyRealName') }}</p>
    <p>{{ $t('descMyName') }}</p>
    <p>{{ $t('descDegree') }}</p>
    <p>{{ $t('descKnowLang') }}</p>
    <h2>{{ $t('contactme') }}</h2>
    <a href="https://twitter.com/puetsua" target="_blank"><img src="@/assets/socialmedia_twitter.png"></a>
    <a href="https://www.deviantart.com/puetsua" target="_blank"><img src="@/assets/socialmedia_da.png"></a>
    <a href="https://www.facebook.com/puetsua" target="_blank"><img src="@/assets/socialmedia_fb.png"></a>
    <a href="https://www.youtube.com/channel/UCtAVtsEW_OHh4X7yWjOVoLQ" target="_blank"><img src="@/assets/socialmedia_yt.png"></a>
    <a href="mailto:puetsua@gmail.com"><img src="@/assets/socialmedia_email.png"></a>
  </div>
</template>

<script>
export default {
  name: 'About',
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

<style>
#about {
  max-width: 1000px;
  text-align: left;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
}
</style>
