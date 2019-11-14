<i18n>
en:
  fillform: "Please let me know the information below and send them to me when you commission:"
  formlist:
    - "Character name: "
    - "Item: (Colored sketch, cel-shading or detailed shading etc...)"
    - "Reference/Images: (A reference sheet or several images of your character.)"
    - "Description: (Description of your character such as pose, expression.)"
    - "Email: (To send you an Paypal invoice.)"
  readTos1: "Thank you for your interest. To commission me, "
  readTos2: "you should follow everything in my Terms of Service."
  readTos3: "If you don't want to read all stuffs, just ask away. Once you paid the commission, you also agree to "
  readTos4: my ToS
  readTos5: .
  accept1: "I accept all safe and suggestive art commissions, "
  accept2: "No NSFW and fetish arts"
  accept3: .
zh:
  fillform: "在你委託時，麻煩告訴我以下資訊："
  formlist:
    - "角色名稱："
    - "想要的風格：(Colored sketch, cel-shading or detailed shading etc...)"
    - "參考圖：(角色設定圖或是任何含有你的角色的圖。)"
    - "其他細節描述： (關於角色的姿勢、表情等等。)"
  readTos1: "很感謝你對我的委託有興趣。如果想要委託，"
  readTos2: "你應該先閱讀我的服務條款。"
  readTos3: "如果你不想全部看完，直接問我也可以。一旦繳錢後，將視同你已經同意了"
  readTos4: 我的服務條款
  readTos5: 。
  accept1: "一般的圖跟暗示圖可接受，"
  accept2: "不收車圖(18+)跟性癖圖。"
  accept3: .
</i18n>

<template>
  <div class="YCHInfo">
    <b><h3>{{ $t('fillform') }}</h3></b>
    <ul>
      <li v-for="item in $t('formlist')" :key="item">
        {{ item }}
      </li>
    </ul>

    <p>
      {{ $t('readTos1') }}<nuxt-link to="/art/tos">{{ $t('readTos2') }}</nuxt-link>
      {{ $t('readTos3') }}<nuxt-link to="/art/tos">{{ $t('readTos4') }}</nuxt-link>{{ $t('readTos5') }}
    </p>

    <p>
      {{ $t('accept1') }}
      <b>{{ $t('accept2') }}</b>{{ $t('accept3') }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'YCHInfo'
}
</script>

<style scoped>
.YCHInfo {
  text-align: left;
}
</style>
