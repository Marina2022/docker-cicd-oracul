import React from 'react';

import Analysis from "@/components/pages/PredictionPage/3-analysis/Analysis";
import CommentsBlock from '@/components/pages/PredictionPage/3-analysis/comments/CommentsBlock';
import ChartsAll from "@/components/pages/PredictionPage/4-charts/ChartsAll";
import {PredictionType} from "@/features/prediction/types/PredictionType";
import YourPrediction from "@/components/pages/PredictionPage/2-your-prediction/YourPrediction";
import TopBar from "@/components/pages/PredictionPage/1-top-bar/TopBar";
import MarketsBlock from "@/components/pages/PredictionPage/markets/MarketsBlock";
import Result from "@/components/pages/PredictionPage/4-charts/result/Result";

type Props = {
  prediction: PredictionType;
}

const PredictionPage = ({prediction}: Props) => {
  return (
    <div>
      <TopBar prediction={prediction}/>

      <div className="pt-42 sm:pt-36  container pb-4 sm:pb-8">
        <div className="py-4 sm:py-8 space-y-4 sm:space-y-8">
          <YourPrediction prediction={prediction}/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">

            <Analysis prediction={prediction}/>

            <div className="lg:hidden block">
              <ChartsAll prediction={prediction}/>
            </div>

            <MarketsBlock prediction={prediction} />


            <div className="lg:hidden block">
              <Result prediction={prediction}/>
            </div>

            <CommentsBlock comments={prediction.comments}/>
          </div>
          <div className="hidden lg:block">
            <ChartsAll prediction={prediction}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PredictionPage;