export type ReelItem = {
  id?: string;
  category: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  videoFile?: string; 
};

export const reelsData: ReelItem[] = [];
