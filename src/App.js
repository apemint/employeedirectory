import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
//import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search"


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}
      <Wrapper>
        <Search />
      </Wrapper>
      <Footer/>
    </div>
  );
}

export default App;
