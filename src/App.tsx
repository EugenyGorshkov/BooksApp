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
