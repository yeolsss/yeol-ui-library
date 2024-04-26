import { ToastProvider } from "@/context/Toast";
import ToastTest from "@/pages/ToastTest";

function App() {
  return (
    <ToastProvider>
      <ToastTest />
    </ToastProvider>
  );
}

export default App;
