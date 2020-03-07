<i18n>
en:
  status: "Status: "
  Released: Released
  InDevelopment: In Development
  Suspended: Suspended
zh:
  status: "狀態："
  Released: 已發行
  InDevelopment: 開發中
  Suspended: 已暫停
</i18n>

<template>
  <div class="GameItem">
    <table class="table1">
      <tr>
        <th class="image">
          <img :alt="name" :src="imageSrc" width="300px"/>
        </th>
        <th height="100%">
          <table class="table2">
            <tr>
              <th class="name">
                {{ name }}
              </th>
            </tr>
            <tr>
              <td class="desc" v-html="descDisplay" />
            </tr>
            <tr>
              <td class="status">
                {{ $t('status') }}{{ $t(statusCode) }}
              </td>
            </tr>
            <tr>
              <td>
                <a :href="itchioLink" v-if="itchioLink"><img src="@/assets/itchio.svg" height="50px"></a>
              </td>
            </tr>
          </table>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GameItem',
  props: {
    asset: String,
    name: String,
    desc: String,
    statusCode: String,
    itchioLink: String
  },
  computed: {
    imageSrc: function () {
      try {
        return require('@/assets/' + this.asset)
      } catch (e) {
        console.log(e)
        return null
      }
    },
    descDisplay: function () {
      var str = this.desc.replace(/^\s+|\s+$/g, '')
      return str.replace(/(?:\r\n|\r|\n)/g, '<br />')
    }
  }
}
</script>

<style scoped>
.GameItem {
  border: 1px dashed #4e2470;
  margin: 10px 0px auto;
  text-align: left;
  background-color: #ffffff;
}
.GameItem table {
  border-spacing: 0px 0px;
}
.GameItem td, .GameItem th{
  padding: 5px 5px;
}
.table1 {
  width: 100%;
}
.image {
  width: 300px;
}
.table2 {
  height: 100%;
}
.name {
  font-size: 20px;
}
.desc {
  vertical-align: top;
  height: 100%;
  font-size: 14px;
}
.status {
  font-size: 14px;
  color: #bd00bd;
}
</style>
