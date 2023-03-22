import { Route, Routes } from "react-router";
import { BookComponent } from "./components/BookComponent";
import { BooksComponent } from "./components/BooksComponent/BooksComponent";
import { SearchComponent } from "./components/SearchComponent";

const App: React.FC = () => {
  return (
    <div>
      <SearchComponent />
      <Routes>
        <Route path="/" element={<BooksComponent />} />
        <Route path="/:id" element={<BookComponent />} />
      </Routes>
    </div>
  );
};

export default App;

// стилизовть страницу книги
// добавить ридми
// докер и гит хаб пейдж
