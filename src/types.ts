export interface ErrorConfig {
  id: string;
  name: string;
  desc: string;
  longDesc?: string;
  examples?: string[];
  examplesTitle?: string;
  gradient: string;
  textParams: string;
  image: string;
  showReset?: boolean;
}
