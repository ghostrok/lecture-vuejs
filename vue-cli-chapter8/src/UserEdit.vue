<template>
<div class="component">
    <h3>You May Edit the User Here</h3>
    <p>Edit me!</p>
    <button @click="editAge">Edit Age</button>
    <p>User Age : {{ userAge }} </p>
    <p>Age {{ age }} </p>
</div>    
</template>

<script>

import { eventBus } from './main';

export default {
    props: ['userAge'], 

    data : function() {
        return {
            age : this.userAge,
        }
    },
    methods: {
        editAge: function() {
            this.age = 20;
            //this.$emit('ageWasEdited', this.age);
            //eventBus.$emit('ageWasEdited', this.age);

            eventBus.changeAge(this.age);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: greenyellow;
        border:1px solid;
        padding: 10px;
        display: relative;
    }

</style>
