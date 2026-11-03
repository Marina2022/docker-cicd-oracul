import React from 'react';
import PredictionPieChart from "@/components/pages/PredictionPage/4-charts/pie-chart/PredictionPieChart";
import ComparePredictions from "@/components/pages/PredictionPage/4-charts/compare-predictions/ComparePredictions";
import BarChartBlock from "@/components/pages/PredictionPage/4-charts/bar-chart/BarChartBlock";
import Result from "@/components/pages/PredictionPage/4-charts/result/Result";
import {PredictionType} from "@/features/prediction/types/PredictionType";


const ChartsAll = ({prediction}: { prediction: PredictionType }) => {

  console.log("prediction.result = ", prediction.result)

  return (
    <div className="space-y-4 sm:space-y-6">
      <PredictionPieChart voting={prediction.voiting}/>
      <ComparePredictions prediction={prediction}/>
      <BarChartBlock models={prediction.models}/>

      {
        prediction.result && (
          <div className="hidden lg:block">
            <Result prediction={prediction}/>
          </div>
        )
      }

    </div>
  );
};

export default ChartsAll;