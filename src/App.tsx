import React, {FunctionComponent, useState, useEffect} from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/moke-pokemon";

const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);   //Hook a tjr utiliser a la racine de l'api et non dans une fonction  sauf hook personalisé

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <h1>Pokédex</h1>
            <p>Il y a {pokemons.length} pokémons dans le pokédex.</p>
        </div>
    )
}

export default App;


/* import React from 'react' ;
// composants de fonction ( Stateless component), pas de dépendance exterieur , plus performant que le composant classe mais ne gere pas les state et les cycles de vie

export default class App extends React.Component {  // composant de class ( Statefull component)  permet de gerer les state et les cycles de vie mais moins performant et plus long a écrire
const name: string = "React";

        render() {
        return <h1>Hello, {name}<h1/>;
        }
       }
 */

// pour répondre à la problématique du choix de composants de fonction ou de classe ils ont inventé les hooks depuis la version 16.8 ceux ci permettent de disposer des state et des cycle de vie dans un composant de fonction

// un state est une valeur qui va pouvoir changer dans le temps contrairement a une const on va utiliser UseState