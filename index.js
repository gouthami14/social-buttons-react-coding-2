const Button = (props) => {
  //  Write your code here.
  const { className, buttonTxt } = props;
  return <button className={`button ${className}`}>{buttonTxt}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <div className="content-container">
      <h1 className="heading"> Social Buttons</h1>
      <div className="btn-container">
        <Button className="like-button" buttonTxt="Like" />
        <Button className="comment-button" buttonTxt="Comment" />
        <Button className="share-button" buttonTxt="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
