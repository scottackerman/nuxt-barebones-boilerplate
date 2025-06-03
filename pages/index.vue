<template>
  <div>
    <Head>
      <Link rel="canonical" :href="`https://www.domain.com${$route.path}`" />
      <Meta property="og:url" :content="`https://www.domain.com${$route.path}`" />
    </Head>
    <Body class="home">
      <h1>Hello</h1>
      <HomepageHero></HomepageHero>
      <HomepageScreen></HomepageScreen>
      <HomepageBillboard></HomepageBillboard>
      <HomepageRequestForm></HomepageRequestForm>
    </Body>
  </div>
</template>

<script setup lang="ts">
  const title = "Home"
  const description = "Page Description"
  const emit = defineEmits(['set-references', 'set-footnotes', 'set-legal'])
  // emit('set-footnotes', [
  //   'Footnote 1',
  //   'Footnote<sup>2000</sup>'
  // ])
  // emit('set-references', [
  //   'Comma separated references',
  //   'Go here'
  // ])
  // emit('set-legal', [
  //   'Comma separated legal items',
  //   'Go here'
  // ])

  useSeoMeta({
    title: title,
    description: description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description
  })
</script>
<style lang="scss">
h1 {
  font: normal normal bold 32px/22px "Aktiv Grotesk", Arial, sans-serif;
  margin: 40px;
}
</style>

