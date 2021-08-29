import { useObservable } from "@vueuse/rxjs";
import { commentObserver } from "./comment/instances";

export const useComments = () => useObservable(commentObserver);
