declare module 'clsx' {
  export type ClassValue = string | number | null | boolean | undefined | ClassValue[] | { [key: string]: any };
  export function clsx(...inputs: any[]): string;
  const _default: typeof clsx;
  export default _default;
}

declare module 'tailwind-merge' {
  export function twMerge(...classLists: Array<string | undefined | null | false>): string;
}

declare module 'class-variance-authority' {
  export type VariantProps<T> = any;
  export function cva(base?: any, config?: any): (...inputs: any[]) => string;
}
