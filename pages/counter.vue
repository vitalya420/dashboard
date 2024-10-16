<template>
  <div class="card h-100">
    <div class="card-body">
      <h1>Count: {{ counter.count }}</h1>
      <button class="btn btn-success" @click="counter.increment">
        Increment
      </button>
      <button class="btn btn-danger" @click="counter.decrement">
        Decrement
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "~/stores/counter";

const counter = useCounterStore();
</script>
