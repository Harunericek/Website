import { useMediaQuery } from "react-responsive";

const ProjectMain = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)"
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return <div></div>;
};

export default ProjectMain;
