<template>
<div class="component">
    <h3>You May Edit the User Here</h3>
    <p>Edit me!</p>
    <button @click="editAge">Edit Age</button>
    <p>User Age {{ userAge }} </p>
</div>    
</template>

<script>
export default {

    props: ['userAge'], 

    methods: {
        editAge: function() {
            this.userAge = 20;
            this.$emit('ageWasEdited', this.userAge);

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
