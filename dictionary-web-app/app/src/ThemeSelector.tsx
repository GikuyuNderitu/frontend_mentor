import Moon from './Icons/Moon';
import useDarkMode from './useDarkMode';

export default function ThemeSelector() {
  const [theme, updateDarkMode] = useDarkMode();
  return <div className="group flex items-center max-w-[80px] justify-between">
    <Switch value={theme != "light"} onChange={() => updateDarkMode()} /> <Moon className='ml-4 fill-transparent stroke-accent-text' />
  </div>
}

function Switch({ value, onChange }: { value: boolean, onChange: React.ChangeEventHandler }) {
  return <label className="relative inline-block w-10 h-5">
    <input checked={value} onChange={onChange} type="checkbox" className="opacity-0 w-0 h-0 peer" />
    <span className="rounded-3xl absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-secondary-text before:transition transition
                     before:content-[''] before:rounded-3xl before:absolute before:h-3 before:w-3 before:left-1 before:bottom-1 before:bg-white
                     peer-checked:bg-accent-text
                     peer-checked:before:translate-x-5"></span>
  </label>
}