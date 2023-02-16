import { fontAtom, fontOptions, updateFont } from './useFont';
import arrowDown from './assets/icon-arrow-down.svg';
import { useAtom } from 'jotai';
import { useState } from 'react';

export default function FontSelector() {
  const [font] = useAtom(fontAtom);
  const [_, setFont] = useAtom(updateFont)
  const [isOpen, setIsOpen] = useState(false);

  return <div className='relative w-full'>
    <button className='flex justify-between items-center w-full' onClick={() => setIsOpen(!isOpen)} aria-label='Select a new font'>
      <span className={`mr-4 text-primary-text font-bold ${font.className}`}>{font.label}</span><img className='inline' src={arrowDown} role="decoration" />
    </button>
    <menu className={`py-6 w-48 absolute rounded-2xl shadow-lg dark:shadow-accent-text top-full tablet:-left-[70%] ${isOpen ? 'block' : 'hidden'}`}>
      {fontOptions.map((option, idx) => (
        <li key={idx} className={`${option.className} text-lg text-left  font-bold hover:text-accent-text`}>
          <button className='text-primary-text outline-2 outline-offset-1 text-left w-full px-6 hover:outline' onClick={() => { setFont(idx as 0 | 1 | 2); setIsOpen(false) }}>
            {option.label}
          </button>
        </li>
      ))}
    </menu>
  </div>
}

// function openFontMenu() {

// }