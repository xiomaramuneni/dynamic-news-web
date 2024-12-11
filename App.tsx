import "./Styles/App.scss"
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Pages/Home'
import AdminRoutes from "./routes/AdminRoutes"
import NewsArticle from "./Components/Layout/Article/NewsArticle"
const App = () => {
  return (
    <div className='app-container'>
      <Header/>
      <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin/*' element={<AdminRoutes/>}/>
            <Route path='/news/:id' element={<NewsArticle/>}/>
          </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App