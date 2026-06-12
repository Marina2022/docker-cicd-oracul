import {getPrediction} from "@/features/prediction/actions/getPrediction";
import PredictionPage from "@/components/pages/PredictionPage/PredictionPage";

export default async function Page({
                                     params,
                                   }: {
  params: Promise<{ id: string }>;
}) {
  const {id} = await params;

  const prediction = await getPrediction(id)

  if (prediction?.error) {
    const errorMsg = prediction?.error || 'Неизвестная ошибка'
    throw new Error(errorMsg)
  }

  return <PredictionPage prediction={prediction}/>


}
