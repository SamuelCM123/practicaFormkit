# **FormKitUsers**

## **Verificaciones Previas**

Para preparar el ambiente de desarrollo, asegurece de realizar las siguientes verificaciones:

- ✨ **Node JS**: 

    ```bash
    node -v
    ```

    > **NOTA**: En caso de no contar con el entorno de ejecución de Javascript de Node JS, acceda al siguiente enlace para su instalación:
    > https://nodejs.org/es
    > 
    > Una vez instalado, ejecute el comando anterior para determinar si se realizo la instalación.

## **Instalación para uso de FormKit**

Para hacer uso de la paqueteria `FormKit` que apoya con el desarrollo de los formularios e integra validaciones, iconos y estilos, es necesario realizar las siguientes instalaciones:

- Instalación general de `FormKit`
    ```bash
    npm install @formkit/vue@next
    ```
    >**NOTA**: El comando anterior instala las paqueterias necesarias para hacer uso del formkit sin integración de estilos o iconos.
    1. **@formkit/icons**: 
        ```bash
        npm install @formkit/icons
        ```
        >**NOTA**: El comando anterior instala lo necesario para importar iconos de genesis(Perteneciente a FormKit)
    2. **@formkit/themes**
        ```bash
        npm install @formkit/themes
        ```
        >**NOTA**: El comando anterior instala lo necesario para importar los estilos genericos para los diferentes tipos de inputs, la diferencia es que dependera de la definicion del `type` y de las adicciones de props en los `Formkits` creados.

- **Creación del archivo de configuración para FormKit**
    Se configura el archivo que define las necesidades del usuario para despues exportarlo al archivo `main.js` en este caso.
    - Archivo `formkit.config.js`
        ```js
        import { es } from '@formkit/i18n'
        import { createInput, defaultConfig } from '@formkit/vue'
        import { genesisIcons } from '@formkit/icons'

        // Importacion de componentes 
        import InputLabel from './components/InputLabel.vue'

        // Importación de input Schema
        import { floatingLabelTextInput } from './inputs/floatingLabelTextInput'

        const config = defaultConfig({
            locales: { es },
            locale: 'es',
            //USO DE LOS ESTILOS GENERICOS PARA LOS INPUTS.
            theme: 'genesis', 
            //USO DE LOS ICONOS GENERICOS PARA LOS INPUTS.
            icons:{
                ...genesisIcons
            },
            inputs:{
                inputPlaceholder: createInput(InputLabel,{
                    props: ['tipe','topLabel'],
                }),
                floatingLabelTextInput
            },
        })
        // Exportación de la configuración
        export default config
        ```
    - Archivo `main.js`
        ```js
        import '../src/assets/style.css'
        //Importación para que la configuración sea valida y se implementen los estilos.
        import '@formkit/themes/genesis'

        import { createApp } from 'vue'
        import { plugin } from '@formkit/vue'
        import App from './App.vue'
        import router from './router'
        import config from './formkit.config'

        const app = createApp(App)

        //Se aplican los plugins y el objeto de los configuraciones para FormKit
        app.use(plugin,config)

        app.use(router)

        app.mount('#app')
        ```
## **Pasos de Instalación**

A continuación, siga lo siguientes pasos de instalación y configuración:

1. Abrir una ventana terminal.


2. Clone el repositorio de `FormKitUsers`:

    ```sh
    git clone https://github.com/SamuelCM123/practicaFormkit.git
    ```

3. Nos situamos en la raíz del proyecto:

    ```sh
    cd formkit-users
    ```

4. Instalamos los módulos de Node JS:

    ```sh
    npm install
    ```

5. Abrir el proyecto en un editor de código:

    > NOTA: Se recomienda que se utilice **[Visual Studio Code](https://code.visualstudio.com/download)**. 
    >
    > De tenerlo, use el comando **`code .`** para abrir el proyecto con VS Code.

6. Ejecute el servidor de desarrollo:

    ```sh
    npm run dev
    ```

