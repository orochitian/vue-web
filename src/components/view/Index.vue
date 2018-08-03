<template>
    <el-container>
        <el-aside width="220px">
            <lr-aside></lr-aside>
        </el-aside>
        <el-main>
            <lr-main></lr-main>
        </el-main>
    </el-container>
</template>

<script>
    import Aside from '../../components/view/Aside'
    import Main from '../../components/view/Main'
    export default {
        name: "Index",
        components: {
            'lr-aside': Aside,
            'lr-main': Main
        }
    }
</script>

<style scoped lang="scss">

</style>
