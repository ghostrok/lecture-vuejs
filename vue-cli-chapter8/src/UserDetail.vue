<template>
<div class="component">
    <h3>You May view the User Detail Here</h3>
    <p>Many Details</p>
    <p>User Name : {{ switchName() }}</p>
    <p>User Age : {{ userAge }}</p>
    <p>Age : {{ age }}</p>
    
    <!--
    <hr>
    <button @click="switchName">switch Name</button>
    -->

    <hr>
    <button @click="resetName">reset Name(resetName(</button>
    <button @click="resetFunc">reset Name(resetFunc)</button>

</div>    
</template>

<script>

import { eventBus } from './main';

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
    
    data: function() {
        return {
            name : this.myName,
            age : this.userAge,
        }
    },

    methods: {
        switchName: function() {
            //return this.myName = 'child changed Name';
            return this.myName.split("").reverse().join("");
        }, 
        resetName: function() {
            this.name = 'Max';
            this.$emit('nameWasReset', this.name);
        }, 
    }, 

    // event Listener (beforeCreated, created, beforexxx, xxx)
    created() { // ES6
            eventBus.$on('ageWasEdited', (age) => {
                this.age = age;
                console.log('User Detail age Listener created')
            });
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
