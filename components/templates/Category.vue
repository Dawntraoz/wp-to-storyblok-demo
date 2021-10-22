<template>
  <section v-editable="blok.content">
    <h1>Category {{ blok.name }}</h1>
    <p>{{ blok.content.description }}</p>
  </section>
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
