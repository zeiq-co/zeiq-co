import { upperFirst } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

const WorkItem = ({ data }) => {
  if (!data.title) {
    return null;
  }

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="mb-4 pb-3 has-anim">
        <div className="card portfolio-card">
          <Link href={`/work/${data.slug}`}>
            <a className="card-img overflow-hidden rounded-0">
              <Image
                src={data.featuredImage}
                alt={data.title}
                className="img-fluid"
                height={500}
                width={400}
              />
            </a>
          </Link>
          <div className="block">
            <h3 className="h4 mb-1">
              <Link href={`/work/${data.slug}`}>
                <a className="text-dark text-underline">{data.title}</a>
              </Link>
            </h3>
            <p className="font-weight-500 mb-0">{upperFirst(data.category)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
