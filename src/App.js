import Header from "./Header";
import CharacterList from "./CharacterList";
import Pagination from "./Pagination";
import Search from "./Search";
import DataContext from "./DataContext";
import { useContext } from "react";
import "./App.css";

function App() {
  const { currentCharacters, showIndividual } = useContext(DataContext);
  return (
    <>
     <Header />
      <Search />
      {loading ? (
        <Loader />
      ) : (
        <CharacterList />
      )}
      {currentCharacters.length < 10 ? null : !showIndividual ? <Pagination /> : null} 
      {/* current lenth:10 */}
    </>
  );
}

export default App;
