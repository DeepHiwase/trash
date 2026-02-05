export const CustomButton = ({ text }) => {
  const name = "Deep";
  const handleClick = (e) => {
    console.log("Clicked element: ", e.target);
    console.log("Click coordinates: ", e.clientX, e.clientY);
    console.log("Which mouse button?", e.button);

    alert(`Thanks for liking!, Hey you ${name} you cuttie ${text}`);
  };

  return <button onClick={handleClick}>Like {text}</button>;
  // return <button onClick={(e) => alert(`Thanks for liking!`)}>Like</button>;
};
