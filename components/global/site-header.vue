<template>
    <header class="site-nav" :class="mobileOpen ? 'active' : ''">
        <Picture name="site-header-pattern" svg />
        <nav class="main-nav" aria-label="main-navigation">
            <NuxtLink to="/" @click="mobileOpen = false">
                <Logo class="logo-svg" />
            </NuxtLink>

            <div class="menu-button" tabindex="0" @click="mobileOpen = !mobileOpen">
                <div class="menu-open-button-graphic">
                    <div class="line line1"></div>
                    <div class="line line2"></div>
                    <div class="line line3"></div>
                </div>
                <div class="menu-close-button-graphic">
                    <div class="line"></div>
                </div>
            </div>

            <div class="core-pages">
                 <NuxtLink class="nav" :class="{ active: route.path.startsWith('/styles') }" to="/styles/" @click="mobileOpen = false">
                    Style Guide
                </NuxtLink>
                <NuxtLink class="nav" :class="{ active: route.path.startsWith('/ethics') }" to="/ethics/" @click="mobileOpen = false">
                    Ethics & Transparency 
                </NuxtLink>
                <NuxtLink class="nav" :class="{ active: route.path.startsWith('/community') }" to="/community/" @click="mobileOpen = false">
                    Community
                </NuxtLink>
                <NuxtLink class="nav" to="#form" @click="mobileOpen = false">
                    Stay in Touch
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import Logo from '~/assets/images/logo-svg.svg'
    const mobileOpen = ref(false)
    const emit = defineEmits(['modal-open', 'modal-close'])
    const route = useRoute()
    const stub = computed(() => {
        return String(route.name).substring(0, 15)
    })

    watch(mobileOpen, modalEmit)
    function modalEmit (newVal: boolean) {
        if (newVal) {
        emit('modal-open')
        } else {
        emit('modal-close')
        }
    }
</script>
