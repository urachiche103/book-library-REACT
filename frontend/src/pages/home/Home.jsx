import { useTranslation } from "react-i18next"

export default function Home(){
    const {t} = useTranslation();
        return(
        <>
            <h2>{t('bienvenido')}</h2>
        </>
    )
}