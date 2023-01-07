
import { Reply } from './Reply'

export interface Comment {
  id: string
  title: string
  content: string
  createdAt: string
  replies: Reply[]
}
