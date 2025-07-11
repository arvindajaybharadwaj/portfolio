import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ imgUrl, title, desc, githubUrl }) => {
  const handleClick = () => {
    window.open(githubUrl, "_blank");
  };

  return (
    <div className="project-card-container">
      <div className="card-image-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="card-title-container">{title}</div>
      <div className="card-desc-container">{desc}</div>
      <div className="card-link-container">
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faGithub} />
          Github
        </button>
      </div>
    </div>
  );
};

export default Card;
