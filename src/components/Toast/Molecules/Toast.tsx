import Title from "@/components/Toast/Atoms/Title.tsx";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/Toast/lib/utils.ts";

export const toastVariants = cva("p-5 rounded-md", {
  variants: {
    variant: {
      default: "bg-white",
      success: "bg-emerald-600",
      error: "bg-rose-600",
    },
    size: {
      sm: "w-80",
      md: "w-96",
      lg: "w-104",
    },
  },
  defaultVariants: {
    variant: "success",
    size: "md",
  },
});

interface Props extends VariantProps<typeof toastVariants> {
  children: React.ReactNode;
  className?: string;
}

function Toast({ variant, size, children, className }: Props) {
  return (
    <div className={cn(toastVariants({ variant, size, className }))}>
      {children}
    </div>
  );
}

Toast.Title = Title;

export default Toast;
