<template>
  <atom-rich-text v-editable="blok" :rich-text="blok.content" />
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
