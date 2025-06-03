<template>
    <footer>
        <div>
            <div class="footer-top">
                <NuxtLink to="/" class="logo-link" @mouseover="subnav = false" @focus="subnav = false" @click="mobileOpen = false">
                    <Logo class="logo-svg" />
                </NuxtLink>

                <div v-if="legal.length" class="image-disclaimer">
                    <p v-for="l in legal" v-html="l"></p>
                </div>
            </div>
            
            <p class="address">
                Address
            </p>
        </div>
    </footer>
</template>


<script setup lang="ts">
    import Logo from '~/assets/images/logo-svg.svg'
    function openCookies() {
        try {
            window.cookieconsent.show()
        } catch (_) {}
    }

    const props = defineProps({
        legal: Array
    })
</script>

