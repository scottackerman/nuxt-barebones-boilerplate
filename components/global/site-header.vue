<template>
    <header class="site-nav" :class="mobileOpen ? 'active' : ''" @mouseleave="subnav = false">
        <Picture name="site-header-pattern" svg />
        <nav class="main-nav" aria-label="main-navigation">
            <NuxtLink to="/" @mouseover="subnav = false" @focus="subnav = false" @click="mobileOpen = false">
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
                <NuxtLink to="/ethics/" @mouseover="subnav = false" @focus="subnav = false" @click="mobileOpen = false">
                    Link 1 
                </NuxtLink>
                <NuxtLink to="/community/" @mouseover="subnav = false" @click="mobileOpen = false">
                    Link 2
                </NuxtLink>
                <NuxtLink to="/form/" @mouseover="subnav = false" @click="mobileOpen = false">
                    Link 3
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import Logo from '~/assets/images/logo-svg.svg'
    const mobileOpen = ref(false)
    const subnav = ref(false)
    const emit = defineEmits(['modal-open', 'modal-close'])
    const { currentRoute } = useRouter()
    const stub = computed(() => {
        return currentRoute.value.name.substring(0,15)
    })

    watch(mobileOpen, modalEmit)
    function modalEmit (newVal) {
        if (newVal) {
        emit('modal-open')
        } else {
        emit('modal-close')
        }
    }
</script>
