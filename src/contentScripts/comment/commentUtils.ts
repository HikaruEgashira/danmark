import { Comment } from "./commentObserver";

export const timer = (stack: Comment[]) => {
  setTimeout(() => {
    stack.shift();
  }, 20000);
};

export const getTop = () => Math.random() * 90 + 5;
