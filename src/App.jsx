import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export default function App() {
  const { catFact, refreshCatFact, loadingCatFact, errorCatFact } = useCatFact()

  const { catImage, loadingCatImage, errorCatImage } = useCatImage({ fact: catFact })

  if (loadingCatImage || loadingCatFact) return <h1>Loading...</h1>

  if (errorCatImage || errorCatFact) return <h1>Something went wrong, please try again later</h1>

  return (
    <div>
      <h2>Fact: {catFact}</h2>
      <h2>Image from first world of fact</h2>
      <img src={catImage} />
      <button onClick={refreshCatFact}>New Fact</button>
    </div>
  )
}
