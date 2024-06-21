import { Outlet } from "react-router-dom";
import MainContainerPage from "./MainContainer/MainContainerPage";
import MenuBarPage from "./MenuBar/MenuBarPage";

export default function HomePage() {
  return (
    <>
      <Outlet />
      <div className="flex h-screen">
        <MenuBarPage />
        <MainContainerPage />
      </div>
    </>
  );
}
