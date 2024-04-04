import { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/HomePage";
import Login from "./components/Login";
import CreatePage from "./components/CreatePage";
import Catalog from "./components/GameCatalog/Catalog";
import Details from "./components/Details";
import EditPage from "./components/EditPage";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <div id="box">
        <Header />

        <main id="main-content">
          <Route path="/" exact component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/create-page" component={CreatePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/edit" component={EditPage} />
        </main>
      </div>
    </div>
  );
}

export default App;
