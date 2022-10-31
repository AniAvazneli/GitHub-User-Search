import './App.css';
import ThemeChanger from "./components/ThemeChanger";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import GlobalStyle from "./components/GlobalStyles";
import { useState } from "react";


function App() {
  const [isWhite, setIswhite] = useState(true);
  const [user, setUser] = useState('');

  return (
    <>
      <GlobalStyle  isWhite={isWhite}/>
      <ThemeChanger isWhite={isWhite} setIswhite={setIswhite}/>
      <SearchBar isWhite={isWhite} setUser={setUser} user={user}/>
      <Card user={user}  isWhite={isWhite} />
    </>
  );
}

export default App;
