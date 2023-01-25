import { useEffect, useState } from 'react'
const PREFIX = 'https://cataas.com/cat/says'

export function useCatImage({ fact }) {
  const [catImage, setImage] = useState(null)
  const [loadingCatImage, setLoadingCatImage] = useState(true)
  const [errorCatImage, setErrorCatImage] = useState(false)

  useEffect(() => {
    if (!fact) return
    const firstWorld = fact.split(' ')[0]
    fetch(`${PREFIX}/${firstWorld}`)
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong')
        return res.blob()
      })
      .then((imageBlob) => {
        const imageURL = URL.createObjectURL(imageBlob)
        setImage(imageURL)
        setLoadingCatImage(false)
      })
      .catch(() => setErrorCatImage(true))
  }, [fact])

  return { catImage, loadingCatImage, errorCatImage }
}
