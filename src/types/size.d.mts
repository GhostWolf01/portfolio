interface SizeProps {
  size?: string | number;
}

interface sizeReturn {
  sizeClasses: string;
  sizeStyles: {
    width: number;
    height: number;
  };
}

export type PredefinedSizes = "x-small" | "small" | "default" | "large" | "x-large" | number;

declare module "vuetify/lib/composables/size" {
  declare function useSize(props: SizeProps): sizeReturn;
  export { useSize };
}
