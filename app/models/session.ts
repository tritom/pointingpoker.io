import { Role } from './role';
import { User } from './user';
import { PointScheme } from './point-scheme';
import { SessionState } from './session-state';
import { VotingRound } from './voting-round';

export class Session {
  sessionId: string;
  state: SessionState = SessionState.PreVoteOptions;
  currentUser: User;
  users: User[];
  pointScheme : PointScheme;
  votingRound?: VotingRound;
}
