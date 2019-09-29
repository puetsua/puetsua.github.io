<template>
  <div class="YCHInfo">
    <b><h3>Fill this form and send to me when you commission:</h3></b>
    <ul>
      <li>Character name: (Name of your OC or furry.)</li>
      <li>Item: (Colored sketch, cel-shading or detailed shading etc...)</li>
      <li>Reference/Images: (A reference sheet or several images of your character.)</li>
      <li>Description: (Description of your character such as pose, expression.)</li>
    </ul>

    <p>
      Thank you for your interest. To commission me, <nuxt-link to="/art/tos">you should follow everything in my Terms of Service.</nuxt-link>
      If you don't want to read all stuffs, just ask away. Once you paid the commission, you also agree to <nuxt-link to="/art/tos">my ToS</nuxt-link>.
    </p>

    <p>
      I accept all safe and suggestive art commissions,
      <b>No NSFW and fetish arts.</b>
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
