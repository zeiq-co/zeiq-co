import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import { random, upperFirst } from 'lodash';

const bgColors = ['#0a11a8', '#002306', '#c76234'];

const LatestPosts = ({ posts }) => {
  const firstPost = posts[0];
  const otherPosts = posts.slice(1, 4);

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 has-anim fade">
            <div className="section-title text-center mb-4">
              <p className="mb-2">Latest news</p>
              <h2 className="title text-dark">Our Blog Posts</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 has-anim fade">
            <article className="card blog-card blog-card-horizontal border-0 rounded-0">
              <div
                className="card-background"
                style={{ backgroundColor: '#c11c3b' }}
              />

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6">
                  {firstPost.featuredImage && (
                    <Link href={`/posts/${firstPost.slug}`}>
                      <a className="card-image">
                        <Image
                          src={firstPost.featuredImage}
                          alt={firstPost.title}
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
                    <span className="card-tag mb-3">Featured</span>
                    <h3 className="card-title">
                      <Link href={`/posts/${firstPost.slug}`}>
                        <a>{firstPost.title}</a>
                      </Link>
                    </h3>
                    <p className="card-text">Read full story</p>
                    {firstPost.date && (
                      <p className="card-meta mt-3">
                        {dayjs(firstPost.date).format('DD MMMM YYYY')}{' '}
                        <span className="mx-2">—</span> {firstPost.author}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
          {otherPosts.map((post) => {
            const randomId = random(0, bgColors.length - 1);
            const bgColor = bgColors[randomId];
            return (
              <div className="col-lg-4 col-md-6 has-anim fade" key={post.slug}>
                <article className="card blog-card border-0 rounded-0">
                  <div
                    className="card-background"
                    style={{ backgroundColor: bgColor }}
                  />
                  {post.featuredImage && (
                    <Link href={`/posts/${post.slug}`}>
                      <a className="card-image">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          className="card-img rounded-0"
                          width={350}
                          height={350}
                          objectFit="cover"
                        />
                      </a>
                    </Link>
                  )}
                  <div className="card-body p-0 mt-4">
                    <span className="card-tag mb-3">
                      <a href="#">{upperFirst(post.category)}</a>
                    </span>
                    <h4 className="card-title">
                      <Link href={`/posts/${post.slug}`}>
                        <a>{post.title}</a>
                      </Link>
                    </h4>
                    <p className="card-text">Read full story</p>
                    <p className="card-meta mt-3">
                      {dayjs(post.date).format('DD MMMM YYYY')}{' '}
                      <span className="mx-2">—</span> {post.author}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
