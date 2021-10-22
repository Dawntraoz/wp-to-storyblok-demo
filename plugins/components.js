import Vue from 'vue'

/** Template */
import Page from '~/components/templates/Page.vue'
import Post from '~/components/templates/Post.vue'
import Category from '~/components/templates/Category.vue'

/** Components */
import Teaser from '~/components/Teaser.vue'
import Grid from '~/components/Grid.vue'
import Feature from '~/components/Feature.vue'

Vue.component('page', Page)
Vue.component('post', Post)
Vue.component('category', Category)

Vue.component('teaser', Teaser)
Vue.component('grid', Grid)
Vue.component('feature', Feature)
