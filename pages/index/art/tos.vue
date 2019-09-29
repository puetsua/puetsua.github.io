<template>
  <div id="tos">
    <h2>Terms of Service (Puetsua Art)</h2>
    <h3 id="update">Last Updated: September 29th, 2019</h3>
    <p>
      To commission me, you should follow everything that mentioned below.
      <b>If you don't want to read all stuffs, I have mark text bold for you.</b>
    </p>

    <h3>About the commission</h3>
    <p>
      The art you commissioned is only for personal use, such as using it as your avatar, banner or personal website etc. Commercial use without notifying me first is NOT allowed.
    </p>

    <p>
      <b>For Point Commissions, please check <a href="https://www.deviantart.com/puetsua/shop/commissions" target="_blank">my DeviantArt commission widget</a> on my page.</b> Without any specific points on the list, the convert rate at
      <img alt="DA points"  src="https://e.deviantart.net/emoticons/p/points.gif"/>100 = $1
    </p>

    <h3>Before you commission</h3>
    <p>
      To commission, the reference to your characters must be included in your message. Any images of your character are fine. You cannot just say "I want my OC drawn" because I cannot read your mind. Other details like poses and expression are also recommended to be included.
    </p>

    <p>
      You need to pay via
      <b>Paypal or DeviantArt points</b>. I only start drawing your commission when I received the payment.
    </p>

    <p>
      Contact me via DeviantArt Note, Twitter DM or Facebook Message about your commission. Once I accepted your commission we can talk about details from other social media, such as Discord, if you think it's more convenient.
    </p>

    <p>
      <b>The art can take one month to finish</b> since I have a project to do. If you want it to be done in a certain time, we can discuss.
    </p>

    <p>If you don't want your commissioned artwork to be public please let me know in the note. Your name will be hidden and replaced with (Anon XXXXXX) in my to-do list. XXXXXX is 6-alphanumeric code I will give you once I received the payment.</p>

    <h3>During my work</h3>
    <p>
      I always send a sketch you before I do linework and coloring, if you found something isn't right, try to point them out here as many as possible.
    </p>

    <p>
      If you would like to receive other WIP images, such as linework or flat-colored. Just ask away.
    </p>
  </div>
</template>

<script>

export default {
  name: 'ych',
  data () {
    return {
      title: 'Terms of Service | Pue-Tsuâ',
      description: 'Puetsua Art Terms of Service.'
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
