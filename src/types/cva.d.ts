declare module "class-variance-authority" {
  export type VariantProps<T extends (...args: any) => any> = Omit<
    Parameters<T>[0] extends undefined ? {} : NonNullable<Parameters<T>[0]>,
    "class" | "className"
  >;
  
  export function cva(
    base?: string,
    config?: {
      variants?: Record<string, Record<string, string>>;
      defaultVariants?: Record<string, string>;
      compoundVariants?: Array<Record<string, string> & { class?: string; className?: string }>;
    }
  ): (props?: Record<string, any>) => string;
}

declare module "class-variance-authority/types" {
  export type ClassProp = { class?: string; className?: string };
  export type ClassValue = string | null | undefined | ClassValue[];
}
