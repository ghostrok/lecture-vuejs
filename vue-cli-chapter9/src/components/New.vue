<!-- SLOT -->

<template>
<div>
    <p>New Quote</p>

    <button @click="count++">increse</button>

    <hr>

    <p> {{ count }} </p>

</div>
</template>

<script>
export default {
    props: ['quote'],

    data: function() {
        return {
            count : 0,
        }

    },

    destoryed() {
        console.log("Destroyed");
    }, 

    deactivated() {
        console.log("Deactivated");
    }, 

    activated() {
        console.log("Activated");
    }



}
</script>

<style scoped>

    div {
        border : 1px solid #ccc;
        box-shadow : 1px 1px 2px black;
        padding: 30px;
        margin: auto;
        text-align: center;
    }

    .title {
        font-style : italic;
    }
</style>
