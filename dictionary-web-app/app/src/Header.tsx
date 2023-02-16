import { useEffect } from 'react';
import FontSelector from './FontSelector';
import logo from './assets/logo.svg';

export default function Header() {

  return <header className='min-w-full sticky flex justify-between'>
    <img role="decoration" src={logo} />

    <nav className='flex items center'>
      <FontSelector />
      {/* Divider */}
      <span className=' inline-block mx-4 h-8 border border-divider'></span>
      {/* Theme Selector */}
    </nav>
  </header>
}

function useDarkMode() {
  useEffect(() => {

  });
}

