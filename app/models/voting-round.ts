import { Point } from './point';

export class VotingRound {
  id : string;
  pointScheme : Point[];
  votes : { [ name: string ] : Point } = {}; 
  storyUrl : string;
  storyId : string; 
}
