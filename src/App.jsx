import { useEffect, useState } from 'react'
const FACTS_RANDOM = 'https://catfact.ninja/fact'
const IMAGE_RANDOM = 'https://cataas.com/cat/says'

export default function App() {
  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')
  useEffect(() => {
    fetch(FACTS_RANDOM)
      .then((res) => res.json())
      .then(({ fact }) => {
        const newWorldFact = fact.split(' ')[0]
        setFact(fact)
        fetch(`${IMAGE_RANDOM}/${newWorldFact}`)
          .then((res) => res.blob())
          .then((blob) => {
            const imageURL = URL.createObjectURL(blob)
            setImage(imageURL)
          })
      })
  }, [])

  return (
    <div>
      <h2>Fact: {fact}</h2>
      <h2>Image from first world of fact</h2>
      <img src={image} />
    </div>
  )
}
