import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "about me",
    },
    {
      name: "portfolio",
    },
    {
      name: "contact",
    },
    {
      name: "resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav>
          {/* add pages */}
        </Nav>
      </Header>
      <main>
        {/* add pages */}
      </main>
    </div>
  );
}

export default App;
