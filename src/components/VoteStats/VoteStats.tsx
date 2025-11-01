import styles from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number; // in percent (e.g. 50 for 50%)
}

function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
  const positiveLabel = `${Math.round(positiveRate)}%`;

  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveLabel}</strong>
      </p>
    </div>
  );
}

export default VoteStats;
