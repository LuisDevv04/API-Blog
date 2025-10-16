import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../types/post";
import { postsApi } from "../api/postsApi";
import { FaHome } from "react-icons/fa";
import { Button } from "../components/Button";

export function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const res = await postsApi.getById(Number(id));
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <article>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
      <Button
        onClick={() => navigate("/")}
        icon={<FaHome />}
        iconPosition="left"
      >
        Back to Home
      </Button>
    </article>
  );
}

export default PostDetail;
