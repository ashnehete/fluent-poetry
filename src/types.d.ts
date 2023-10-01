export type Poem = {
    id: number;
    title: string;
    stanzas: Stanza[];
}

export type Stanza = {
    lines: string[];
}
