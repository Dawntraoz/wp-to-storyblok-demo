<template>
  <component v-editable="blok" :is="`h${blok.level}`" class="py-6">
    {{ blok.content }}
  </component>
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
