<template>
  <main>
    <height-transition>
      <div v-if="show">test content</div>
    </height-transition>

    <button @click="toggle">toggle</button>
  </main>
</template>

<script>
import HeightTransition from '../src'

export default {
  el: '#app',

  components: { HeightTransition },

  data() {
    return {
      show: true
    }
  },

  methods: {
    toggle() {
      this.show = !this.show
    }
  }
}
</script>

<style src="../src/style.css" />
