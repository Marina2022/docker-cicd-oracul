import React from 'react';
import FindOutYourFuture from "@/components/pages/HomePage/1-hero/FindOutYourFuture";
import InnerRealTimePrediction from './InnerRealTimePrediction';
import {PredictionCardType} from "@/features/prediction/types/PredictionCard";
import InnerFindOutYourFuture from "@/components/pages/HomePage/1-heroInner/InnerFindOutYourFuture";

type Props = {
  predictionId: number
}

const HeroInner = ({predictionId}: Props) => {
  return (
    <section className="pt-0 pb-6 flex items-center relative text-center">

    <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div
        className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-2000">
      </div>

      <div className="container pt-10">
        <InnerFindOutYourFuture predictionId={predictionId}/>
      </div>
    </section>
  );
};

export default HeroInner;