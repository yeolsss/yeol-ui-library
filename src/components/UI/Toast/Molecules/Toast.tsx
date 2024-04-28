import Title from "@/components/UI/Toast/Atoms/Title.tsx";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/UI/Toast/lib/utils.ts";
import CloseButton from "@/components/UI/Toast/Atoms/CloseButton.tsx";
import { useEffect, useState } from "react";

const toastVariants = cva(
  "relative p-5 rounded-md shadow-lg transition-transform duration-500 ",
  {
    variants: {
      variant: {
        default: "bg-white text-black border border-gray-200 border-solid",
        success: "bg-emerald-600",
        error: "bg-rose-600",
      },
      size: {
        sm: "w-72",
        md: "w-80",
        lg: "w-96",
      },
      positionY: {
        top: "-translate-y-[150%]",
        bottom: "translate-y-[150%]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

interface Props extends VariantProps<typeof toastVariants> {
  children: React.ReactNode;
  className?: string;
  toastId?: string;
  handleClickClose?: (id: string) => void;
  positionY?: "top" | "bottom";
}

function Toast({
  variant,
  size,
  children,
  className,
  toastId,
  handleClickClose,
  positionY,
}: Props) {
  const [style, setStyle] = useState(
    cn(toastVariants({ variant, size, positionY }), className),
  );

  useEffect(() => {
    setTimeout(() => {
      setStyle((prev) =>
        cn(
          toastVariants({ variant, size, positionY }),
          `${prev} translate-y-0`,
        ),
      );
    }, 0);
  }, [size, variant, positionY]);

  return (
    <div className={style}>
      {children}
      <div className=""></div>
      <CloseButton onClick={() => handleClickClose?.(toastId!)} />
    </div>
  );
}

Toast.Title = Title;

export default Toast;
