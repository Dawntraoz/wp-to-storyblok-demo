<template>
  <section class="py-12">
    <molecule-article
      v-for="article in articles"
      :key="article.uuid"
      :article="article"
      class="py-4"
      />
  </section>
</template>

<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  mounted () {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()

      // Listen to Storyblok's Visual Editor event
      storyblokInstance.on(['input', 'published', 'change'], (event) => {
        if (event.action == 'input') {
          if (event.story.id === this.story.id) {
            this.story.content = event.story.content
          }
        } else {
          this.$nuxt.$router.go({
            path: this.$nuxt.$router.currentRoute,
            force: true,
          })
        }
      })
    }, (error) => {
      console.error(error)
    })
  },
  async asyncData (context) {
    const version =
          context.query._storyblok || context.isDev ? 'draft' : 'published'

    const articles = (await context.app.$storyapi.get('cdn/stories', { // Load articles
        version,
        starts_with: 'articles/',
        excluding_slugs: 'articles/',
        resolve_relations: 'post.categories'
      })).data.stories;

    return {
      articles
    }
  }
}
</script>
