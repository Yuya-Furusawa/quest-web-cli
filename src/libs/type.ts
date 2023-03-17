export type Quest = {
  id: string;
  title: string;
  description: string;
  price: number;
  difficulty: Difficulty;
  num_participate: number;
  num_clear: number;
  challenges: Challenge[];
};

enum Difficulty {
  Easy = "Easy",
  Normal = "Normal",
  Hard = "Hard",
}

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  participate_quest: Quest[];
};

export type Challenge = {
  id: string;
  name: string;
  description: string;
  quest_id: string;
};
