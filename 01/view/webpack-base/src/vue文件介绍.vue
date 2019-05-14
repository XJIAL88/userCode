<template>
    <div></div>
</template>

<script type="text/javascript">
    //=> 一个.vue文件就是一个组件 分为三部分
    //1. template html结构 有且只有一部分跟元素包裹
    //2. script 定义组件的那个对象 使用export default默认导出组件
    //3. style 样式(scoped:这个属性标识样式是私有的，只能当前组件使用)

    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>