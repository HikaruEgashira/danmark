<template>
  <transition-group name="nico">
    <div v-for="comment in commentList" :key="`comment-${comment.name}-${comment.id}`">
      <Comment :comment="comment" :class="customClass" />
    </div>
  </transition-group>
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import type { StyledComment } from "~/contentScripts/hooks";

defineProps({
  commentList: {
    type: Array as PropType<StyledComment[]>,
    required: true,
  },
  customClass: {
    type: String as PropType<string>,
    default: "",
  },
})
</script>

<style scoped>
.nico-enter-active {
  transition: all 20s linear;
}
.nico-enter-from {
  transform: translateX(100%);
}
.nico-enter-to {
  transform: translateX(-100%);
}
</style>
