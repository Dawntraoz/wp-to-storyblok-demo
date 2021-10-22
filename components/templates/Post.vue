<template>
  <article v-editable="blok">
    <header>
      <h1>{{ blok.name }}</h1>
    </header>
    <atom-rich-text :rich-text="blok.content.excerpt" />
    <atom-image :image="blok.content.featured_image" size="700x0" />
    <atom-rich-text :rich-text="blok.content.content" />
    <p>
      Posted in
      <nuxt-link v-for="category in blok.content.categories" :key="`category-${category.id}`" :to="`/${category.full_slug}`">
        {{ category.name }}
      </nuxt-link>
    </p>
  </article>
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
