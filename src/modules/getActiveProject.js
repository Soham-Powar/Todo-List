import allProjectsArray from "../index";

export default function getActiveProject() {
  return allProjectsArray.find((project) => project.active === true);
}
