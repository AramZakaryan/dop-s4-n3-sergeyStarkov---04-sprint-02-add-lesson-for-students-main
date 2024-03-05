import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { selectorAppStatus } from './app-selectors.ts'
import { useAppSelector } from './store.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'

export const App = () => {

  const RequestStatus = useAppSelector(selectorAppStatus)

  return (
    <div>
      {RequestStatus === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
