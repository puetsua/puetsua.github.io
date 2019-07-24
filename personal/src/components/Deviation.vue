<template>
  <div class="deviation" @mouseover="hover = true" @mouseleave="hover = false"></div>
</template>

<script>
export default {
  name: "deviation",
  props: {
    id: String
  },
  data() {
    return {
      hover: false,
      daData: {}
    };
  },
  mounted: function() {
    var url =
      "https://backend.deviantart.com/oembed?format=json&url=http%3A%2F%2Fwww.deviantart.com%2Fpuetsua%2Fart%2Fda-" +
      this.id;
    // axios.get(url).then(response => {
    //   console.log(response.data);
    // });
  }
};
</script>

<style scoped>
/* .portal {
  width: 300px;
  height: 200px;
  position: relative;
  margin: 0px 10px auto;
  display: inline-block;
}

.portal:hover {
  color: blue;
} */
</style>
