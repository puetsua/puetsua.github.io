<template>
  <div class="comItem" @mouseover="hover = true" @mouseleave="hover = false">
    <table>
      <tr>
        <th class="name">{{name}}</th>
      </tr>
      <tr>
        <th class="desc">{{description}}</th>
      </tr>
      <tr>
        <th>
          <Deviation v-for="artId in examples" :key="artId" :id="artId" />
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import Deviation from "@/components/Deviation.vue";

export default {
  name: "comItem",
  components: {
    Deviation
  },
  props: {
    name: String,
    description: String,
    examples: Array,
    isAvailable: Boolean
  },
  data() {
    return {
      hover: false
    };
  }
};
</script>

<style scoped>
.comItem
{
  border: 1px dashed #4e2470;
  margin: 10px 10px auto;
  text-align: left;
  color: rgb(139, 0, 58);
  background-color: #ffffff;
}
.name {
  font-size: 20px;
}
.desc {
  font-size: 14px;
}
</style>
