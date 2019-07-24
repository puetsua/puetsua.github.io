<template>
  <div id="commish">
    <h2>
      <a
        href="https://www.deviantart.com/puetsua#artstatus"
      >>> Check my art status on my page first!</a>
    </h2>

    <h3 id="update">Last Updated: July 24th, 2019</h3>

    <p>
      Thank you for your interest. To commission me, you should follow everything that mentioned below.
      <b>If you don't want to read all stuffs, I have mark text bold for you.</b>
    </p>

    <p>
      <b>Fill this form and send to me when you commission:</b>
    </p>
    <ul>
      <li>Character name: (Name of your OC or furry.)</li>
      <li>Reference/Images: (A reference sheet or several images of your character.)</li>
      <li>Description: (Description of your character such as pose, expression.)</li>
    </ul>

    <p>
      I accept all safe and suggestive art commissions,
      <b>No NSFW and fetish arts.</b>
    </p>

    <p>
      To commission,
      <b>the reference to your characters must be included in your message. Any images of your character are fine.</b> You cannot just say "I want my OC drawn" because I cannot read your mind. Other details like poses and expression are also recommended to be included.
    </p>

    <p>
      You need to pay via
      <b>Paypal or DeviantArt points</b>. The price listed below is based on a solo, full-body picture of a character. It's for reference only.
    </p>

    <p>
      <b>Contact me via DeviantArt Note, Twitter DM or Facebook Message</b> about your commission. Once I accepted your commission we can talk about details from other social media if you think it's more convenient.
    </p>

    <p>
      The art can
      <b>take two weeks to one month</b> to finish since I have a project to do. If you want it to be done in a certain time, we can discuss.
    </p>

    <p>If you don't want your commissioned artwork to be public please let me know in the note. Your name will be hidden and replaced with (Anon XXXXXX) in my to-do list. XXXXXX is 6-alphanumeric code I will give you once I received the payment.</p>

    <p>List of creatures I recommend:</p>
    <ul>
      <li>Pony</li>
      <li>Pony in anthro form</li>
      <li>Eeveelutions (Pokemon)</li>
    </ul>
    <p>I cannot guarantee the quality of drawing other creatures, and price may be very different from the list. If you needed other creatures to be drawn, details can be discussed.</p>

    <p>
      <b>For Point Commissions, please check my commission widget on my page.</b> Without any specific points on the list, the convert rate at
      <img
        alt="DA points"
        src="https://e.deviantart.net/emoticons/p/points.gif"
      />100 = $1
    </p>

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

export default {
  name: 'commish',
  components: {
    CommissionItem
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

<style>
#commish {
  width: 1000px;
  position: relative;
  margin: 0px 10px auto;
  display: inline-block;
  text-align: left;
}

#update {
  color: green;
}

.comType {
  margin: 0px 20px auto;
}

.itemFade-enter-active,
.itemFade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.itemFade-enter,
.itemFade-leave-to {
  opacity: 0;
}
</style>
