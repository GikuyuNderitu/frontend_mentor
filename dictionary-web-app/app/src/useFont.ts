import { atom, WritableAtom } from "jotai";

export const fontOptions = [
  {
    className: 'font-sans',
    label: 'Sans Serif',
  },
  {
    className: 'font-serif',
    label: 'Serif',
  },
  {
    className: 'font-mono',
    label: 'Mono',
  }
] as const;

type FontOption = {
  className: string;
  label: string;
}

type option = 0 | 1 | 2;


const _fontAtom = atom<option>(0);

export const fontAtom = atom<FontOption>((get) => fontOptions[get(_fontAtom)]);

export const updateFont = atom<null, [value: option], void>(null, (get, set, update) => {
  const currentId = get(_fontAtom);
  if (currentId == update) return;
  set(_fontAtom, update);
},);