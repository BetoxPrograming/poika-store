import {t} from '../../i18n/translator'

function AppHeader() {
    return (
        <header className="border-b border-slate-200 bg-white px-8 py-8">
            <h1 className="text-4xl font-bold text-slate-900">
                {t('plantilla.suTienda')}
            </h1>

            <p className="mt-2 text-lg text-slate-600">{t('plantilla.suTienda')}</p>
        </header>
    )
}

export default AppHeader