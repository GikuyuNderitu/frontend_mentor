import { Provider, useAtom } from 'jotai'
import Header from './Header'
import { fontAtom } from './useFont'


function App() {
  const [font] = useAtom(fontAtom);
  return (
    <Provider>
      <div className={`mx-6 mt-6 tablet:mx-10 ${font.className}`}>
        <Header />
      </div>
    </Provider>
  )
}

export default App
