/* eslint-disable import/no-dynamic-require */
import { upperFirst, random } from 'lodash';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

const bgColors = ['#c11c3b', '#139090', '#d59801', '#296e4a'];

const PostItem = ({ post }) => {
  if (!post.title) {
    return null;
  }
  const randomId = random(0, bgColors.length - 1);
  const bgColor = bgColors[randomId];

  return (
    <div className="col-lg-12">
      <article className="card blog-card blog-card-horizontal border-0 rounded-0 has-anim">
        <div className="card-background" style={{ backgroundColor: bgColor }} />

        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
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

              <p className="card-meta mt-3">
                {dayjs(post.date).format('D MMM YYYY')}{' '}
                <span className="mx-2">—</span> {post.author}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostItem;
