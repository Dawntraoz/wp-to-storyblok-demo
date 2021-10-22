<template>
  <atom-rich-text :rich-text="blok.content" />
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
