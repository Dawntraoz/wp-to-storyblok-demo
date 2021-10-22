<template>
  <component :is="`h${blok.level}`">
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
