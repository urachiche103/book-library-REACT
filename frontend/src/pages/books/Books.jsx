import { useContext } from "react"
import { SessionContext } from "../../contexts/SessionContext"
import axios from 'axios'
import { useTranslation } from "react-i18next"

export default function Books(){
    const {user} = useContext(SessionContext)
    // axios.get(`http://localhost:3000/api/books?token=${user.token}`)
    const { t, i18n } = useTranslation();
    return(
        <>
            <h2>{t('libros')}</h2>
        </>
    )
}