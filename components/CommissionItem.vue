<i18n>
en:
  notavailable: Not Available
zh:
  notavailable: 暫不提供
</i18n>

<template>
  <client-only>
    <div class="comItem" @mouseover="hover = true" @mouseleave="hover = false">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th class="name" v-if="isAvailable">
            {{ name }}
          </th>
          <th class="nameNotAvail" v-else>
            {{ name }} {{ "("+$t('notavailable')+")" }}
          </th>
        </tr>
        <tr v-if="isAvailable">
          <td class="desc">
            {{ description }}
          </td>
        </tr>
        <tr v-if="isAvailable">
          <td>
            <Deviation v-for="artId in examples" :id="artId" :key="artId" />
          </td>
        </tr>
      </table>
    </div>
  </client-only>
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
  data () {
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
.nameNotAvail {
  font-size: 16px;
  color: rgb(177, 169, 169);
}
.desc {
  font-size: 14px;
}
</style>
