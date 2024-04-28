import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { Link as RouterLink } from "react-router-dom";
import { cn } from "@/components/UI/Toast/lib/utils.ts";

const linkVariants = cva(" font-pop-light rounded-md", {
  variants: {
    variant: {
      default: "bg-primary text-textColor",
    },
    size: {
      sm: "w-72",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});

interface Props
  extends ComponentProps<typeof RouterLink>,
    VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  className?: string;
}

function Link({ variant, children, className, ...props }: Props) {
  return (
    <RouterLink {...props} className={cn(linkVariants({ variant }), className)}>
      {children}
    </RouterLink>
  );
}

export default Link;
