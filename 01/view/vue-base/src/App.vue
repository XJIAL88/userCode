<template>
    <div>
        <h1>span</h1>
        <router-view></router-view>
        <button @click="show">notify</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:'d'
            }
        },
        methods:{
            show(){
                this.$notify();
            }
        }
    }
</script>