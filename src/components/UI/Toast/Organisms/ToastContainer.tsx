import Toast from "@/components/UI/Toast/Molecules/Toast.tsx";
import { useToast } from "@/components/UI/Toast/context/Toast";

// TODO: Variants요고 작성해서 position 옮길 수 있게 바꿔라.
// style 추가 시켜라 좀 예쁘게 쓸맛나게
// title, description 나눠라.
// 블로그 쓰고.

function ToastContainer() {
  const { toasts } = useToast();

  const toastPosition = `absolute h-auto w-auto flex flex-col gap-5 ${toasts.toastPositionY + "-5"} ${toasts.toastPositionX + "-5"}`;

  return (
    <section className={`${toastPosition} overflow-hidden`}>
      {toasts.toasts.map((toast) => {
        return (
          <Toast
            key={toast.id}
            toastId={toast.id}
            variant={toast.variant}
            size={toast.size}
            className={toast.className}
            handleClickClose={toast.handleClickClose}
            positionY={toasts.toastPositionY}
          >
            <Toast.Title>{toast.title}</Toast.Title>
          </Toast>
        );
      })}
    </section>
  );
}

export default ToastContainer;
