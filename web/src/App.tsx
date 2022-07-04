import "./App.css";
import { GetActivities } from "./hooks/GetActivities";

const App = () => {
  const { data, error, loaded } = GetActivities(10);
  
  if (loaded) {
    console.log(data);
    return <p>FINE!!</p>;
  }

  return <span>Loading...</span>;
};

export default App;
