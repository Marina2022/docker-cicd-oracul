import React from 'react';
import {Target, Layers, CircleQuestionMark} from "lucide-react";
import {Card} from '@/components/ui/card';
import MarketCard from "@/components/pages/PredictionPage/3-analysis/MarketCard";
import {Separator} from "@/components/ui/separator";
import Consensus from "@/components/pages/PredictionPage/3-analysis/Consensus";
import {ConsensusMainCandidate, PredictionType} from "@/features/prediction/types/PredictionType";

type Props = {
  prediction: PredictionType;
}

const MarketsBlock = ({prediction}: Props) => {
  return (
    <Card className="border p-4 sm:p-6 glassmorphism gap-0">
      {/*Markets Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2 text-foreground ">
            <svg className="w-5 h-5 " stroke="none" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M17 16.25C17 16.6642 16.6642 17 16.25 17L4.75 17C3.7835 17 3 16.2165 3 15.25V3.75C3 3.33579 3.33579 3 3.75 3C4.16421 3 4.5 3.33579 4.5 3.75L4.5 15.25C4.5 15.3881 4.61193 15.5 4.75 15.5L16.25 15.5C16.6642 15.5 17 15.8358 17 16.25Z"
              />
              <path
                d="M12 5.75C12 5.33579 12.3358 5 12.75 5H16.25C16.6642 5 17 5.33579 17 5.75V9.25C17 9.66421 16.6642 10 16.25 10C15.8358 10 15.5 9.66421 15.5 9.25V7.56063L11.5303 11.5303C11.3897 11.671 11.1989 11.75 11 11.75C10.8011 11.75 10.6103 11.671 10.4696 11.5303L9 10.0607L6.78033 12.2803C6.48744 12.5732 6.01256 12.5732 5.71967 12.2803C5.42678 11.9874 5.42678 11.5126 5.71967 11.2197L8.46967 8.46967C8.61032 8.32902 8.80109 8.25 9 8.25C9.19892 8.25 9.38968 8.32902 9.53033 8.46967L11 9.93934L14.4393 6.5H12.75C12.3358 6.5 12 6.16421 12 5.75Z"
              />
            </svg>
            <span className="text-sm sm:text-base font-semibold foreground">Рынки</span>
          </div>
        </div>

        {/*Market Cards */}
        {
          <ul className="flex flex-col gap-3">
            {
              prediction.markets?.length > 0 && prediction.markets.map((market, i) => {

                return <MarketCard market={market} key={i}/>
              })
            }
          </ul>
        }
      </div>

      <Separator className="my-4"/>
      <h4 className="font-medium mb-3 text-sm sm:text-base flex items-center gap-2">
        <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary"/>
        <div>
          Консенсус
        </div>
      </h4>

      <Consensus prediction={prediction} consensus={prediction.consensus_main_candidate}></Consensus>

      {
        prediction.consensus_main_candidate.explanation !== null && (
          <h4 className="font-medium mb-3 mt-3 text-sm sm:text-base flex items-center gap-2">
            <CircleQuestionMark className="h-4 w-4 sm:h-5 sm:w-5 text-primary"/>
            <div>
              Почему?
            </div>
          </h4>
        )
      }


      <ul className="pl-4">
        {
          prediction.consensus_main_candidate.explanation !== null && prediction.consensus_main_candidate.explanation.consensus_factors.map((factor, i) => {
            return (
              <li key={i} className="mb-2 list-disc  gap-2">

                <div className="text-xs sm:text-sm font-medium mb-1">{factor.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{factor.text}</div>
              </li>
            )
          })
        }
      </ul>

      {
        prediction.consensus_candidates.length > 0 && (
          <>
            <Separator className="my-4"/>

            <h4 className="font-medium mb-3 text-sm sm:text-base flex items-center gap-2">
              <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-primary"/>
              <div>
                Вторичные сигналы
              </div>
            </h4>

            {
              prediction.consensus_candidates.map((candidate, i) => {
                return (
                  <Consensus key={i} prediction={prediction} consensus={candidate} isMain={false}  ></Consensus>
                )
              })
            }

          </>
        )
      }
    </Card>
  )
}

export default MarketsBlock;