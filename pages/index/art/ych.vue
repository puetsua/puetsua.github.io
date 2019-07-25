<template>
  <div id="ych">
    <YCHInfo/>
    <hr>
    <div class="ychType">
      <h2>Fixed</h2>
      <p>Fixed pose, expression or species etc. Similar to YCH. Any major change may raise the price.</p>
      <CommissionItem v-for="item in items" :key="item.name" v-bind="item" />
    </div>
    <div class="ychType">
      <h2>Auctions</h2>
      <p>Classic YCH auctions. People who has highest bid wins the picture.</p>
      <div v-if="auctions.length > 0">
        <CommissionItem v-for="item in auctions" :key="item.name" v-bind="item" />
      </div>
      <div v-else>-- No available items --</div>
    </div>
  </div>
</template>

<script>
import CommissionItem from '@/components/CommissionItem.vue'
import YCHInfo from '@/components/YCHInfo.vue'

export default {
  name: 'ych',
  components: {
    CommissionItem,
    YCHInfo
  },
  head () {
    return {
      title: 'Pue-Tsuâ | YCH'
    }
  },
  data () {
    return {
      items: [
        {
          name: 'ID card avatar $6',
          description: 'Template for ponies, Size: 1000x1000. +$1 for a different expression. You can request transparent background for free.',
          examples: ['781953981', '782100162', '782102439', '782104207'],
          isAvailable: true
        }
      ],
      auctions: []
    }
  }
}
</script>

<style scoped>
#ych {
  max-width: 1000px;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
}

.ychType {
  text-align: left;
  margin: 0px 20px auto;
}
</style>
