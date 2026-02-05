export const Greeting = ({ message = "Hello", name = "Guest" }) => {
  return (
    <h2>
      {message}, {name}
    </h2>
  );
};
