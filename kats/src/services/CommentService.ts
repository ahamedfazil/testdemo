import { Comment } from '../models/Comment'


// export class CommentService {
//     private url: string = 'https://localhost:44399/api'

//     async getAll(ticketId: number): Promise<Comment[]> {
//         try {
//             if (!ticketId) {
//                 ticketId = 1234;
//             }
//             let b = await fetch(this.url + 'TicketComments',
//                 {
//                     headers: new Headers({ 'Content-Type': 'application/json' }),
//                     method: 'POST',
//                     body: JSON.stringify({
//                         'TicketId': ticketId
//                     })
//                 });
//             let c = await b.json();
//             return c as Comment[];
//         }
//         catch (ex) {
//             console.log(ex);
//             return Error();
//         }
//     }

//     async get(_id: number): Promise<Comment> {
//         return ;
//     }

//     async add(_comment: Comment): Promise<number> {
//         try {
//             let b = await fetch(this.url + 'KATS Request',
//                 {
//                     headers: new Headers({ 'Content-Type': 'application/json' }),
//                     method: 'POST',
//                     body: JSON.stringify({
//                         'UserId': _comment.userId,
//                         'TicketId': _comment.ticketId,
//                         'Content': _comment.content,
//                         'IsPrivate': _comment.isPrivate

//                     })
//                 });
//             let c = await b.json();
//             return c.Id as number;
//         }
//         catch (ex) {
//             console.log(ex);
//             return -1;
//         }
//     }

//     async update(_comment: Comment): Promise<void> {
//         throw new Error();
//     }

//     async delete(_comment: Comment): Promise<void> {
//         throw new Error();
//     }
// }