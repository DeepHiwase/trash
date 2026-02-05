import React from "react";

export const Card = () => {
  return (
    <div id="container">
      <h2>Welcome</h2>
      <p>
        This is a <span id="highlight">paragraph</span> with text
      </p>
      <button>Click me</button>
    </div>
  );
};

export const CardWithoutJSX = () => {
  return React.createElement(
    "div",
    { id: "container" },
    React.createElement("h1", null, "Welcome"),
    React.createElement(
      "p",
      null,
      "This is a ",
      React.createElement("span", { id: "container" }, "paragraph"),
      " with text"
    ),
    React.createElement("button", null, "Click me")
  );
};
