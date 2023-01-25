import { useEffect, useState } from 'react'
import { getCatFact } from '../services/api'
export function useCatFact() {
  const [catFact, setCatFact] = useState(null)
  const [loadingCatFact, setLoadingCatFact] = useState(true)
  const [errorCatFact, setErrorCatFact] = useState(false)

  const refreshCatFact = () => {
    getCatFact()
      .then((fact) => {
        setCatFact(fact)
        setLoadingCatFact(false)
      })
      .catch(() => setErrorCatFact(true))
  }

  useEffect(refreshCatFact, [])

  return { catFact, refreshCatFact, loadingCatFact, errorCatFact }
}
