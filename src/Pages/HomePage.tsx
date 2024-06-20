import MainContainerPage from "./MainContainer/MainContainerPage";
import MenuBarPage from "./MenuBar/MenuBarPage";

export default function Home() {
  return (
    <div className="flex h-screen">
      <MenuBarPage />
      <MainContainerPage />
    </div>
  );
}
