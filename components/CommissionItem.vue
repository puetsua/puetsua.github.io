<template>
  <div class="comItem" @mouseover="hover = true" @mouseleave="hover = false">
    <table cellpadding="0" cellspacing="0">
      <tr>
        <th class="name">
          {{ name }}
        </th>
      </tr>
      <tr>
        <td class="desc">
          {{ description }}
        </td>
      </tr>
      <tr>
        <td>
          <Deviation v-for="artId in examples" :id="artId" :key="artId" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Deviation from '@/components/Deviation.vue'

export default {
  name: 'ComItem',
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
    }
  }
}
</script>

<style scoped>
.comItem {
  border: 1px dashed #4e2470;
  margin: 10px 0px auto;
  text-align: left;
  color: rgb(139, 0, 58);
  background-color: #ffffff;
}
.comItem td, .comItem th{
  padding: 5px 5px;
}
.name {
  font-size: 20px;
}
.desc {
  font-size: 14px;
}
</style>
