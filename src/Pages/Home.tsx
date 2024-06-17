import MainContainer from "../components/MainContainer";
import MenuBar from "../components/MenuBar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <MenuBar />
      <MainContainer />
    </div>
  );
}
