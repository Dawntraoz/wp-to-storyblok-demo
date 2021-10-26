<template>
  <atom-image v-editable="blok" v-if="blok.image" :image="blok.image" size="400x400" class="py-4" />
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
