function Card({ title, subtitle, img, link }) {
  return (
    <li className="card">
      <img src={img} alt={`img for ${title}`} />
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
      <a href={link} target="_blank"><button className="discography-btn">View Discography</button></a>
    </li>
  );
}

export default Card;