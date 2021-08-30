<template>
  <Field>
    <CommentGroup :comment-list="commentList" :custom-class="customClass"></CommentGroup>
  </Field>
</template>

<script setup lang="ts">
import 'virtual:windi.css'
import { useComments } from './hooks/useComments';

const customClass = ref("font-bold opacity-60");
const commentList = useComments();
</script>
