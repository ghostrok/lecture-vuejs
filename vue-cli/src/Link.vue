<template>
    <div>
        <ul>
            <li v-for="(ingredient, i) in ingredients" :key="ingredient">{{ ingredient }} ({{ i }})</li>
        </ul>
    </div>
</template>


<script>
export default {
    data: function() {
        return {
            links: ['https://google.com', 'https://musinsa.com', 'https://playere.co.kr'],
            ingredients: ['meat', 'fruit', 'coke'], 
        }
    }
}
</script>