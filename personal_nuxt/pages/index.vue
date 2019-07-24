<template>
  <div id="App" />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      fadeDisplay: false,
      pageDisplay: false
    }
  },
  mounted: function () {
    this.fadeDisplay = true
  },
  methods: {
    showPage: function () {
      this.pageDisplay = true
    }
  }
}
</script>

<style>
#App {
  font-family: "Microsoft JhengHei", "LiHei Pro", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  vertical-align: middle;
  color: #3d1b5a;
  min-height: 100%;
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
