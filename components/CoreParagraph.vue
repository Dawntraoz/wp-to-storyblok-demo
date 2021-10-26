<template>
  <atom-rich-text v-editable="blok" :rich-text="blok.content" class="pb-4" />
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
