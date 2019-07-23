<template>
  <div id="app">
    <transition name="fade">
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
              <router-link to="/about">About</router-link>
            </div>
          </th>
        </tr>
      </table>
    </transition>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <div style="height:10px"></div>
    <transition name="view">
    <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      fadeDisplay: false
    };
  },
  mounted: function() {
    this.fadeDisplay = true;
  },
  methods: {}
};
</script>

<style>
body {
  background-color: #f0e8ed;
}

#app {
  font-family: "Microsoft JhengHei", "LiHei Pro", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  vertical-align: middle;
  color: #3d1b5a;
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
  border-radius: 20px;
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

.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to, .view-leave {
  opacity: 1;
}
</style>
