<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  title: string;
  description: string;
  isValid?: boolean;
}>();

defineEmits<{
  (e: "new-font-size", fontSize: number): void;
}>();

const fontSize = ref(16);
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ description }}</p>
  <br />
  <p>
    <button
      @click="
        fontSize++;
        $emit('new-font-size', fontSize);
      "
    >
      Set the font size to {{ fontSize }}px.
    </button>
  </p>
</template>
