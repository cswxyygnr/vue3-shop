<template>
    <ul>
        <li v-for="item in obj" :key="item.name" v-if="item.name == 'xiaoming'"></li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            obj:[{name:'xiaoming'},{name:'xiaohong'},{name:'xiaogang'}]
        }       
    }
} 
</script>