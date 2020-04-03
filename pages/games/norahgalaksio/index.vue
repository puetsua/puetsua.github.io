<i18n>
en:
  title: Norah Galaksio
  description: "A brick breaking adventure mobile game"
  introduction: >
    Your spaceship is equipped with balls and a multi-purpose rebounder to clear all obstacles.
    Explore the planet and help local citizens defeat invading enemy.
  privacyPolicyLink: "/games/norahgalaksio/privacypolicy.html"
zh:
  title: 探險專家：諾拉
  description: "一款打磚塊冒險的手機遊戲"
  introduction: introduction
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
              <br />
              <p>{{ $t('introduction') }}</p>
              <img src="@/assets/norahgalaksio/appicon.png" height="100px" id="appicon" />
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
      <div id="info">
        <a :href="ppLink">Privacy Policy</a>
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
  },
  computed: {
    ppLink: function () {
      return this.$t('privacyPolicyLink')
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
}

#first {
  background-image: url("~@/assets/norahgalaksio/background1.png");
  background-size: cover;
  background-position: fixed;
  background-repeat: no-repeat;
  height: 90vh;

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

#appicon {
  border-radius: 10px;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.5);
}

#introduction {
  text-align: left;
  padding: 20px 20px 20px 20px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);
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
  background-color: red;
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
  height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

#info {
  text-align: left;
  padding: 20px 20px 20px 20px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 500px;
}
</style>
