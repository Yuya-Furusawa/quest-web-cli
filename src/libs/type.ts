export type Quest = {
  id: string;
  title: string;
  description: string;
  challenges: Challenge[];
};

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
