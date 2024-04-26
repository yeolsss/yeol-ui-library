import Toast from "@/components/Toast/Molecules/Toast.tsx";
import { useToast } from "@/context/Toast";

function ToastContainer() {
  const { toasts } = useToast();
  return (
    <section className="absolute h-auto w-auto bottom-5 right-5 flex flex-col gap-5">
      {toasts.map((toast) => (
        <Toast key={toast.id} variant={toast.variant}>
          <Toast.Title>{toast.title}</Toast.Title>
        </Toast>
      ))}
    </section>
  );
}

export default ToastContainer;
