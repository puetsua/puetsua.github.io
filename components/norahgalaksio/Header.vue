<i18n>
en:
  home: Home
zh:
  home: 首頁
</i18n>

<template>
  <no-ssr>
    <div id="header">
      <table id="tophead">
        <tr>
          <td style="height:100px;">
            <nuxt-link to="/games/norahgalaksio">
              <img alt="Puetsua logo" src="~/assets/norahgalaksio/logo.png" height="80px" />
            </nuxt-link>
          </td>
          <td style="text-align: right;">
            <div id="nav">
              <nuxt-link to="/games/norahgalaksio">{{ $t('home') }}</nuxt-link>
              <Dropdown/>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </no-ssr>
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
/* Palette #12254c #18226d #24599e #6c94c1 #c6e9ff */
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
}

#tophead {
  text-align: center;
}

table#tophead {
  margin-left: auto;
  margin-right: auto;
  padding: 0px 10px;
  color: #ffffff;
  width: 100%;
  max-width: 1000px;
}

table#tophead img {
  display: block;
}

table#tophead tr {
  text-align: left;
}
</style>
