import { NamedUrl } from "./named-url.model";

export interface Species {
    evolution_chain: {
        url: string;
    };
    flavor_text_entries: FlavorText[];
}

export interface FlavorText {
    flavor_text: string;
    language: NamedUrl;
}

