<template>
  <div>
    <Head>
      <Link rel="canonical" :href="`https://www.domain.com${route.path}`" />
      <Meta property="og:url" :content="`https://www.domain.com${route.path}`" />
    </Head>
    <Body class="ethics">
      <h1>Community</h1>
      <HomepageHero />
      <HomepageScreen />
      <HomepageBillboard />
      <HomepageRequestForm />
    </Body>
  </div>
</template>

<script setup lang="ts">
  import structuredData from '~/data/structured'
  useStructuredData()
  import { useRoute } from '#imports'

  const route = useRoute()

  const title = "Community"
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