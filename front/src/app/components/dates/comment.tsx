import type { CommentSchema } from "@/app/schemas/comment";

type Props = {
  data: CommentSchema;
};
export const Comment: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h4 className="font-bold">{data.author}:</h4>
      <p className="italic">{data.comment}</p>
    </div>
  );
};
