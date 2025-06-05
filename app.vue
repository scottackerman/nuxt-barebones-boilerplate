<template>
  <div>
    <Head>
    </Head>
    <div id="skip">
      <a class="skip-main" href="#main">Skip to main content</a>
    </div>
    <Body :class="{ killscroll: killscroll }" />
    <div class="site-wrapper">
      <SiteHeader @modalOpen="killscroll = true" @modalClose="killscroll = false" ></SiteHeader>
      <NuxtPage id="main" class="main" />
      <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script setup>
  const killscroll = ref(false)

  useHead({
    htmlAttrs: {
      lang: 'en-us'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png'
      },
    ],
  })

  useSeoMeta({
    // ogImage: '',
    // twitterImage: '',
    // twitterCard: 'summary'
  })

  onMounted(() => {
    const getParam = (name, url) => {
      if (!url) {
        url = window.location.href
      }
      name = name.replace(/[[\]]/g, '\\$&')
      const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
      const results = regex.exec(url)
      if (!results) {
        return null
      }
      if (!results[2]) {
        return ''
      }
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }

    if (getParam('screenshot')) {
      document.body.classList.add('screenshot')
    }

  })
</script>
