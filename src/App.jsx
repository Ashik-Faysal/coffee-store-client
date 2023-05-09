import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="mx-4 my-8 md:mx-24">
      <h1 className="text-6xl text-purple-600 text-center font-bold mb-6">Coffee House</h1>
      <div
        className="grid md:grid-cols-2 gap-4"
      >
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

export default App;
