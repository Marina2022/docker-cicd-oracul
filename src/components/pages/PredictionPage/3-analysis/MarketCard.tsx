import React from 'react';
import {MarketSignal} from "@/features/prediction/types/PredictionType";

type Props = {
  market: MarketSignal
}

const MarketCard = ({market}: Props) => {
  return (
    <li
      className="px-3 mb-3 dark:bg-[#131c2e] bg-[rgb(0_0_0/.04)] rounded-lg  border dark:border-gray-800 border-gray-300 flex-col sm:flex-row  flex">
      <div className="flex sm:flex-col gap-3 sm:mb-2 sm:w-2/5 items-start py-3 justify-between sm:justify-start ">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <p className="text-md font-semibold ">{market.market_label}</p>
            <p className="text-sm text-gray-400">{market.line_label}</p>
          </div>
        </div>
        <div className="text-rightf flex items-center gap-3 ">
          {
            market.line && (
              <div className="text-sm badge-grey-border"><span
                className="muted">Линия</span> {market.line}</div>
            )
          }
          <div className="text-xs font-bold badge-grey-border">Коэф. {market.odds}</div>
        </div>
      </div>
      <div
        className="flex justify-between pb-3 sm:py-3 sm:px-4  text-sm border-t pt-3  sm:border-t-0 sm:border-l dark:border-gray-800 border-gray-300  flex-1">
        <div className="flex flex-col justify-between items-start">
          <div className=" mb-2">
            <div className="text-sm text-muted-foreground">Модель</div>
            <div className="font-bold">
              {(market.model_prob * 100).toFixed(1)}%
            </div>
          </div>
          <div className="">
            <div className="text-sm text-muted-foreground">Oracul Score</div>
            <div className="font-bold">{market.oracul_score}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between  ">
          <div className="">
            <p className="text-sm text-muted-foreground">Рынок</p>
            <p className="font-bold">{(market.market_prob * 100).toFixed(1)}%</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-between ">
          <div className="">
            <p className="text-sm text-muted-foreground">Edge</p>
            <p className="font-bold text-chart-4">{market.edge > 0 && "+"}{(market.edge * 100).toFixed(1)} п.п.</p>
          </div>
          {
            market.is_signal && (
              <div className="badge-signal">signal</div>
            )
          }
        </div>
      </div>
    </li>
  )
}

export default MarketCard;