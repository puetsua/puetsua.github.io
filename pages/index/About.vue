<template>
  <div id="about">
    <div style="height:50px" />
    <center><img src="@/assets/aboutme.png"></center>
    <h2>About me</h2>
    <p>Puetsua, pronounced as "pu-eh zu-ah". Also known as Hankofficer, Hank, Katyin, Kate.</p>
    <p>I have a Master of computer science of information engineering at National Taiwan Ocean University. I'm also a self-taught artist and taking commissions as a part time job. Currently I'm a game developer and dedicated in making video games.</p>
    <p>I speak Mandarin and English, I'm learning Japanese as my fourth language. I also speak Taiwanese Hokkien, which is my first language in my hometown Taiwan.</p>
    <p>For pronouns, you can call me Hank with he/his pronouns or Kate with she/her pronouns. Or just use they/their.</p>
    <h2>Contact me</h2>
    <a href="https://twitter.com/puetsua"><img src="@/assets/socialmedia_twitter.png"></a>
    <a href="https://www.deviantart.com/puetsua"><img src="@/assets/socialmedia_da.png"></a>
    <a href="https://www.facebook.com/puetsua"><img src="@/assets/socialmedia_fb.png"></a>
    <a href="mailto:puetsua@gmail.com"><img src="@/assets/socialmedia_email.png"></a>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'About | Pue-Tsuâ',
      description: 'Everything about Pue-Tsuâ and how to contact.'
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
