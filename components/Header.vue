<i18n>
en:
  home: Home
  art: Art
  games: Games
  about: About
zh:
  home: 首頁
  art: 繪圖
  games: 遊戲
  about: 自介
</i18n>

<template>
  <client-only>
    <div id="header">
      <table id="tophead">
        <tr>
          <td>
            <table>
              <tr>
                <td>
                  <nuxt-link to="/">
                    <img
                      alt="Puetsua logo"
                      src="~/assets/logo_light.png"
                      height="50px"
                    />
                  </nuxt-link>
                </td>
                <td>
                  <nuxt-link to="/">
                    <div id="ptname">Pue-Tsuâ</div>
                  </nuxt-link>
                </td>
              </tr>
            </table>
          </td>
          <td style="text-align: right">
            <div id="nav">
              <nuxt-link to="/">{{ $t("home") }}</nuxt-link>
              <nuxt-link to="/art">{{ $t("art") }}</nuxt-link>
              <nuxt-link to="/games">{{ $t("games") }}</nuxt-link>
              <nuxt-link to="/about">{{ $t("about") }}</nuxt-link>
              <Dropdown />
            </div>
          </td>
        </tr>
      </table>
    </div>
  </client-only>
</template>

<script>
import Dropdown from '@/components/LangDropdown.vue'

export default {
  name: 'Header',
  components: {
    Dropdown
  },
  methods: {
    setNewSelectedOption (selectedOption) {
      this.config.placeholder = selectedOption.value
    }
  }
}
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #ffffff;
  margin-left: 20px;
  text-decoration: none;
}

#nav a:hover {
  color: #cc44d8;
}

#nav a.nuxt-link-exact-active {
  color: #d8a9ff;
}

#nav .dropdown {
  margin-left: 20px;
}

table#tophead {
  padding: 0px 10px;
  background-color: #4e2470;
  color: #ffffff;
  width: 100%;
}

table#tophead img {
  display: block;
}

table#tophead tr {
  text-align: left;
}

#ptname {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}
</style>
