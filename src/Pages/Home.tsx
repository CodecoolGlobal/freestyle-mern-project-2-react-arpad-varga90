import MainContainer from "./MainContainer/MainContainer";
import MenuBar from "./MenuBar/MenuBar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <MenuBar />
      <MainContainer />
    </div>
  );
}
