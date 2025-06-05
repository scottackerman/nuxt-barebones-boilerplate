<template>
    <footer>
        <div class="footer-top">
            <NuxtLink to="/" class="logo-link" @click="mobileOpen = false">
                <Logo class="logo-svg" />
            </NuxtLink>
        </div>
        
        <p class="body-small">
            This site is intended for US residents only.<br>Copyright © 2025 Insmed, Inc. All rights reserved.<br>MED-ALL-NA-00022 July 2025
        </p>
    </footer>
</template>


<script setup lang="ts">
    declare global {
        interface Window {
            cookieconsent: {
                show: () => void
            }
        }
    }
    import Logo from '~/assets/images/logo-svg.svg'
    const mobileOpen = ref(false)
    function openCookies() {
        if (window.cookieconsent?.show) {
            window.cookieconsent.show()
        }
    }

    const props = defineProps({
        legal: Array
    })
</script>

