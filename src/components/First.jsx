import "./first.css";

function First() {
  return (
    <div className="first">
      {/* Left part */}
      <div className="left">
        <div className="description">
          <h2 className="desTitle">Hello There,</h2>
          <p className="desPar">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            vero eligendi. Quo aspernatur, enim reiciendis eius labore cumque.
            Quo consectetur dolor perspiciatis, reprehenderit voluptatem
            quisquam omnis praesentium animi amet, unde officiis distinctio
            totam placeat temporibus fuga voluptas! Id facere dolores modi rerum
            sit cupiditate, hic inventore, nam nihil a debitis.
          </p>
        </div>
      </div>

      {/* Right Part */}
      <div className="right">
        <div className="img">
          <img src="https://i.imgur.com/WW7r0p1.jpg" alt="Sayf's Pic" />
        </div>
      </div>

      {/* Social */}
      <div className="social">
        <span className="icon">FB</span>
        <span className="icon">Insta</span>
      </div>
    </div>
  );
}

export default First;
