import Vue from 'vue'

/** Template */
import Page from '~/components/templates/Page.vue'
import Post from '~/components/templates/Post.vue'
import Category from '~/components/templates/Category.vue'

/** Components */
import CoreHeading from '~/components/CoreHeading.vue'
import CoreImage from '~/components/CoreImage.vue'
import CoreParagraph from '~/components/CoreParagraph.vue'
import CoreQuote from '~/components/CoreQuote.vue'

Vue.component('page', Page)
Vue.component('post', Post)
Vue.component('category', Category)

Vue.component('core-heading', CoreHeading)
Vue.component('core-image', CoreImage)
Vue.component('core-paragraph', CoreParagraph)
Vue.component('core-quote', CoreQuote)
