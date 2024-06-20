import MainContainer from "./MainContainer/MainContainerPage";
import MenuBar from "./MenuBar/MenuBarPage";

export default function Home() {
  return (
    <div className="flex h-screen">
      <MenuBar />
      <MainContainer />
    </div>
  );
}
