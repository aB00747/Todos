import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { TodosIteams } from "./MyComponents/TodosIteams";
import { Footer } from "./MyComponents/Footer";

function App() {
  let headerProps = {
    title: "My Todo List",
    searchBar: true,
  };
  const textArray = [
    {
      sr: 1,
      title: "Wake Up at 6 AM",
      desc: "Sleep early so you can wake up early in the morning !!"
    },
    {
      sr: 2,
      title: "Do exercise",
      desc: "Exercise make you Fit and healty"
    },
    {
      sr: 3,
      title: "Do meditation",
      desc: "Meditation make you calm and focus on your life"
    },
    {
      sr: 4,
      title: "Do Jobs",
      desc: "Help to achieve you dreams"
    }
  ];
  console.log("APP.js",typeof(textArray));
  
  return (
    <>
      <Header {...headerProps} />
      <Todos {...textArray}/>
      <TodosIteams />
      <Footer />
    </>
  );
}

export default App;
