import { Pokemon } from "./pokemon";

export default class Utils {
    static getPokemonTypeColor(pokemon: Pokemon) {
        switch (pokemon.types[0].toLowerCase()) {
            case "combat": return 'peru';
            case "eau": return 'blue';
            case "electrik": return 'yellow';
            case "feu": return 'red';
            case "fée": return 'pink';
            case "insecte": return 'darkolivegreen';
            case "normal": return 'grey';
            case "plante": return 'green';
            case "poison": return 'purple';
            case "psy": return 'darkviolet ';
            case "vol": return 'aliceblue';
            default: return 'grey';
        }
    }
}