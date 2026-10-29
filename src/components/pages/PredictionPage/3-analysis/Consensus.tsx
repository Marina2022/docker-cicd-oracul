import React from 'react';
import {ConsensusMainCandidate, MarketSignal, PredictionType} from "@/features/prediction/types/PredictionType";

type Props = {
  consensus: ConsensusMainCandidate;
  prediction: PredictionType;
  isMain?: boolean;
}

const Consensus = ({consensus, prediction, isMain=true}: Props) => {
  return (
    <li
      className="px-3 mb-3 dark:bg-[#131c2e] bg-[rgb(0_0_0/.04)] rounded-lg  border dark:border-gray-800 border-gray-300 flex-col md:flex-row  flex  ">
      <div className="flex flex-wrap  gap-3 mb-2 xl:w-1/2 md:w-3/5 items-start py-3 justify-between xl:pr-4 md:pr-3  ">

        <div className="flex items-start gap-5">
          <div className="flex-1">
            {
              isMain && <p className="text-sm text-gray-400">Основной кандидат</p>
            }
            <p className="text-md font-semibold ">{consensus.market_label} {consensus.line_label}</p>
            <p className="text-sm text-gray-400 font-medium">{prediction.home} - {prediction.away}</p>
          </div>
        </div>
        <div className="text-rightf flex items-center gap-3 ">
          <div
            className="text-xs font-bold rounded-lg p-3 flex flex-col gap-1 items-center bg-gray-200 dark:bg-[rgba(255,255,255,.2)]">
            <div className="text-base sm:text-lg text-chart-4">{consensus.odds}</div>
            <div className="font-medium text text-xs">Коэффициент</div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-between gap-3 pb-0 xs:pb-3  sm:py-3 sm:px-4  text-sm border-t pt-3  md:border-t-0 md:border-l dark:border-gray-800 border-gray-300  flex-1">
        <div className="flex flex-col justify-between items-start">
          <div className=" mb-2">
            <div className="text-sm text-muted-foreground">Модель</div>
            <div className="font-bold">
              {(consensus.model_prob * 100).toFixed(1)}%
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[58px] w-unset ">
          <div className="">
            <p className="text-sm text-muted-foreground">Рынок</p>
            <p className="font-bold">{(consensus.market_prob * 100).toFixed(1)}%</p>
          </div>
        </div>
        <div className="hidden xs:flex flex-col gap-3 justify-between ">
          <div className="">
            <p className="text-sm text-muted-foreground">Edge</p>
            <p
              className="font-bold text-chart-4 whitespace-nowrap">{consensus.edge > 0 && "+"}{(consensus.edge * 100).toFixed(1)} п.п.</p>
          </div>

          {
            consensus.is_signal && <div className="badge-signal">signal</div>
          }

        </div>
      </div>
      <div
        className="flex xs:hidden justify-between gap-2 pb-3 sm:py-3 sm:px-4  text-sm flex-1">
        <div className="flex gap-3 justify-between items-end flex-1 w-full">
          <div className="">
            <p className="text-sm text-muted-foreground">Edge</p>
            <p className="font-bold text-chart-4">{(consensus.edge * 100).toFixed(1)} п.п.</p>
          </div>
          <div className="badge-signal">signal</div>
        </div>
      </div>
    </li>
  )
}

export default Consensus;