import React from 'react';
import {Card} from "@/components/ui/card";
import {CheckCircle} from "lucide-react";

import {isTimestampPast} from "@/utils/common";
import {PredictionType} from "@/features/prediction/types/PredictionType";
import {Separator} from "@/components/ui/separator";

const Result = ({prediction}: { prediction: PredictionType }) => {

  // если result в API == null или дата (timeline) еще не наступила - не рисуем блок
  if (!prediction.result || !isTimestampPast(prediction.timeline)) return null

  return (
    <Card className="p-4 sm:p-6 glassmorphism gap-0">
      <div className="flex items-center gap-2 text-sm sm:text-base mb-4">
        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary"/>
        <span className="font-semibold sm:text-lg">Результат матча</span>
      </div>
      <div
        className='text-lg font-medium rounded-lg p-3 flex flex-col gap-1 items-center bg-gray-200 dark:bg-[rgba(255,255,255,.1)]'>
        <div>{prediction.home} {prediction.result.home_score} : {prediction.result.away_score} {prediction.away}</div>
        <div className="text-sm text-muted-foreground font-normal">Источник результата: {prediction.result.source}</div>
      </div>

      <Separator className="my-4"/>

      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-sm sm:text-base">Прогноз до матча</h3>
        <div className="flex justify-between text-[14px]">
          <div>Прогноз Оракула</div>
          <div
            className="font-bold">{prediction.result.oracul_pick} - {(prediction.result.oracul_pick_prob * 100).toFixed(1)}%
          </div>
        </div>
        <div className="flex justify-between text-[14px]">
          <div>Вероятность букмекера</div>
          <div className="font-bold">{(prediction.result.book_prob * 100).toFixed(1)}%</div>
        </div>
        <div className="flex justify-between text-[14px]">
          <div>Фактический исход</div>
          <div className="badge-signal !text-sm !normal-case">{prediction.result.actual_outcome}</div>
        </div>
      </div>

      <Separator className="my-4"/>

      <div>
        <h3 className="font-semibold  text-sm sm:text-base mb-3 ">Оценка прогноза</h3>
        <div className="flex gap-3">

          <div
            className='flex flex-col gap-2 w-full rounded-lg p-3 items-center bg-gray-200 dark:bg-[rgba(255,255,255,.1)]'>
            <div className="text-muted-foregrounde text-[14px]">Прогноз зашел?</div>
            <div className="text-chart-4 font-bold text-lg">
              {
                prediction.result.hit ? "Да" : "Нет"
              }
            </div>
          </div>
          <div
            className='flex flex-col gap-2 w-full rounded-lg p-3 items-center bg-gray-200 dark:bg-[rgba(255,255,255,.1)]'>
            <div className="text-muted-foregrounde text-[14px]">ROI по матчу</div>
            <div className="text-chart-4 font-bold text-lg">
              {prediction.result.roi_pct && (prediction.result.roi_pct).toFixed(0)}%
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Result;



