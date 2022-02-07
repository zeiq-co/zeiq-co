import fs from 'fs';
import matter from 'gray-matter';

export const getPathsFromDir = (directory) => {
  const files = fs.readdirSync(directory);
  return files.map((fileName) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));
};

export const getMdxFromDir = (directory) => {
  const files = fs.readdirSync(directory);

  const result = [];
  files.forEach((fileName) => {
    if (fileName.includes('mdx')) {
      const slug = fileName.replace('.mdx', '');
      const readFile = fs.readFileSync(`${directory}/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);

      result.push({
        slug,
        ...frontmatter,
      });
    }
  });
  return result;
};

export const getSingleMdx = (path) => {
  const fileName = fs.readFileSync(path, 'utf-8');
  return matter(fileName);
};
