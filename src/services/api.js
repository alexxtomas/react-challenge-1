const FACTS_RANDOM = 'https://catfact.ninja/fact'

export async function getCatFact() {
  try {
    const res = await fetch(FACTS_RANDOM)
    if (!res.ok) {
      throw new Error('Something went wrong')
    }
    const { fact } = await res.json()
    return fact
  } catch (err) {
    return err
  }
}
