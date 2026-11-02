import React from 'react';
import {Brain, CircleCheckBig, ExternalLink, Target} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {Progress} from "@/components/ui/progress";
import {Separator} from "@/components/ui/separator";
import {PredictionModel, PredictionType} from "@/features/prediction/types/PredictionType";
import MarketCard from "@/components/pages/PredictionPage/3-analysis/MarketCard";
import Consensus from "@/components/pages/PredictionPage/3-analysis/Consensus";
import MarketAnalysis from "@/components/pages/PredictionPage/3-analysis/MarketAnalysis";

type Props = {
  prediction: PredictionType;
  model: PredictionModel;
}

const TabContent = ({prediction, model}: Props) => {


  let predictionText = ""
  if (model.prediction.toLowerCase() === "home") predictionText = prediction.home;
  if (model.prediction.toLowerCase() === "away") predictionText = prediction.away;
  if (model.prediction.toLowerCase() === "draw") predictionText = "Ничья";


  return (
    <div className="flex-1 outline-none space-y-4 sm:space-y-6">
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-3 sm:p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-3 ">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Brain className="w-4 sm:h-5 sm:w-5 foreground"/>
          </div>
          <div>
            <div className="flex items-center gap-3 ">
              <h3 className="font-medium text-sm sm:text-base">{model.model_title}</h3>
              <Badge>{model.role.toUpperCase()}</Badge>
            </div>

            <div className="flex items-center gap-2 mt-1">

              <span className="text-xs sm:text-sm text-muted-foreground">Роль: <span
                className="font-medium">{model.role.toUpperCase()}</span> {model.role === 'risk' && " - риск-анализ и итоговый отчёт"}</span>
            </div>
          </div>
        </div>
        <div className="text-left sm:text-right ">
          <div className="flex items-center gap-2 ">
            <div className="text-xs sm:text-sm text-muted-foreground">Историческая точность</div>
            <div className="text-xs sm:text-sm text-muted-foreground">{model.historic_precision}%</div>
          </div>

          {/*<div className="flex items-center gap-2">*/}
          {/*<Progress className="w-16 sm:w-20 h-2" value={model.historic_precision}/>*/}
          {/*<span className="text-xs sm:text-sm font-medium">{model.historic_precision}%</span>*/}
          {/*</div>*/}

          <div className="flex items-center gap-2 mt-1">
            <Badge className="px-2 py-0.5 font-medium">{predictionText}</Badge>
            <span
              className="text-xs sm:text-sm text-muted-foreground">Уверенность: {Math.round(model.confidence * 100)}%</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-medium mb-3 flex items-center gap-2 text-sm sm:text-base">
          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4"/>
          <span>Источники данных</span>
        </h4>
        <ul className="space-y-2">
          {
            model.data_sources.map((source, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <CircleCheckBig className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mt-0.5 flex-shrink-0"/>
                <span>{source.name}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <Separator/>
      <div>
        <h4 className="font-medium mb-3 flex items-center gap-2 text-sm sm:text-base">
          <Brain className="h-3 w-3 sm:h-4 sm:w-4"/>
          <span>Логика рассуждений</span>
        </h4>
        <ul className="bg-muted/20 p-3 sm:p-4 rounded-lg space-y-3">
          {
            model.reasonigs.factors && model.reasonigs.factors.map((source, i) => {
                const colors = ["primary", "secondary", "accent"]
                const currentColor = colors[i % colors.length]

                return <li key={i} className="flex items-start gap-3">
                  <div
                    className={`w-6 h-6 bg-${currentColor}/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <span className={`text-xs font-medium text-${currentColor}`}>{i + 1}</span>
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-medium mb-1">{source.title}</h5>
                    <div className="text-xs text-muted-foreground leading-relaxed">{source.data}</div>
                    {
                      source.interpretation && (
                        <div className="mt-3 rounded-md bg-muted/50 p-3">
                          {/*<div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-foreground/70 mb-1">*/}
                          {/*  Что показывают данные*/}
                          {/*</div>*/}

                          <div className="text-[14px]  leading-relaxed text-foreground/90">
                            {source.interpretation}
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

        {
          model.reasonigs.market_analysis.length > 0 && (
            <>
              <Separator className="my-4"/>
              <MarketAnalysis model={model}/>
            </>
          )
        }


        {
          model.role === 'risk' && (
            <>
              <Separator className="my-4"/>
              <div>
                <div className="flex items-center gap-3 mb-3 text-foreground">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <h4 className="font-medium text-sm sm:text-base">Детальный анализ</h4>
                </div>
                <div className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{model.detailed_analysis}</div>
              </div>
              <Separator className="my-4"/>

              <div>
                <div className="flex items-center gap-3 mb-3 text-foreground">
                  <svg
                    className="w-5 h-5 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.3 3.9 2.5 17.4A2 2 0 0 0 4.2 20.4h15.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>
                    <path d="M12 9v4"/>
                    <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>

                  <h4 className="font-medium text-sm sm:text-base">Контраргументы</h4>
                </div>

                <div className="text-xs sm:text-sm leading-relaxed">
                  {
                    prediction.counterarguments && (
                      <ul className="pl-4">
                        {
                          prediction.counterarguments.map((contrArg, i) => {
                            return (
                              <li key={i} className="mb-2 list-disc  gap-2">

                                <div className="text-xs sm:text-sm font-medium mb-1">{contrArg.title}</div>
                                <div className="text-xs text-muted-foreground leading-relaxed">{contrArg.description}</div>
                              </li>
                            )
                          })
                        }
                      </ul>
                    )
                  }
                </div>
              </div>

              <Separator className="my-4"/>

              <div>
                <div className="flex items-center gap-3 mb-3 text-foreground">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                  </svg>

                  <h4 className="font-medium text-sm sm:text-base">Полнота данных</h4>
                </div>

                <div className="text-xs sm:text-sm leading-relaxed">
                  {
                    prediction.completeness && (
                      <ul className="">

                        <div className="dark:bg-[#0A0F1A] rounded-lg  border dark:border-gray-800 border-gray-300">

                          <div
                            className="font-medium flex items-center gap-2 dark:text-gray-400 dark:border-gray-800 border-gray-300 border-b p-3 ">
                            <div className="flex items-center gap-1 w-1/4">Роль</div>
                            <div className="flex items-center gap-1 w-1/4">Статус</div>
                            <div className="w-1/2">Примечание</div>
                          </div>

                          {
                            prediction.completeness.map((completenessItem, i, arr) => {

                              const lastItem = arr.length - 1 === i


                              let completenessItemStatus = ""
                              let completenessItemColor = ""

                              if (completenessItem.status === "sufficient") {
                                completenessItemStatus = "Достаточно"
                                completenessItemColor = "text-green-400"
                              }

                              if (completenessItem.status === "partial") {
                                completenessItemStatus = "Частично"
                                completenessItemColor = "text-yellow-400"
                              }

                              let roleToRender = completenessItem.role.toUpperCase()
                              if (roleToRender === "CONTEXT_SQUAD") roleToRender = "CONTEXT"

                              return (
                                <div
                                  className={` ${!lastItem ? "border-b" : ""} dark:border-gray-800 border-gray-300 flex items-center gap-2 p-3`}
                                  key={i}>
                                  <div
                                    className="flex items-center gap-1  w-1/4">{roleToRender}</div>
                                  <div
                                    className={`flex items-center gap-1 w-1/4 ${completenessItemColor}`}>{completenessItemStatus}</div>
                                  {/* todo */}
                                  <div
                                    className="w-1/2">{completenessItem.missing_inputs_detailed.length > 0 && completenessItem.missing_inputs_detailed[0].input}</div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </ul>
                    )
                  }
                </div>
              </div>

              <Separator className="my-4"/>
              <div>
                <h4 className="font-medium mb-3 text-sm sm:text-base">Заключение</h4>
                <div className="text-xs sm:text-sm leading-relaxed">{model.resume}</div>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default TabContent;