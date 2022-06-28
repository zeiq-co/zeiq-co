import { upperFirst } from 'lodash';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const CardBg = styled.div`
  background-color: ${(props) => props.bgColor};
`;

const PostItem = ({ post, bgColor }) => {
  if (!post.title) {
    return null;
  }

  return (
    <div className="col-lg-12">
      <article className="card blog-card blog-card-horizontal border-0 rounded-0 has-anim">
        <CardBg className="card-background" bgColor={bgColor} />
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            {post.featuredImage && (
              <Link href={`/posts/${post.slug}`}>
                <a className="card-image">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    className="card-img rounded-0"
                    width={610}
                    height={460}
                  />
                </a>
              </Link>
            )}
          </div>
          <div className="col-lg-6 mt-4 mt-sm-5 mt-lg-0">
            <div className="card-body p-0 p-lg-4">
              <span className="card-tag mb-3">
                <a href="#">{upperFirst(post.category)}</a>
              </span>
              <h3 className="card-title">
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h3>
              <p className="card-text">Read full story</p>
              {post && post.date && (
                <p className="card-meta mt-3">
                  {dayjs(post.date).format('DD MM YYYY')}{' '}
                  <span className="mx-2">—</span> {post.author}
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostItem;
