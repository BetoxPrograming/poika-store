import { t } from '../../i18n/translator'

function AppFooter() {
    return (
        <footer className="border-t border-slate-200 bg-white px-8 py-6 text-center text-sm text-slate-500">
            <p>{t('plantilla.derechos')}</p>
        </footer>
    )
}

export default AppFooter