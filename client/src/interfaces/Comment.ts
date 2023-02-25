import { ReplyType } from "./ReplyType"

export interface Comment {
  id: string
  title: string
  uid: string
  content: string
  createdAt: string
  replies: ReplyType[]
}
