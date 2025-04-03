import { NamedUrl } from "./named-url.model";

export interface GetPokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: NamedUrl[];
}
