<template>
    <div class="box">
        <bilibiliHeader />
    </div>
</template>

<script>
import bilibiliHeader from '@/components/pc/bilibili-header.vue'
export default {
    name: 'treet',
    components: {
        bilibiliHeader,
    },
    mounted() {
        console.log(this.$route)
    },
}
</script>

<style scoped></style>
