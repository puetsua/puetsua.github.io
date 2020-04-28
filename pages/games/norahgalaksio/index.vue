<i18n>
en:
  title: Norah Galaksio
  description: "A brick breaking adventure mobile game"
  introduction: >
    Your spaceship is equipped with balls and a multi-purpose rebounder to clear all obstacles.
    Join Norah's team on their exploration the planet and help local citizens defeat invading enemy.
  gpBadgeAlt: Get it on Google Play
  gpBadge: "en-us/Google_Play_Badge.svg"
  appBadgeAlt: Download on the App Store
  appBadge: "en-us/App_Store_Badge.svg"
  socialmedia: Social Media
  other: Other stuffs
  privacyPolicy: Privacy Policy
  privacyPolicyLink: "/games/norahgalaksio/privacypolicy.html"
zh:
  title: 探險專家：諾拉
  description: "一款打磚塊冒險的手機遊戲"
  introduction: >
    為了清除障礙，你的太空船已經裝備好了數顆打磚球與多功能回彈板。
    加入諾拉的團隊，一起在星球上探索並幫助當地的居民抵禦外敵吧！
  gpBadgeAlt: Google Play立即下載
  gpBadge: "zh-tw/Google_Play_Badge.svg"
  appBadgeAlt: 下載App Store
  appBadge: "zh-tw/App_Store_Badge.svg"
  socialmedia: 社群媒體
  other: 其他東西
  privacyPolicy: 隱私權政策
  privacyPolicyLink: "/games/norahgalaksio/privacypolicy_tw.html"
</i18n>

<template>
  <div id="home">
    <div id="first">
      <table>
        <tr>
          <td>
            <div id="introduction">
              <h1>{{ $t('title') }}</h1>
              <h3>{{ $t('description') }}</h3>
              <p>{{ $t('introduction') }}</p>
              <center>
                <div style="height:30px" />
                <img src="@/assets/norahgalaksio/appicon.png" height="100px" id="appicon" />
                <div style="height:30px" />
                <a
                  href="https://play.google.com/store/apps/details?id=com.puetsua.norahgalaksio&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                >
                  <img :alt="$t('gpBadgeAlt')" :src="imageSrc($t('gpBadge'))" height="60px" />
                </a>
              </center>
            </div>
          </td>
          <td>
            <div id="phone">
              <div id="phone_content" />
              <img src="@/assets/norahgalaksio/phone.svg" height="600px" style="visibility:hidden;" />
              <!-- spacer -->
              <img src="@/assets/norahgalaksio/phone.svg" height="600px" id="phone_overlay" />
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div id="second">
      <table>
        <tr>
          <td>
            <h1>Screenshots</h1>
            <v-gallery :images="images" :index="index" @close="index = null" />
            <div
              class="image"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')', width: '180px', height: '320px' }"
            ></div>
          </td>
          <td>
            <h1>Spaceships</h1>
            <iframe
              width="360"
              height="640"
              src="https://www.youtube.com/embed/9z9PYLpc8CE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </td>
        </tr>
      </table>
    </div>
    <div id="third">
      <div class="infobox">
        <img src="@/assets/norahgalaksio/pioniro_sticker.png" height="80px" class="sticker" />
        <h2>{{ $t('socialmedia') }}</h2>
        <center>
          <a href="https://twitter.com/norahgalaksio" target="_blank">
            <img src="@/assets/social_twitter_white.png" height="50px" />
          </a>
        </center>
      </div>
      <div class="infobox">
        <img src="@/assets/norahgalaksio/pioniro_sticker.png" height="80px" class="sticker" />
        <h2>{{ $t('other') }}</h2>
        <a :href="ppLink">{{ $t('privacyPolicy') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: this.$t('title'),
      description: this.$t('description'),
      index: null
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
  methods: {
    imageSrc: function (link) {
      try {
        return require('@/assets/' + link)
      } catch (e) {
        console.log(e)
        return null
      }
    }
  },
  computed: {
    ppLink: function () {
      return this.$t('privacyPolicyLink')
    },
    images: function () {
      return [
        this.imageSrc('norahgalaksio/screenshot1.png'),
        this.imageSrc('norahgalaksio/screenshot2.png'),
        this.imageSrc('norahgalaksio/screenshot3.png'),
        this.imageSrc('norahgalaksio/screenshot4.png'),
        this.imageSrc('norahgalaksio/screenshot5.png'),
        this.imageSrc('norahgalaksio/screenshot6.png')
      ]
    }
  }
}
</script>

<style scoped>
/* Palette #12254c #18226d #24599e #6c94c1 #c6e9ff */
#home {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  font-family: Arial, Helvetica, sans-serif;
}

#home a {
  color: #aaddff;
}

#home a:hover {
  color: white;
}

#first {
  background-image: url("~@/assets/norahgalaksio/background1.png");
  background-size: cover;
  background-position: fixed;
  background-repeat: no-repeat;
  height: 800px;

  display: flex;
  align-items: center;
  justify-content: center;
}

#first table {
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: 1000px;
}

#first h1 {
  font-size: 56px;
  font-family: Oswald, Arial, Helvetica, sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: white;
}

#first h3 {
  font-family: Oswald, Arial, Helvetica, sans-serif;
}

#appicon {
  border-radius: 10px;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.5);
}

#introduction {
  text-align: left;
  padding: 20px 20px 20px 20px;
  border-radius: 30px;
  background-color: #12254c;
  border: 5px solid #24599e;
  max-width: 500px;
}

#phone_overlay {
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 32px;
  box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.5);
}

#phone {
  position: relative;
}

#phone_content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: cyan;
  background-image: url("~@/assets/norahgalaksio/screenshot.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
  width: 280px;
  height: 530px;
}

#second {
  background-image: url("~@/assets/norahgalaksio/background2.png");
  background-size: cover;
  background-position: fixed;
  background-repeat: no-repeat;
  height: 800px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#second h1 {
  margin-top: 0px;
  margin-bottom: 10px;
  font-family: Oswald, Arial, Helvetica, sans-serif;
  text-align: center;
  color: white;
}

#second table {
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: 1000px;
}

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}

.sticker {
  position: absolute;
  transform: translate(-75%, -50%);
}

.infobox {
  text-align: left;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
  background-color: #12254c;
  border: 5px solid #24599e;
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

#third {
  background-image: url("~@/assets/norahgalaksio/background3.png");
  background-size: cover;
  background-position: fixed;
  background-repeat: no-repeat;
  height: 800px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#third h2 {
  margin-top: 0px;
  margin-bottom: 10px;
  font-family: Oswald, Arial, Helvetica, sans-serif;
  text-align: center;
  color: white;
}
</style>
