import {getTodayUTCBounds} from "@/utils/formatDates";

export const dynamic = 'force-dynamic'

import HomePage from "@/components/pages/HomePage/HomePage";
import {getMatches} from "@/features/prediction/actions/getMatches";


export default async function Home() {

  const predictions = await getMatches("page=1&size=4")
  const predictionsToday = await getMatches(`timeFrom=${getTodayUTCBounds().start}&timeTo=${getTodayUTCBounds().end}&competition=%D0%A7%D0%9C%202026`)

  if (predictions?.error ) {
    const errorMsg = predictions?.error || 'Неизвестная ошибка'
    throw new Error(errorMsg)
  }

  return <HomePage predictions={predictions.data} predictionsToday={predictionsToday.data} />
}
