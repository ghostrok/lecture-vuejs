<template>
<div class="component">
    <h3>You May view the User Detail Here</h3>
    <p>Many Details</p>
    <p>User Name : {{ switchName() }}</p>
    <p>User Age : {{ userAge }}</p>
    
    <!--
    <hr>
    <button @click="switchName">switch Name</button>
    -->

    <hr>
    <button @click="resetName">reset Name</button>
    <button @click="resetFunc">reset Name</button>

</div>    
</template>

<script>
export default {
    //props: ['myName'], 
    props: {
        myName: {
            type: String,
            default: "Unknown"
        }, 
        resetFunc : Function,
        userAge: Number,
    },
    methods: {
        switchName: function() {
            //return this.myName = 'child changed Name';
            return this.myName.split("").reverse().join("");
        }, 
        resetName: function() {
            this.myName = 'Max';
            this.$emit('nameWasReset', this.myName);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
        border: 1px solid; 
        display: relative;
    }

</style>
