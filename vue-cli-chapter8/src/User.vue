<template>
<div>
    <h1>The User Component</h1>
    <p>I'm Awsome User!</p>
    <p>My Name is <b>{{ name }}</b></p>
    <p>My Age is <b>{{ age }}</b></p>
    <button @click="changeName">Change My Name</button>
    <hr>

    <div>
        <!-- Detail -->
        <div class="col-xs-12 col-sm-6">
            <app-user-detail 
            :myName="name" 
            :userAge="age"
            @nameWasReset="name = $event"
            :resetFunc="resetName"
            ></app-user-detail>
        </div>
        
        <!-- Edit -->
        <div class="col-xs-12 col-sm-6">
            <app-user-edit 
            :userAge="age"
            @ageWasEdited="age = $event"
            ></app-user-edit>
        </div>

    </div>
</div>    
</template>

<script>

import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {

    components: {
        'app-user-detail' : UserDetail,
        'app-user-edit' : UserEdit,
    },
    data: function() {
        return {
            name : 'Max',
            age : 44,
            //name2 : 'Okmos',
            
        }
    }, 
    methods: {
        changeName: function() {
            this.name = 'Anna';
        }, 
        resetName: function() {
            this.name = 'Max';
        }
    }
    
}
</script>

<style scoped>
    div {
        background-color: lightgray;
        border: 1px solid; 
        
        display: relative;
    }
</style>
