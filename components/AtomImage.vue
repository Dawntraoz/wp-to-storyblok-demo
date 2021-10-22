<template>
  <figure>
    <img
      :src="transformImage(image.filename, size)"
      :width="size.split('x')[0]"
      :height="size.split('x')[1]"
      :alt="image.alt"
      loading="lazy"
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
