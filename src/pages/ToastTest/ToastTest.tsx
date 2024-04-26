import ToastContainer from "@/components/Toast/Organisms/ToastContainer.tsx";
import { useToast } from "@/context/Toast";
import { useCallback, useState } from "react";

function ToastTest() {
  const { toast } = useToast();
  const [counter, setCounter] = useState<number>(0);

  const handleClick = useCallback(() => {
    toast({
      title: `${counter}번째`,
      description: "토스트 메세지입니다.",
      variant: "error",
    });
    setCounter((prev) => prev + 1);
  }, [toast, counter]);

  return (
    <>
      <div className="m-auto">
        <h1 className="text-white text-4xl ">Toast Test</h1>
        <button
          onClick={handleClick}
          className="bg-amber-50 p-5 cursor-pointer rounded-md"
        >
          토스트 생성
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default ToastTest;
