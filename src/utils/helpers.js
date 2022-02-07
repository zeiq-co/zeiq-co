import fs from 'fs';
import matter from 'gray-matter';

export const getMdxFromDir = (directory) => {
  const files = fs.readdirSync(directory);

  return files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const readFile = fs.readFileSync(`${directory}/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      ...frontmatter,
    };
  });
};
