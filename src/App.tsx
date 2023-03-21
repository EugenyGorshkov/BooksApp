import { BooksComponent } from "./components/BooksComponent/BooksComponent"
import { SearchComponent } from "./components/SearchComponent"


const App: React.FC = () => {

  return (
    <div>
      <SearchComponent/>
      <BooksComponent/>
    </div>
  )
}

export default App

// сделать каждый айтем книги стилизовть
// посмотреть доки апи по поиску и сортировке
// добавить кнопку загрузить еще
// добавить ридми
