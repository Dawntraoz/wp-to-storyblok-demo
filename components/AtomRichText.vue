<template>
  <div v-if="richTextHTML" v-html="richTextHTML" class="prose mx-auto"></div>
</template>

<script>
export default {
  props: {
    richText: {
      type: [Object, String],
      required: true
    }
  },
  computed: {
    richTextHTML() {
      return this.richText ? this.$storyapi.richTextResolver.render(this.richText) : ''
    }
  }
}
</script>