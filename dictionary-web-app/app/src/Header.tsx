import { useEffect } from 'react';
import FontSelector from './FontSelector';
import logo from './assets/logo.svg';
import ThemeSelector from './ThemeSelector';

export default function Header() {

  return <header className='min-w-full sticky flex justify-between'>
    <img role="decoration" src={logo} />

    <nav className='flex items-center min-w-[230px] justify-between'>
      <FontSelector />
      {/* Divider */}
      <div className='flex'>

        <span className=' inline-block mx-4 h-8 border border-divider'></span>
        {/* Theme Selector */}
        <ThemeSelector />
      </div>
    </nav>
  </header>
}

function useDarkMode() {
  useEffect(() => {

  });
}

