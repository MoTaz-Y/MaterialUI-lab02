import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import { Main } from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Main />
      {/* <Container maxWidth="xl" sx={{ marginY: "2rem" }}>
        <Typography variant="h3" sx={{ fontSize: "2rem" }}></Typography>
      </Container> */}
      <Hero />
      <Info />
    </>
  );
}

export default App;
