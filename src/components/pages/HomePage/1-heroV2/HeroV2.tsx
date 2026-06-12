"use client";

import ReactCountryFlag from "react-country-flag";
import React from "react";
import {PredictionCardType} from "@/features/prediction/types/PredictionCard";
import HeroInner from "@/components/pages/HomePage/1-heroInner/HeroInner";
import {Button} from "@/components/ui/button";
import Link from "next/link";

import countries from "i18n-iso-countries";
import ru from "i18n-iso-countries/langs/ru.json";
import {formatTimeline} from "@/utils/formatDates";
import {useRouter} from "next/navigation";
import {getClosestUpcomingMatch} from "@/utils/common";

countries.registerLocale(ru);

type Props = {
  allPredictions: PredictionCardType[]
}

const HeroV2 = ({allPredictions}: Props) => {

  const router = useRouter();
  const closestMatch = getClosestUpcomingMatch(allPredictions)

  if (!closestMatch)  return null

  return (
    <section className="relative overflow-hidden px-5 sm:px-10 md:pt-[90px] pt-[60px] pb-[0px] dark:bg-[#080b14]  md:pb-[20px]
      before:absolute before:inset-0 before:content-['']
      before:bg-[radial-gradient(ellipse_70%_60%_at_28%_-10%,rgba(59,91,255,0.2)_0%,transparent_60%),radial-gradient(ellipse_40%_45%_at_82%_35%,rgba(232,179,61,0.08)_0%,transparent_70%),radial-gradient(ellipse_35%_30%_at_70%_80%,rgba(56,189,248,0.05)_0%,transparent_70%)]
    ">

      <HeroInner predictionId={closestMatch.id}/>
      <div className="relative max-w-[1180px] mx-auto flex flex-col lg:flex-row sm:gap-[70px] gap-[20px] mb-4">
        {/* LEFT */}
        <div className="flex flex-col flex-1">

          <div
            className="text-[12px] tracking-[5px] uppercase dark:text-amber-500 text-amber-600 font-bold mb-4 text-center lg:text-left">
            Кто поднимет кубок?
          </div>

          <h1
            className=" md:text-[56px] text-center lg:text-left sm:text-[50px] text-[36px] leading-[1.07] font-bold tracking-[-2px] mb-6 dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400  ">
            ИИ точно предсказывает <br/>
            <span
              className="text-black  dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400">каждый матч</span><br/>
            <span
              className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-300">
              ЧМ-2026
            </span>
          </h1>

          {/*знает исход каждого матча*/}

          <p
            className="mt-auto text-[18px] dark:text-slate-300 leading-[1.7] max-w-[520px]  text-muted-foreground text-center lg:text-left mx-auto">
            Четыре нейросети и консенсус разбирают составы, форму и травмы перед каждой игрой —
            от группового этапа до финала. Их точность и ROI <b className="text-primary dark:text-white">открыты в
            реальном времени</b>.
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center flex-1">

          {/* TROPHY */}
          <div className="relative mb-4">
            <div
              className="absolute inset-[-24px] sm:inset-[-46px] rounded-full bg-[radial-gradient(circle,rgba(232,179,61,0.2)_0%,transparent_65%)] animate-pulse"/>

            {/*<svg className="relative drop-shadow-[0_14px_36px_rgba(232,179,61,0.35)] animate-float sm:w-[150px] w-[100px]" width="150"*/}
            {/*     height="178" viewBox="0 0 110 130" fill="none">*/}

            <svg
              className="relative drop-shadow-[0_14px_36px_rgba(232,179,61,0.35)] animate-float sm:w-[150px] w-[100px] sm:h-[178px] h-[119px]"
              viewBox="0 0 110 130" fill="none">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f8e08e"></stop>
                  <stop offset="45%" stopColor="#e8b33d"></stop>
                  <stop offset="100%" stopColor="#b8830f"></stop>
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fdf0c0"></stop>
                  <stop offset="100%" stopColor="#d4920f"></stop>
                </linearGradient>
              </defs>
              <path d="M25 12 H85 C85 38 78 56 66 64 C62 66.5 58.5 68 55 68 C51.5 68 48 66.5 44 64 C32 56 25 38 25 12 Z"
                    fill="url(#g1)"></path>
              <path d="M33 16 C34 36 39 50 47 57 C42 52 36 40 35 16 Z" fill="#fff" opacity=".35"></path>
              <path d="M25 16 C12 16 8 26 12 34 C15 40 21 43 27 42 C24 38 22 32 22 24 L25 24 Z" fill="url(#g1)"></path>
              <path d="M85 16 C98 16 102 26 98 34 C95 40 89 43 83 42 C86 38 88 32 88 24 L85 24 Z"
                    fill="url(#g1)"></path>
              <path d="M50 68 L48 86 H62 L60 68 C58.4 68.4 56.7 68.7 55 68.7 C53.3 68.7 51.6 68.4 50 68 Z"
                    fill="url(#g2)"></path>
              <ellipse cx="55" cy="88" rx="12" ry="4.5" fill="url(#g1)"></ellipse>
              <path d="M38 96 H72 L76 110 H34 Z" fill="url(#g2)"></path>
              <rect x="30" y="110" width="50" height="9" rx="3" fill="url(#g1)"></rect>
              <path d="M55 99 l1.8 3.6 4 .6 -2.9 2.8 .7 4 -3.6-1.9 -3.6 1.9 .7-4 -2.9-2.8 4-.6 Z" fill="#fff"
                    opacity=".85"></path>
            </svg>
          </div>

          <div
            onClick={()=>router.push(`/predictions/${closestMatch.id}`)}
            className="cursor-pointer w-full max-w-[420px] rounded-2xl p-6 dark:bg-white/5 border border-black/10 dark:border-white/10 bg-card backdrop-blur relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400"/>

            <div className="flex justify-between mb-4 ">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                Ближайший матч
              </span>
              <span className="text-[12px] dark:text-cyan-300 text-cyan-500 font-semibold">
                {formatTimeline(closestMatch.timeline)}
              </span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <ReactCountryFlag
                  // countryCode={getCountryCode(closestMatch.home) || ""}
                  countryCode={closestMatch.home_country}
                  svg
                  style={{width: "24px", height: "24px"}}
                />

                <span className="font-bold text-card-foreground">
                  {closestMatch.home}

                </span>
              </div>

              <span className="text-xs text-slate-500 font-bold">VS</span>

              <div className="flex items-center gap-2">
                <span className="font-bold text-card-foreground">
                  {closestMatch.away}
                </span>
                <ReactCountryFlag
                  // countryCode={getCountryCode(closestMatch.away) || ""}
                  countryCode={closestMatch.away_country}
                  svg
                  style={{width: "24px", height: "24px"}}
                />
              </div>
            </div>

            <div className="flex justify-between text-sm text-slate-400 mb-2">
              {/*<span>Консенсус ИИ · Победа: {closestMatch.selection || ""} </span>*/}
              <span>Консенсус ИИ</span>
              <b className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">

                {Math.round(closestMatch.consensus * 100)}%
              </b>
            </div>

            <div className="h-[7px] dark:bg-white/5 rounded-full overflow-hidden bg-primary/20 ">
              <div
                style={{
                  width: `${Math.round(closestMatch.consensus * 100)}%`,
                }}
                className={`h-full  bg-gradient-to-r from-blue-500 to-blue-600 shadow-[0_0_12px_rgba(59,91,255,0.5)] `}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[720px] mx-auto text-center pt-6">
        <div className="flex mt-6 text-center">
          {[
            ["104", "матча турнира\nс прогнозами", "text-foreground"],
            ["4+1", "нейросети\nи консенсус", "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"],
            ["LIVE", "точность и ROI\nпо ходу ЧМ", "text-green-400"],
          ].map((s, i) => (
            <div key={i} className="flex-1 relative px-4 sm:px-6 first:pl-0 last:pr-0">
              {i !== 0 && (
                <div className="absolute left-0 top-[10%] bottom-[10%] w-px dark:bg-white/10 bg-black/10"/>
              )}
              <div className={`text-[30px] font-bold tracking-[-0.5px] ${s[2]}`}>
                {s[0]}
              </div>
              <div className="text-[12px] text-slate-500 mt-2 whitespace-pre-line leading-[1.5]">
                {s[1]}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mb-3 mx-auto justify-center mt-12">
          <Button asChild variant="default" className="z-10 cursor-pointer w-[358px] max-w-[100%] px-8 py-4 h-[60px] rounded-xl font-bold text-white text-[16px]
              bg-gradient-to-br from-blue-500 to-blue-600
              shadow-[0_10px_34px_rgba(59,91,255,0.42)] hover:translate-y-[-2px] transition">
            <Link href={`/predictions`}>
              ⚽ Получить прогнозы — бесплатно
            </Link>
          </Button>
        </div>
        <div className="text-[13px] text-slate-500 mb-10 mx-auto">
          <b className="text-green-400 font-semibold">Бесплатно весь турнир</b> · без карты · регистрация за 30 секунд
        </div>
      </div>
    </section>
  )
}

export default HeroV2;