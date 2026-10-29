type PredictionQuote = {
  selection: string,
  odds: number
}

export type PredictionContreArg = {
  title: string,
  description: string,
}

type MissingInputDetailed = {
  input: string;
  description: string;
  weight: number;
}

export type CompletenessItem = {
  role: string;
  status: "sufficient" | "partial";
  data_quality: number;
  missing_inputs_detailed: MissingInputDetailed[];
}

export type MarketSignal = {
  market_type: string;
  line: number;
  selection: string;
  model_prob: number;
  market_prob: number;
  odds: number;
  edge: number;
  oracul_score: number;
  is_signal: boolean;
  line_label: string;
  "market_label": string;
};

export type ConsensusMainCandidate = {
  market_type: string;
  line: number;
  selection: string;
  market_label: string;
  line_label: string;
  model_prob: number;
  market_prob: number;
  odds: number;
  edge: number;
  is_signal: boolean;
  explanation: {
    consensus_factors: Factor[]
  } | null
};

export type PredictionType = {
  consensus_main_candidate: ConsensusMainCandidate;
  consensus_candidates: ConsensusMainCandidate[];
  markets: MarketSignal[];
  completeness: null | CompletenessItem[];
  counterarguments: null | PredictionContreArg[];
  id: number;
  home: string;
  away: string;
  category: string;
  timeline: number;
  consensus: Consensus;
  models: PredictionModel[];
  participantsNumber: number;
  voiting: PredictionVoting[];
  comments: PredictionCommentType[];
  result?: {
    home_score: number;
    away_score: number;
    won: string;
    source: string;
    oracul_pick: string;
    actual_outcome: string;
    oracul_pick_prob: number;
    book_prob: number;
    roi_pct: number;
    hit: boolean;

  };
};


type Consensus = {
  p_home: number;
  p_away: number;
  p_draw: number;
  p_ai_selected: number;
  oracul_score: number;
  p_book: number;
};


export type PredictionModel = {
  role: string;
  model_title: string;
  confidence: number;
  prediction: string;
  reasonigs: Reasonings;
  detailed_analysis: string;
  historic_precision: number;
  predictions_number: number;
  data_sources: DataSource[];
  resume: string;
  quotes: PredictionQuote[];
};

type Reasonings = {
  factors: Factor[];
  data_gaps: string[];
};

type Factor = {
  title: string;
  text: string;
};

type DataSource = {
  name: string;
};

export type PredictionVoting = {
  lable: string;
  percent: number;
  peopleNumber: number;
};

export type PredictionCommentType = {
  sendingTime: string;
  sender: Sender;
  message: string;
  likes: number;
};

type Sender = {
  name: string;
  level: number;
  avatar: string | null;
};
