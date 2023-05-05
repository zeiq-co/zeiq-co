import upperFirst from 'lodash/upperFirst';
import Image from 'next/image';
import Link from 'next/link';

const WorkItem = ({ data }) => {
  if (!data.title) {
    return null;
  }

  return (
    <div className="col-lg-4 col-sm-6 d-flex">
      <div className="card mt-5 card-body flex-fill bg-cream border-0">
        <div className="mb-4 pb-3">
          <div className="card  portfolio-card ">
            <Link href={`/work/${data.slug}`}>
              <a className="card-img overflow-hidden rounded-0">
                <Image
                  src={data.heroImage || data.featuredImage}
                  alt={data.title}
                  className="img-fluid"
                  height={1006}
                  width={1218}
                  loading="lazy"
                  objectFit="cover"
                />
              </a>
            </Link>
            <div className="block">
              <h3 className="h4 mb-1">
                <Link href={`/work/${data.slug}`}>
                  <a className="text-dark text-underline">{data.title}</a>
                </Link>
              </h3>
              <p className="font-weight-500 mb-0">
                {upperFirst(data.category)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
