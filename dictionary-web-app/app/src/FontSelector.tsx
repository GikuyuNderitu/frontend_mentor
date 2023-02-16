import { fontAtom, fontOptions, updateFont } from './useFont';
import arrowDown from './assets/icon-arrow-down.svg';
import { useAtom } from 'jotai';
import { useState } from 'react';

export default function FontSelector() {
  const [font] = useAtom(fontAtom);
  const [_, setFont] = useAtom(updateFont)
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen)

  return <>
    <button onClick={() => setIsOpen(!isOpen)} className="relative" aria-label='Select a new font'>
      <span className={`mr-4 font-bold ${font.className}`}>{font.label}</span><img className='inline' src={arrowDown} role="decoration" />
      <menu className={`py-6 w-48 absolute rounded-2xl shadow-md -left-full ${isOpen ? 'block' : 'hidden'}`}>
        {fontOptions.map((option, idx) => (
          <li key={idx} className={`${option.className} text-lg text-left  font-bold hover:text-accent-text`}>
            <button className=' outline-2 outline-offset-1 text-left w-full px-6 hover:outline' onClick={() => setFont(idx as 0 | 1 | 2)}>
              {option.label}
            </button>
          </li>
        ))}
      </menu>
    </button>
  </>
}

// function openFontMenu() {

// }