export default function Card({ image, selected, onClick }) {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img src={image} alt="" className="card-face" />
        <img
          src={"/assets/fireship.png"}
          onClick={onClick}
          alt=""
          className="card-back"
        />
      </div>
    </div>
  );
}
