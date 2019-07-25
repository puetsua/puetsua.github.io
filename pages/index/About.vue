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
      title: 'About | Pue-Tsuâ'
    }
  },
  head () {
    return {
      titleTemplate: this.title,
      meta: [
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@puetsua' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Everything about Pue-Tsuâ and how to contact.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.puetsua.me/logo.png' },
        { hid: 'twitter:image:src', name: 'twitter:image:src', content: 'https://www.puetsua.me/logo.png' }
      ]
    }
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
