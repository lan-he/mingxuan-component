<template>
    <div class="key-board">
        <key-board @onInputChange="onInputChange" />
    </div>
</template>
<script>
import keyBoard from '@/components/mobile/key-board.vue'
export default {
    name: 'key-board-box',
    components: { keyBoard },
    data() {},
    mounted() {},
    methods: {
        onInputChange(io) {
            console.log(io)
        },
    },
}
</script>
<style lang="less" scoped></style>
