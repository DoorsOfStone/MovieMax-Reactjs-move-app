import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Category/Row";

function App() {
  return (
    <div class="min-w-[screen] min-h-screen bg-black">
      <Navbar />
      <Banner />
      <Row title="Action" />
      <Row title="Comdey" />
      <Row title="Netflix Originals" />
      <Row title="Anime" />
      <Row title="Documenties" />
      <Row title="Family" />
      <Row title="Coming Soon" />
    </div>
  );
}

export default App;
