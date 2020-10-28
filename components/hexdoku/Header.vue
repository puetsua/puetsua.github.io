<i18n>
en:
  home: Home
zh:
  home: 首頁
</i18n>

<template>
  <client-only>
    <div id="header">
      <div v-responsive.md.lg.xl>
        <table id="tophead">
          <tr>
            <td class="bannerLeft">
              <nuxt-link to="/">
                <img alt="Puetsua logo" src="~/assets/logo_light.png" height="50px" />
              </nuxt-link>
            </td>
            <td class="bannerRight">
              <div id="nav">
                <Dropdown />
              </div>
            </td>
          </tr>
        </table>
        <div class="bannerCenter">
          <nuxt-link to="/games/hexdoku/">
            <img alt="Game logo" src="~/assets/hexdoku/title.png" height="80px" />
          </nuxt-link>
        </div>
      </div>
      <div v-responsive.sm.xs>
        <table id="tophead">
          <tr>
            <td class="bannerLeft">
              <nuxt-link to="/">
                <img alt="Game logo" src="~/assets/hexdoku/title.png" height="80px" />
              </nuxt-link>
            </td>
            <td class="bannerRight">
              <div id="nav">
                <Dropdown />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </client-only>
</template>

<script>
import Dropdown from '@/components/norahgalaksio/LangDropdown.vue'

export default {
  name: 'Header',
  components: {
    Dropdown
  },
  data () {
    return {
      config: {
        options: [
          {
            value: 'option 1'
          },
          {
            value: 'option 2'
          },
          {
            value: 'option 3'
          }
        ],
        placeholder: 'Placeholder',
        backgroundColor: '#cde4f5',
        textColor: 'black',
        borderRadius: '1.5em',
        border: '1px solid gray',
        width: 180
      }
    }
  },
  methods: {
    setNewSelectedOption (selectedOption) {
      this.config.placeholder = selectedOption.value
    }
  }
}
</script>

<style scoped>
/* Palette #5DADE2 #B8FFE8 #2981C3 #25D4FF #FAFFDA */
#nav a {
  font-weight: bold;
  color: #c6e9ff;
  margin-left: 20px;
  text-decoration: none;
}

#nav a:hover {
  color: #6c94c1;
}

#nav a.nuxt-link-exact-active {
  color: #c6e9ff;
}

#nav .dropdown {
  margin-left: 20px;
}

#header {
  text-align: center;
  position: relative;
  background-color: #2981C3;
}

#tophead {
  text-align: center;
}

table#tophead {
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  height: 100px;
  width: 100%;
  max-width: 1000px;
}

table#tophead img {
  display: block;
}

table#tophead tr {
  text-align: left;
}

.bannerLeft {
  padding-left: 20px;
}

.bannerCenter {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bannerCenter img {
  margin-left: auto;
  margin-right: auto;
}

.bannerRight {
  text-align: right;
  padding-right: 20px;
}
</style>
