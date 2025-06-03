<template>
    <section v-if="references.length" id="references">
        <div class="content-container">
            <p>References:</p>
            <ol>
                <li v-for="reference in references">
                    <span v-html="reference" />
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup lang="ts">
  const props = defineProps({
    references: Array
  })
</script>

<style lang="scss">
#references {
    background-color: var(--dkblue);
    padding: 50px 0 0;

    p {
        text-align: left;
        font: normal normal bold 16px/27px Aktiv Grotesk;
        letter-spacing: 0px;
        color: var(--white);
    }

    ol {
        margin-left: 15px;

        li {
            margin-left: 0;
            text-align: left;
            font: normal normal bold 16px/27px Aktiv Grotesk;
            letter-spacing: 0px;
            color: var(--white);

            span {
                font: normal normal normal 16px/27px Aktiv Grotesk;
            }
        }
    }
}
</style>
