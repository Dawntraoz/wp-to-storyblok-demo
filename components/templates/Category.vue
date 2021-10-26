<template>
  <section v-editable="blok.content">
    <header class="py-12 text-center">
      <h1>Category {{ blok.name }}</h1>
    </header>
    <p class="prose mx-auto">{{ blok.content.description }}</p>
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
