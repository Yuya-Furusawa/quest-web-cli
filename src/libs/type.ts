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

export enum Difficulty {
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
  latitude: number;
  longitude: number;
  stamp_name: string;
  stamp_color_image_url: string;
  stamp_gray_image_url: string;
  flavor_text: string;
};
