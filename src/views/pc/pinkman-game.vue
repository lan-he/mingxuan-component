<template>
    <div class="pinkman">
        <iframe class="iframe" src="https://hemingxuann.github.io/pinkman-2d-unity/" frameborder="0"></iframe>
    </div>
</template>
<script>
export default {
    name: 'pinkman',
    data() {
        return {}
    },
}
</script>
<style lang="less" scoped>
.pinkman {
    display: flex;
    justify-content: center;
    align-items: center;
    .iframe {
        width: 99%;
        height: 90%;
    }
}
</style>
