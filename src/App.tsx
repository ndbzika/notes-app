import { Header } from "./components/Header"
import { MenuOptions } from "./components/MenuOptions"

function App() {
  return (
    <>
      <div className="header">
        <Header/>
      </div>
      <div className="main">
        <MenuOptions/>
      </div>
    </>
  )
}
export default App
