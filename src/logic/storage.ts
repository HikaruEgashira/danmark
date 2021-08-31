import { useLocalStorage } from "@vueuse/core";

export const storageDemo = useLocalStorage("webext-demo", "", {
  listenToStorageChanges: true,
});
