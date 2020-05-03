<!-- SLOT -->

<template>
<div>

    <!-- title Slot -->
    <div class="title">
        <slot name="title"></slot>
        <span style="color:#cccc"><slot name="subtitle">The Subtitles</slot></span>
    </div>
    
    <!-- contents Slot-->
    <div>
        <slot nane="contents"></slot>
    </div>

</div>
</template>

<script>
export default {
    props: ['quote'],

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
