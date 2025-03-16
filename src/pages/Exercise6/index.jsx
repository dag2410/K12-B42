import useFetch from "../../hooks/useFetch";

function Exercise6() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise6;
