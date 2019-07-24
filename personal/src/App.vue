<template>
  <div id="app">
    <transition name="fade" @after-enter="showPage">
      <table v-if="fadeDisplay" id="head">
        <tr>
          <th style="width:50px;">
            <img alt="Puetsua logo" src="./assets/logo_light.png" height="50px" />
          </th>
          <th style="width:50%;">
            <span style="font-size:30px;">飛蛇 Pue-Tsuâ</span>
          </th>
          <th style="text-align: right;">
            <div id="nav">
              <router-link to="/">Home</router-link>
              <router-link to="/art">Art</router-link>
              <router-link to="/games">Games</router-link>
              <router-link to="/about">About</router-link>
            </div>
          </th>
        </tr>
      </table>
    </transition>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <div style="height:10px"></div>
    <transition name="page">
      <div v-if="pageDisplay">
        <transition name="view">
          <router-view />
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      fadeDisplay: false,
      pageDisplay: false
    };
  },
  mounted: function() {
    this.fadeDisplay = true;
  },
  methods: {
    showPage: function() {
      this.pageDisplay = true;
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  background-color: #f0e8ed;
}

footer {
  font-family: "Microsoft JhengHei", "LiHei Pro", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
  padding: 10px 10px;
  color: #ffffff;
  background-color: #4e2470;
}

#app {
  font-family: "Microsoft JhengHei", "LiHei Pro", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  vertical-align: middle;
  color: #3d1b5a;
  height: 100%;
}

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

.fade-enter-active,
.fade-leave-active,
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.fade-enter,
.fade-leave-to,
.page-enter,
.page-leave-to {
  opacity: 0;
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.2s ease-in-out, transform 0.2s ease;
}

.view-enter-active {
  transition-delay: 0.2s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>
