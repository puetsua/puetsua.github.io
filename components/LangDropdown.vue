<template>
  <div
    class="dropdown"
    @click="toggleDropdown"
    :class="{ expanded: isExpanded }"
    :style="computedStyles"
  >
    <div class="dropdownbutton">
      <span class="text">{{ currentLang() }}</span>
      <i class="angle-down" :class="{ 'angle-down-toggled': isExpanded }" />
    </div>

    <div class="options" :class="{ 'options-toggled': isExpanded }">
      <div
        v-for="option in configOptions"
        :key="option"
        class="option"
        @click="selectOption(option);"
      >{{ option }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  data () {
    return {
      width: 50,
      configOptions: ['en', 'zh'],
      isExpanded: false
    }
  },
  computed: {
    computedStyles: function () {
      return [
        { '--dropdown-width': this.width + 'px' }
      ]
    }
  },
  methods: {
    toggleDropdown () {
      this.isExpanded = !this.isExpanded
    },
    selectOption (option) {
      this.$i18n.setLocale(option)
    },
    currentLang () {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: var(--dropdown-width);
}

.dropdownbutton {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdownbutton .text {
  padding: 0px 5px;
}

.options {
  position: absolute;
  width: 100%;
  transform: scaleY(0);
  transition: all 0.2s;
}

.options-toggled {
  margin-bottom: -1px;
  transform: scaleY(1);
  transition: all 0.2s;
}

.option {
  display: flex;
  padding: 0px 5px;
  background: #4e2470;
}

.option:hover {
  background: #8342b8;
  transition: all 0.2s;
}

.angle-down {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid rgb(231, 180, 255);
  background: transparent;
  border-width: 0 3px 3px 0;
  padding: 2px;
  width: 1px;
  height: 1px;
  margin: 0px 5px 0px 5px;
  transform: rotate(45deg);
  transition: all 0.2s;
}

.angle-down-toggled {
  margin-bottom: -1px;
  transform: rotate(-135deg);
  transition: all 0.2s;
}
</style>
