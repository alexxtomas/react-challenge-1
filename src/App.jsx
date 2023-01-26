import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './styles/App.css'

export default function App() {
  const { catFact, refreshCatFact, loadingCatFact, errorCatFact } = useCatFact()

  const { catImage, loadingCatImage, errorCatImage } = useCatImage({ fact: catFact })

  if (loadingCatImage || loadingCatFact) return <h1>Loading...</h1>

  if (errorCatImage || errorCatFact) return <h1>Something went wrong, please try again later</h1>

  return (
    <main class='container'>
      <section className='subcontainer'>
        <h2>Fact: {catFact}</h2>
        <img src={catImage} />
      </section>
      <button onClick={refreshCatFact}>New Fact</button>
    </main>
  )
}
