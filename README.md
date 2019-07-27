# React app project
Proyecto de React usando Hooks para los servicios y Redux para state management.

## Development setup
First install all the dependencies
``` bash
npm install
```

To serve the project to run in development mode
``` bash
npm run start
```

To build the project
``` bash
npm run build
```

To run the Dyson fake server to retrieve our data from the different endpoints
``` bash
npm run mocks
```

## Folder structure

### `/dyson`
Contiene nuestra configuración de [dyson](https://github.com/webpro/dyson) para poder simular nuestras peticiones http.

Dentro encontramos la carpeta `/methods` con las carpetas `/get` y `/post` con ficheros para cada uno de nuestros endpoints.
También podremos encontrar la carpeta `/data` con nuestros ficheros `json` con datos para poder exponer desde nuestros endpoints.  

### `/models`
Contiene nuestras entidades con 2 métodos estáticos `fromJSON` y `toJSON que serán los únicos métodos que podremos usar para crear o serializar nuestra entidad, ya que nuestro `constructor` es privado.

Haciendo esto nos aseguramos de encapsular la lógica de creación en este fichero y al tener el constructor privado nos aseguramos también que toda instancia de esta clase ha pasado nuestas reglas de validación, por lo que nunca será incorrecta.

### `/services`
Contiene nuestros servicios compuestos principalmente por `Hooks`. Agruparemos los diferentes Hooks según el dominio al que pertenezcan por lo que, por ejemplo todos nuestros Hooks relaionados con la entidad `Player` estarán dentro de `PlayerService`.

## Done

- [x] Fake server
- [x] Domain entities
- [x] Domain services
- [x] Http gateway
- [x] Http Service layer
- [x] Basic Redux Implementation

## ToDo

- [ ] Advanced Redux Implementation (sagas, selectors)
- [ ] Alert/Toast
- [ ] I18n
- [ ] Fonts
- [ ] Image/assets example
- [ ] Theming
- [ ] Testing examples

## Authors

* **Arnau Silvestre** - *Initial work*


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/arnausd23/match-app/blob/master/LICENSE) file for details

## Acknowledgments

* [Apiumhub](https://apiumhub.com/)
* [parronator](https://github.com/parronator/)
