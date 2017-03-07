import { Point } from './point';

export class VotingRound {
  votes : { [ id: string ] : Point } = {}; 
  storyUrl? : string;
  storyId? : string; 
}
