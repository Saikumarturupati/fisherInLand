const About = () => {
  return (
    <div className="main-ponds">
      <div className="main-border">
        <div className="ponds">
          <div>DifferentPonds</div>
          <div>Division</div>
        </div>
        <div className="ponds">
          <div>
            District-Name <input type="text" />
          </div>
          <div>
            Taluka-Name
            <input type="text" />
          </div>
        </div>
        <div className="ponds">
          <div>
            Pond-or-lake-name <input type="text" />
          </div>
          <div>
            Max-water-spread-area
            <input type="text" />
          </div>
        </div>
        <div className="ponds">
          <div>
            min-water-spread
            <input type="text" />
          </div>
          <div>
            avg-water-spread
            <input type="text" />
          </div>
        </div>
        <div className="ponds">
          <div>
            pond-lake-depth-m
            <input type="text" />
          </div>
          <div>
            avg-depth-m
            <input type="text" />
          </div>
        </div>
        <div className="ponds">
          <div>
            months-water-remains <input type="text" />
          </div>
          <div>
            perennial-water-level-8m
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
