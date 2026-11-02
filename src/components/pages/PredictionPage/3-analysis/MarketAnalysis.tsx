import React from 'react';
import {Brain, Check, X} from "lucide-react";
import {PredictionModel} from "@/features/prediction/types/PredictionType";

type Props = {
  model: PredictionModel;
}

const MarketAnalysis = ({model}: Props) => {

    return (
      <div>
        <h4 className="font-medium mb-3 flex items-center gap-2 text-sm sm:text-base">
          <Brain className="h-3 w-3 sm:h-4 sm:w-4"/>
          <span>Анализ рынков</span>
        </h4>

        <ul className="space-y-3">
          {
            model.reasonigs.market_analysis && model.reasonigs.market_analysis.map((item, i) => {

                return <li
                  key={i}
                  className="px-3 mb-3 p-3 dark:bg-[#131c2e] bg-[rgb(0_0_0/.04)] rounded-lg  border dark:border-gray-800 border-gray-300 flex-col sm:flex-row  flex">
                  <div>
                    <h5 className="text-xs sm:text-sm font-medium mb-2">{item.market_label}</h5>
                    {
                      item.for.length > 0 && (
                        <>
                          <div className="text-sm font-semibold  tracking-wide text-foreground/70 mb-1">
                            За:
                          </div>

                          <ul>
                            {
                              item.for.map((factor, i) => {
                                return (
                                  <li className="flex gap-3" key={i}>
                                    <Check className="text-green-500 size-3.5 mt-0.5 shrink-0 "/>
                                    <div className="text-xs text-muted-foreground leading-relaxed">{factor.text}</div>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </>
                      )
                    }
                    {
                      item.against.length > 0 && (
                        <>
                          <div
                            className="mt-3 text-sm  font-semibold  tracking-wide text-foreground/70 mb-1">
                            Против:
                          </div>

                          <ul>
                            {
                              item.against.map((factor, i) => {
                                return (
                                  <li className="flex gap-3" key={i}>
                                    <X className="text-destructive size-3.5 mt-0.5 shrink-0"/>
                                    <div className="text-xs text-muted-foreground leading-relaxed">{factor.text}</div>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </>
                      )
                    }
                    {
                      item.limitation && (
                        <div className="mt-3 rounded-md ">

                          <div className="text-xs leading-tight text-foreground/70 ">
                            {item.limitation}
                          </div>
                        </div>
                      )
                    }
                    {
                      item.conclusion && (
                        <div className="mt-3 rounded-md bg-muted/50 p-3">
                          <div className="text-[14px]  leading-relaxed text-foreground/90">
                            {item.conclusion}
                          </div>
                        </div>
                      )
                    }
                  </div>
                </li>
              }
            )
          }
        </ul>
      </div>
    )
  }

export default MarketAnalysis;