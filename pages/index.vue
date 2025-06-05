<template>
  <div>
    <Head>
      <Link rel="canonical" :href="`https://www.domain.com${route.path}`" />
      <Meta property="og:url" :content="`https://www.domain.com${route.path}`" />
    </Head>
    <Body class="home">
      <!-- Hero Section (full-bleed, no padding) -->
      <section class="section section--flush">
        <div class="container">
          <h1 class="section__title">Hero</h1>
        </div>
      </section>

      <!-- Full-width Content Block -->
      <section class="section">
        <div class="container">
          <p class="section__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
            dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
            Maecenas ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>
      </section>

      <!-- 3 Blue Columns -->
      <section class="section">
        <div class="container">
          <div class="grid">
            <div class="col-3">
              <div class="card">
                <p>Column 1</p>
                <button class="btn">Click Me</button>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <p>Column 2</p>
                <button class="btn">Click Me</button>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <p>Column 3</p>
                <button class="btn">Click Me</button>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <p>Column 4</p>
                <button class="btn">Click Me</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Body>
  </div>
</template>

<script setup lang="ts">
  import structuredData from '~/data/structured'
  useStructuredData()
  import { useRoute } from '#imports'

  const route = useRoute()

  const title = "Home"
  const description = "Page Description"

  useSeoMeta({
    title: title,
    description: description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description
  })
</script>