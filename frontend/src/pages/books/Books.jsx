// import { BookCarousel } from "../../components/bookCarousel/bookCarousel"
// import { useContext } from "react"
// import { SessionContext } from "../../contexts/SessionContext"
// import axios from 'axios'
import { useTranslation } from "react-i18next"

export default function Books(){
    // const {user} = useContext(SessionContext)
    // axios.get(`http://localhost:3000/api/books?token=${user.token}`)
    const {t} = useTranslation();
    return(
        <>
            {/* <BookCarousel> */}
                <h2>{t('libros')}</h2>
            {/* </BookCarousel> */}
        </>
    )
}