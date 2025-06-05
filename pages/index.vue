<template>
  <div>
    <Head>
      <Link rel="canonical" :href="`https://www.domain.com${route.path}`" />
      <Meta property="og:url" :content="`https://www.domain.com${route.path}`" />
    </Head>
    <Body class="home">
      <h1 class="section__title">Home</h1>
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