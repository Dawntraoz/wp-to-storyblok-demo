<template>
  <article v-editable="article.content">
    <header class="max-w-prose mx-auto text-center">
      <h2>{{ article.name }}</h2>
      <p class="pt-4">
        Posted in
        <span class="text-blue-500">{{ new Intl.DateTimeFormat('en-EN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(article.first_published_at)) }}</span>
      </p>
    </header>
    <nuxt-link :to="article.full_slug">
      <atom-image
        v-if="article.content.featured_image"
        :image="article.content.featured_image"
        size="1024x0"
        class="py-4"
      />
    </nuxt-link>
    <div class="max-w-prose mx-auto">
      <atom-rich-text :rich-text="article.content.excerpt"></atom-rich-text>
      <nuxt-link :to="article.full_slug" class="block py-4">Read more >></nuxt-link>
      <p>
        Posted in
        <nuxt-link v-for="category in article.content.categories" :key="`category-${category.id}`" :to="`/${category.full_slug}`">
          {{ category.name }}
        </nuxt-link>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
