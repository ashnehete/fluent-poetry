import poems from "./poems/poems";
import {Poem} from "./types";

export function getAllPoems(): Poem[] {
    return poems.map((item, id) => extractPoem(item, id));
}

export function getPoemById(id: number): Poem {
    return extractPoem(poems[id], id);
}

export function extractPoem(poemStr: string, id: number): Poem {
    const sections = poemStr.split('\n\n');

    const poem: Poem = {
        id,
        title: sections[0],
        stanzas: []
    };

    for (let section of sections.slice(1)) {
        poem.stanzas.push({lines: section.split('\n')});
    }

    return poem;
}
