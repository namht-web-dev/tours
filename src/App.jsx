import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const url = "https://www.course-api.com/react-tours-project";

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  // return <>{/* <Loading /> */}</>;
  return (
    <main>
      <div className="title">
        {isLoading ? (
          <Loading />
        ) : (
          <Tours tours={tours} removeTour={removeTour} />
        )}
      </div>
    </main>
  );
}

export default App;
