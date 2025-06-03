<template>
    <section v-if="footnotes.length" id="global-footnotes" class="global-footnotes">
        <div class="content-container">
            <p v-for="footnote in footnotes" v-html="footnote" />
        </div>
    </section>
</template>

<script setup lang="ts">
  const props = defineProps({
    footnotes: Array
  })
</script>

<style lang="scss">
.global-footnotes {
    padding: 50px 0 0;
    background-color: var(--dkblue);

    p {
        text-align: left;
        font: normal normal normal 16px/27px Aktiv Grotesk;
        letter-spacing: 0px;
        color: var(--white);
        margin-bottom: 25px;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>
