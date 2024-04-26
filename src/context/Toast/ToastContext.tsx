import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { toastVariants } from "@/components/Toast/Molecules/Toast.tsx";
import type { VariantProps } from "class-variance-authority";

interface ToastProps extends VariantProps<typeof toastVariants> {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
}

// 만들기
interface ToastContext {
  toast: ({ ...props }: ToastProps) => void;
  toasts: ToastProps[];
}
// - context value
const toastValue: ToastContext = {
  toast: () => {},
  toasts: [],
};
const ToastContext = createContext<ToastContext>(toastValue);

// 사용하기
export const useToast = () => useContext(ToastContext);

// 범위 지정하기
export const ToastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = useCallback(
    (id: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    },
    [setToasts],
  );

  // toast 여러개가 관리되야한다.
  const toast = useCallback(
    ({ ...props }: ToastProps) => {
      const id = Date.now() + "";
      setToasts((prev) => [...prev, { id, ...props }]);
      setTimeout(() => removeToast(id), 2000);
    },
    [removeToast],
  );

  const value: ToastContext = useMemo(
    () => ({ toast, toasts }),
    [toast, toasts],
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
