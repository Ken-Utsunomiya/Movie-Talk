
import { Reply } from './Reply'

export interface Comment {
  id: String
  title: String
  content: String
  createdAt: String
  replies: Reply[]
}
