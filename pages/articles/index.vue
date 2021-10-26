<template>
  <div>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story"
      :is="story.content.component" />
    <section class="pt-4 pb-12">
      <molecule-article
        v-for="article in articles"
        :key="article.uuid"
        :article="article"
        class="py-4"
       />
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      story: { content: {} },
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

    const story = (await context.app.$storyapi.get('cdn/stories/articles/', { // Load page
        version,
      })).data.story;

    const articles = (await context.app.$storyapi.get('cdn/stories', { // Load articles
        version,
        starts_with: 'articles/',
        excluding_slugs: 'articles/',
        resolve_relations: 'post.categories'
      })).data.stories;

    return {
      story,
      articles
    }
  }
}
</script>
