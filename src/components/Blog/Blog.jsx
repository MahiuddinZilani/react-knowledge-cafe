// import PropTypes from 'prop-types'; // ES6
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    const { id, cover, title, author, authorImg, postedDate, readingTime, hashTags } = blog;
    return (
        <div className='my-4'>
            <img className='max-w-xl rounded-lg' src={cover} alt="" />
            <div className='flex justify-between my-4'>
                <div className='flex items-center gap-4'>
                    <img className='w-16 h-16 rounded-full object-cover' src={authorImg} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <h4>{readingTime} min read</h4>
            </div>
            <h1 className='text-5xl'>{title}</h1>
            {
                hashTags.map((tag, idx) => <span key={idx}>   #{tag}   </span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;