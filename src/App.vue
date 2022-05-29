<template>
    <div id="app">
        <PageHeader />
        <router-view />
    </div>
</template>
<script>
import PageHeader from '@/components/page-header.vue'
export default {
    name: 'app',
    components: { PageHeader },
}
</script>
<style>
@import '//at.alicdn.com/t/font_1921710_h8p392rolth.css';
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    color: #000;
}
#app {
    background-color: #f7f8fa;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
