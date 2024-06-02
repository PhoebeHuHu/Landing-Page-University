

export const Posts = ({ currentPosts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <ul className="list-group">
            {currentPosts.length > 0 && currentPosts.map(post => (
                <li className="list-group-item" key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}
