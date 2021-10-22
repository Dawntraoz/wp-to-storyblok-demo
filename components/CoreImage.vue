<template>
  <atom-image :image="blok.image" size="700x0" />
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
