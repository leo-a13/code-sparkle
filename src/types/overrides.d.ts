// Override framer-motion types to be more permissive
import "framer-motion";

declare module "framer-motion" {
  interface Variants {
    [key: string]: any;
  }
  
  // Make HTMLMotionProps accept standard HTML event handlers
  type HTMLMotionProps<T extends keyof HTMLElementTagNameMap> = any;
}

// Fix canvas-confetti
declare module "canvas-confetti" {
  interface ConfettiFunction {
    (options?: any): Promise<null>;
    create(canvas: HTMLCanvasElement, options?: any): ConfettiFunction;
    reset(): void;
  }
  const confetti: ConfettiFunction;
  export default confetti;
}
