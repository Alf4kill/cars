import CarForms from "./components/CarForms";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {
  return (
    <div>
      <CarValue />
      <CarList />
      <CarSearch />
      <CarForms />
    </div>
  );
}

export default App;
