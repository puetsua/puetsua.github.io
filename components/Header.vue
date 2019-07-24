<template>
  <div id="header">
    <table id="head">
      <tr>
        <td style="width:50px;">
          <img alt="Puetsua logo" src="~/assets/logo_light.png" height="50px">
        </td>
        <td style="width:50%;">
          <span style="font-size:30px;">飛蛇 Pue-Tsuâ</span>
        </td>
        <td style="text-align: right;">
          <div id="nav">
            <nuxt-link to="/">
              Home
            </nuxt-link>
            <nuxt-link to="/art">
              Art
            </nuxt-link>
            <nuxt-link to="/games">
              Games
            </nuxt-link>
            <nuxt-link to="/about">
              About
            </nuxt-link>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
#nav a {
  font-weight: bold;
  color: #ffffff;
  margin-left: 20px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #d8a9ff;
}

table#head {
  padding: 0px 10px;
  background-color: #4e2470;
  color: #ffffff;
  width: 100%;
}

table#head img {
  display: block;
}

table#head tr {
  text-align: left;
}
</style>
