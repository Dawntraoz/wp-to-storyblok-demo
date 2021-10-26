<template>
  <article v-editable="blok.content">
    <header class="py-12 text-center">
      <h1>{{ blok.name }}</h1>
      <p class="pt-4">
        Posted in
        <span class="text-blue-500">{{ new Intl.DateTimeFormat('en-EN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(blok.first_published_at)) }}</span>
      </p>
    </header>
    <atom-image v-if="blok.content.featured_image" :image="blok.content.featured_image" size="1024x0" />
    <atom-rich-text :rich-text="blok.content.content" />
    <p class="max-w-prose mx-auto pt-6 pb-12">
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
