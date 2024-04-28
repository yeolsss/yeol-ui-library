import { useToast } from "@/components/UI/Toast/context/Toast";
import { useCallback, useState } from "react";

function ToastPage() {
  const { toast } = useToast();
  const [counter, setCounter] = useState<number>(0);

  const handleClick = useCallback(() => {
    toast({
      title: `${counter}번째`,
      description: "토스트 메세지입니다.",
      variant: "default",
      size: "lg",
      duration: 5000,
      toastPositionY: "bottom",
    });

    setCounter((prev) => prev + 1);
  }, [toast, counter]);

  const handleClickTopToast = useCallback(() => {
    toast({
      title: `${counter}번째`,
      description: "토스트 TOP 메세지입니다.",
      variant: "error",
      size: "lg",
      duration: 2000,
      toastPositionY: "top",
    });

    setCounter((prev) => prev + 1);
  }, [toast, counter]);

  return (
    <>
      <h1 className="text-white text-4xl">Toast Test</h1>
      <div className="pt-16 px-16 flex gap-5">
        <button
          onClick={handleClick}
          className="bg-amber-50 p-5 cursor-pointer rounded-md text-hover-textColor"
        >
          토스트 생성 Bottom
        </button>

        <button
          onClick={handleClickTopToast}
          className="bg-amber-50 p-5 cursor-pointer rounded-md text-hover-textColor"
        >
          토스트 생성 Top
        </button>
      </div>
    </>
  );
}

export default ToastPage;
