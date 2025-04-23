export interface User {
  avatar: string;
  id: string;
  name: string;
}

export interface Room {
  authorId: string;
  closedAt?: string; // parsable to Date
  createdAt: string; // parsable to Date
  title: string;
}

export interface Question {
  author: {
    avatar: string;
    name: string;
  };
  content: string;
  id: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeId: string | undefined;
  likesCount: number;
}

export type FirebaseQuestions = Record<
  string,
  {
    author: {
      avatar: string;
      name: string;
    };
    content: string;
    id: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;
