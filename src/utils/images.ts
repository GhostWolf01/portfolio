const projectsImgUrl = "/images/projects";

export function getProjectsImgUrl(name: string): string {
  const url = `${projectsImgUrl}${name}`;
  return url;
}
