import { Outlet } from "react-router-dom";
import { MainHeader } from "@/components/Organisms/header";
import ToastContainer from "@/components/UI/Toast/Organisms/ToastContainer.tsx";
import { ToastProvider } from "@/components/UI/Toast/context/Toast";
import { ThemeProvider } from "@/context/ThemeContext";

function RootLayout() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <MainHeader />
        <main className="max-w-[1000px] mt-16 mx-auto">
          <Outlet />
        </main>
        <ToastContainer />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default RootLayout;
