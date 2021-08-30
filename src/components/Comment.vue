<template>
  <div
    class="absolute w-full truncate"
    :style="{
      top: comment.top + 'vw',
    }"
    :class="customClass"
  >{{ comment.message }}</div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { StyledComment } from "~/contentScripts/hooks";

defineProps({
  comment: {
    type: Object as PropType<StyledComment>,
    required: true,
  },
  customClass: {
    type: String as PropType<string>,
    default: '',
  },
})
</script>