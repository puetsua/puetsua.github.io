<template>
  <div id="commish">
    <CommissionInfo/>
    <hr>
    <div class="comType">
      <h2>Feral</h2>
      <p>Applies to</p>
      <ul>
        <li>Pony</li>
        <li>Cat</li>
        <li>Eeveelutions (Pokemon)</li>
      </ul>
      <CommissionItem v-for="item in feralItems" :key="item.name" v-bind="item" />
    </div>
    <div class="comType">
      <h2>Anthro</h2>
      <p>Applies to</p>
      <ul>
        <li>Pony Anthro</li>
        <li>Furry</li>
        <li>Equestria Girl</li>
      </ul>
      <CommissionItem v-for="item in anthroItems" :key="item.name" v-bind="item" />
    </div>
  </div>
</template>

<script>
import CommissionItem from '@/components/CommissionItem.vue'
import CommissionInfo from '@/components/CommissionInfo.vue'

export default {
  name: 'commish',
  components: {
    CommissionItem,
    CommissionInfo
  },
  head () {
    return {
      title: 'Pue-Tsuâ | Commissions'
    }
  },
  data () {
    return {
      feralItems: [
        {
          name: 'Colored Sketch $15-30',
          description: 'Max characters 4, Size: higher than 1000x1000',
          examples: ['793342828', '796764913'],
          isAvailable: true
        },
        {
          name: 'Cel Shading $20-40',
          description: 'Max characters 2, Size: higher than 1000x1000',
          examples: ['794761840', '711080605', '782408545'],
          isAvailable: true
        },
        {
          name: 'Detailed Shading $40-70',
          description: 'Max characters 2, Size: higher than 1000x1000',
          examples: ['789974602', '792378218'],
          isAvailable: true
        }
      ],
      anthroItems: [
        {
          name: 'Colored Sketch $25-50',
          description: 'Max characters 2, Size: higher than 1000x1000',
          examples: ['689411941'],
          isAvailable: true
        },
        {
          name: 'Cel Shading $35-60',
          description: 'Max characters 2, Size: higher than 1000x1000',
          examples: ['790760123'],
          isAvailable: true
        },
        {
          name: 'Detailed Shading $60-90',
          description: 'Max characters 1, Size: higher than 1000x1000',
          examples: ['789837305', '792102357'],
          isAvailable: true
        }
      ]
    }
  }
}
</script>

<style scoped>
#commish {
  max-width: 1000px;
  position: relative;
  display: inline-block;
  padding: 0px 10px;
}

.comType {
  text-align: left;
  margin: 0px 20px auto;
}
</style>
