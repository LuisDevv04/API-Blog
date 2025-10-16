import { Link } from "react-router-dom";
import { Button } from "./Button";
import type { Post } from "../types/post";
import styles from "./PostCard.module.css";
import { FaArrowRight } from "react-icons/fa";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article>
      <h2 className={styles.title}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p className={styles.body}>
        {post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body}
      </p>
      <div className={styles.footer}>
        <Button
          to={`/posts/${post.id}`}
          icon={<FaArrowRight />}
          iconPosition="right"
        >
          Read more
        </Button>
      </div>
    </article>
  );
}
