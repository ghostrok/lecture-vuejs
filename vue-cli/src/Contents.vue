<template>
    <div class="col-xs-12 col-sm-6">
        <ul>
            <li v-for="(link, i) in links" v-bind:key="link">{{ link }} ({{ i }})</li>
        </ul>


        <p>Server Status : {{ cmd }} </p>
        
        <!--
        <p><button @click="changeStatus">Change</button></p>
        -->
        <input type="text" v-model="cmd">
        
        <!--
        <p v-if="status === 'good'">
            Server Health Good 
        </p>
        <p v-else>
            Server Health Unverified
        </p>
        -->

    </div>
</template>


<script>
export default {
    data: function() {
        return {
            links: ['https://google.com', 'https://musinsa.com', 'https://playere.co.kr'],
            ingredients: ['meat', 'fruit', 'coke'], 
            status : 'Critical', 
            cmd : ''
        }
    }, 
    methods: {
        changeStatus: function() {
            this.status = 'Good';
        }
    }
}
</script>

<style scoped>
    div {
        border: 1px solid red; 
    }
</style>