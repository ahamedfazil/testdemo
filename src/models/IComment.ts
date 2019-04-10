export interface IComment {
  id: number;
  ticketId: number;
  content: string;
  userId: string;
  isPrivate: boolean;
}
