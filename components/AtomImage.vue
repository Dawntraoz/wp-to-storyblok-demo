<template>
  <figure>
    <img
      :src="transformImage(image.filename, size)"
      class="mx-auto"
      :width="sizeWidth"
      :height="sizeHeight"
      :alt="image.alt"
      loading="lazy"
      :srcset="`
        ${transformImage(image.filename, size)} ${sizeWidth}w,
        ${transformImage(image.filename, '460x0')} 460w,
        ${transformImage(image.filename, '300x0')} 300w`"
      :sizes="`(max-width: ${sizeWidth}px) 100vw, ${sizeWidth}px`"
    />
  </figure>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
		size: {
			type: String,
      required: true,
		}
  },
  computed: {
    sizeWidth() {
      return this.size.split('x')[0]
    },
    sizeHeight() {
      return this.size.split('x')[1]
    }
  },
  methods: {
    transformImage(image, option) {
      if (!image) return '';
      if (!option) return image;
 
      const imageService = '//img2.storyblok.com/';
      let path = image.replace('https://a.storyblok.com', '');
      path = path.replace('//a.storyblok.com', '');
      const format = '/filters:format(webp)';
      return imageService + option + format + path;
    }
  }
}
</script>
