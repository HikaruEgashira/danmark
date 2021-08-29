<template>
  <div
    class="fixed top-0 w-full h-full pointer-events-none overflow-hidden whitespace-nowrap children:(bg-transparent shadow-transparent m-0 p-0 text-dark-500 dark:text-light-500)"
    style="z-index: 2147483647;"
  >
    <div
      v-for="comment in commentList"
      :key="`comment-${comment.provider}-${comment.id}`"
      class="absolute animate-nico text-2xl w-full"
      :class="customClass"
      :style="{ top: `${comment.top}vh` }"
    >{{ comment.message }}</div>
  </div>
</template>

<script setup lang="ts">
import 'virtual:windi.css'
import { useComments } from './hooks';

const customClass = ref("font-bold opacity-60");
const commentList = useComments();
</script>
