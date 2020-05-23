<template>
    <div class="alert alert-success text-center">
        <h3>That's Correct! Click next to continue</h3>
        <hr>
        <button class="btn btn-primary" @click="onNextQuestion">Next Question</button>
    </div>
</template>
<style>

</style>
<script>
    export default{
        methods: {
            onNextQuestion() {
                this.$emit('confirmed');
            }
        }
    }
</script>
