import {getTodayUTCBounds} from "@/utils/formatDates";

export const dynamic = 'force-dynamic'

import HomePage from "@/components/pages/HomePage/HomePage";
import {getMatches} from "@/features/prediction/actions/getMatches";


export default async function Home() {

  // const predictions = await getMatches("page=1&size=4")
  // const allPredictions = await getMatches("")

  const[predictions, allPredictions] = await Promise.all([await getMatches("page=1&size=4"),  await getMatches("")])

  if (predictions?.error || allPredictions?.error ) {
    const errorMsg = predictions?.error || allPredictions?.error || 'Неизвестная ошибка'
    throw new Error(errorMsg)
  }

  return <HomePage predictions={predictions.data} allPredictions={allPredictions.data} />
}
