interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ image, title, description, icon }: FeatureCardProps) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
        <span className="icon">{icon}</span>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default FeatureCard;