import { defaultConfig } from '@formkit/vue'
import { es, en } from '@formkit/i18n'
import { genesisIcons } from '@formkit/icons'

const config = defaultConfig({
    // Lenguajes seleccionados para el texto general del proyecto.
    locales:{ es, en },
    locale: "es",
    
    //Estilos de genesis .
    theme:"genesis",
    
    //Iconos predeterminados de FormKit .
    icons:{
        ...genesisIcons
    }
})

export default config