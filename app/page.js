import LeftSideBar from "./components/homepage/_components/LeftSideBar";
import MainContent from "./components/homepage/_components/MainContent";

export default function Home() {
  return (
    <main className="container mx-auto grid grid-cols-12 mt-4 gap-4">
      <LeftSideBar />
      <MainContent />
    </main>
  );
}
