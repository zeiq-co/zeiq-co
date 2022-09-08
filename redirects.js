const data = [
  {
    source: '/product/packrs',
    destination: '/work/packrs',
  },
  {
    source: '/product/ada-grow',
    destination: '/work/ada-grow',
  },
  {
    source: '/product/galllery',
    destination: '/work/galllery',
  },
  {
    source: '/product/listme',
    destination: '/work/listme',
  },
  {
    source: `/work/mom${`'s`}-chopped-vegetables`,
    destination: '/work/mom-chopped-vegetables',
  },
  {
    source: `/work/d-&-j-foods`,
    destination: '/work/dj-food',
  },
  {
    source: `/page/e-commerce`,
    destination: '/page/ecommerce',
  },
  {
    source: `/ecommerce`,
    destination: '/page/ecommerce',
  },
  {
    source: `/advertisement/ecommerce`,
    destination: '/page/ecommerce',
  },
];

module.exports = async () => {
  const redirects = data.map((redirect) => {
    if (!redirect) return null;
    return {
      source: `${redirect?.source}`,
      destination: `${redirect?.destination}`,
      permanent: true,
    };
  });
  return redirects;
};
