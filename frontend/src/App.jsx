import { Link, Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Books from "./pages/books/Books"
import Home from "./pages/home/Home"
// import BooksAdmin from "./pages/booksAdmin/BooksAdmin"
import { useContext, useEffect } from "react"
import { SessionContext } from "./contexts/SessionContext"
import { useTranslation } from "react-i18next"

function App() {
  const { t, i18n } = useTranslation();
  const { logout, user } = useContext(SessionContext)


  useEffect(()=>{
    console.log(i18n.language)
  },[])

  function changeLang(e){
    console.log('changelang')
    i18n.changeLanguage(e.target.value)
    
  }

  return (
    <>
      <header>
        <navbar>
          <ul>
          
            <li>
              <select onChange={changeLang} name="" id="">
                <option selected={"en" === i18n.language} value="en">English</option>
                <option selected={"es" === i18n.language} value="es">Español</option>
                <option selected={"fr" === i18n.language} value="fr">Français</option>
                <option selected={"de" === i18n.language} value="de">Deutch</option>
              </select>
            </li>

            <li>
              <Link to="/">{t('home')}</Link>
            </li>
            
            {user ? '' : <li>
              <Link to="/login">{t('acceso')}</Link>
            </li>}

            {user ? '' : <li>
              <Link to="/signup">{t('registro')}</Link>
            </li>}

            {user ? '' : <li>
              <Link to="/books">{t('libros')}</Link>
            </li>}

            {user && user.role === "admin" ? (
              <li>
                <Link className="btn btn-primary text-white no-underline" to="/book-admin">{t('book admin')}</Link>
              </li>):('')}

            {user ? <button className="btn btn-outline-danger" onClick={logout}>{t('logout')}</button> : ''}

          </ul>
        </navbar>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={user ? <Navigate to="/books"></Navigate> : <Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/books" element={<Books></Books>}></Route>
          {/* <Route path="/book-admin" element={<BooksAdmin></BooksAdmin>}></Route> */}
        </Routes>
      </main>
      <footer>
        <div className="footer text-center fixed-bottom bg-light">
          <span className="text-muted">Upgrade Hub - React Project 2024</span>
        </div>
      </footer>
    </>
  )
}

export default App