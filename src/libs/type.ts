export type Quest = {
  id: string;
  title: string;
  description: string;
  price: number;
  difficulty: Difficulty;
  num_participate: number;
  num_clear: number;
};

enum Difficulty {
  Easy = "Easy",
  Normal = "Normal",
  Hard = "Hard",
}
