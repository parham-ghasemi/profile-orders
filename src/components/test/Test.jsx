import Card from "./card/Card";
import "./Test.scss";

const Test = () => {
  const testArr = new Array(4).fill("");

  return (
    <div className="test">
      <div className="test__cards-container">
        {testArr.map((_, index) => (
          <Card key={`card-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Test;
