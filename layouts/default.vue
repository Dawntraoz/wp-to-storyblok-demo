<template>
  <div class="flex flex-col min-h-screen">
    <app-header />
    <main class="container mx-auto px-4 flex-auto">
      <Nuxt />
    </main>
    <app-footer />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

/* Global styles */
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-bold;
}

h1 {
  @apply text-4xl;
}

h2 {
  @apply text-3xl;
}

h3 {
  @apply text-2xl;
}

h4,
h5,
h6 {
  @apply text-xl;
}
</style>
