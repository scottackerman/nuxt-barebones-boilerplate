<template>
  <div>
    <Head>
      <Link rel="canonical" :href="`https://www.domain.com${route.path}`" />
      <Meta property="og:url" :content="`https://www.domain.com${route.path}`" />
    </Head>
    <Body class="home">
      <!-- Hero Section (full-bleed, no padding) -->
      <section class="section">
        <div class="container">
          <h1 class="section__title">Home Hero (h1)</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>
          <p class="body-large">Body large</p>
          <p class="body-regular">Body regular</p>
          <p class="body-small">Body small</p>
          <blockquote>"This is a blockquote"</blockquote>
          <p class="eyebrow-large">Eyebrow large</p>
          <p class="eyebrow-medium">Eyebrow medium</p>
          <p class="eyebrow-small">Eyebrow small</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h4>Color variables:</h4>
          <div class="grid">
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--black); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--black</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--blackalpha); text-align: center;">
                <p class="body-small" style="padding: 10px">--blackalpha</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--lightgray); text-align: center;">
                <p class="body-small" style="padding: 10px">--lightgray</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--quartzgray); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--quartzgray</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--pink); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--pink</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--plum); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--plum</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--teal); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--teal</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--green); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--green</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--lightblue); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--lightblue</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--blue); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--blue</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--purple); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--purple</p>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-4">
              <div class="card" style="background-color: var(--darkpurple); text-align: center;">
                <p class="body-small" style="color: white; padding: 10px">--darkpurple</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hero Section (full-bleed, no padding) -->
      <section class="section section--flush" style="background-color: var(--quartzgray); color: white">
        <div class="container" style="padding: 100px 115px">
          <h3 class="section__title  hover:teal">This is a full bleed area, like for the video wall (text changes on hover)</h3>
        </div>
      </section>

      <!-- Full-width Content Block -->
      <section class="section">
        <div class="container">
          <h4>Background changes on hover</h4>
          <p class="section__text">
            This is a long `.body-regular` paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
            dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
            Maecenas ligula massa, varius a, semper congue, euismod non, mi.
          </p>
          <button class="btn bg-purple white hover:bg-pink">Button Label</button>
        </div>
      </section>

      <!-- 4 Columns -->
      <section class="section">
        <div class="container">
          <h4>Button borders change on button hover</h4>
          <div class="grid">
            <div class="col-4 tablet:col-3 desktop:col-3">
              <div class="card">
                <p>Column 1</p>
                <button class="btn bg-purple white hover:bg-pink">Click Me</button>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-3">
              <div class="card">
                <p>Column 2</p>
                <button class="btn">Click Me</button>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-3">
              <div class="card">
                <p>Column 3</p>
                <button class="btn">Click Me</button>
              </div>
            </div>
            <div class="col-4 tablet:col-3 desktop:col-3">
              <div class="card">
                <p>Column 4</p>
                <button class="btn">Click Me</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Form -->
      <section id="form" class="section">
        <div class="container">
          <h2>Form</h2>
          <p class="section__text">
            Form stuff goes here.
          </p>
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