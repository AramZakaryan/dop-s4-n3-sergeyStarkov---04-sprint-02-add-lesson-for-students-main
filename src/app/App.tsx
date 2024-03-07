import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { selectAppStatus } from './app-selectors.ts'
import { useAppSelector } from './store.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'


export const App = () => {

  const status = useAppSelector(selectAppStatus)

  return (
    <div>
      {status === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
      <footer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa debitis iusto molestias quod vitae. Aliquid doloribus est fugiat magnam minima neque perspiciatis tenetur vel! Eius id in tempora veritatis.
      </footer>
    </div>
  )
}


