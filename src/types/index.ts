export type Data = {
  numFound: number;
  documents: Award[];
  misspelt: boolean;
  spellingCorrection: string;
  didYouMean: boolean;
  didYouMeanString: string;
  facents: null;
};

export type Award = {
  id: string;
  award_type: string;
  award_title: string;
  award_status: string;
  contracting_org: string;
  contracting_org_title: string;
  start_date: string;
  end_date: string;
  lead_investigator_title: string;
  lead_investigator_name: [];
};
