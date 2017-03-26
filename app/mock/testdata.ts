import { User } from '../models/user';
import { Role } from '../models/role';
import { Point } from '../models/point'; import { Session } from '../models/session';
import { SessionState } from '../models/session-state';
import { VotingRound } from '../models/voting-round';


const testUsers : User[] = [
  {id: 'u1', name: "tommy", role: Role.Moderator},
  {id: 'u2', name: "bob", role: Role.Voter}
];

const testPoints : Point [] = [
 {id: 1, value: 1, label: "1"},
 {id: 2, value: 2, label: "2"},
 {id: 3, value: 3, label: "3"}
];

const testSession = {
   sessionId: "1234",
   currentUser: testUsers[0],
   users: testUsers,
   state: SessionState.VoteInProgress,
   pointScheme: { id: "1", name: "test", points: testPoints},
   votingRound : new VotingRound()
};
