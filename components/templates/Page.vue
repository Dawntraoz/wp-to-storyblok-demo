<template>
  <section v-editable="blok.content">
    <header class="py-12 text-center">
      <h1>{{ blok.name }}</h1>
    </header>
    <atom-image v-if="blok.content.featured_image" :image="blok.content.featured_image" size="700x0" />
    <component
      v-for="blok in blok.content.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component" />
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
