# height-transition

```html
<template>
  <main>
    <button @click="toggle">toggle</button>

    <height-transition>
      <div v-if="show">
        <!-- contents -->
      </div>
    </height-transition>
  </main>
</template>

<script>
import HeightTransition from '@yvany/height-transition'

export default {
  el: '#app',
  components: { HeightTransition },

  data: () => ({
    show: true
  }),

  methods: {
    toggle() {
      this.show = !this.show
    }
  }
}
</script>

<style src="@yvany/height-transition/dist/style.css"></style>
```
