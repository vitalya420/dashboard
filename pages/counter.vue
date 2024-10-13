<template>
  <div>
    <h1>Count: {{ counter.count }}</h1>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();
</script>
