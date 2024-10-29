type VotesMap = Map<string, number>;

function addVote(votes: Map<string, number>, candidate: string): void{
    if (votes.has(candidate)){
        votes.set(candidate, votes.get(candidate)! + 1);
    } else {
        votes.set(candidate, 1);
    }
}

function findLeadingCandidate(votes: Map<string, number>): string | string [] {
    let maxVotes = 0;
    const leadingCandidates: string [] = [];

    for (const [candidate, voteCount] of votes.entries()) {
        if (voteCount > maxVotes){
            maxVotes = voteCount;
            leadingCandidates.length = 0;
            leadingCandidates.push(candidate);
        } else if (voteCount === maxVotes){
            leadingCandidates.push(candidate);

        }

    }

    return leadingCandidates.length === 1 ? leadingCandidates [0]: leadingCandidates;
    
}

const votingRecords = ["Alice", "Bob", "Alice", "Bob", "Alice", "Charlie"];
const votes: VotesMap = new Map();

votingRecords.forEach(candidate => addVote(votes, candidate));

const leadingCandidates = findLeadingCandidate(votes);
console.log(leadingCandidates);