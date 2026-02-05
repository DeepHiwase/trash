export const NameList = () => {
  const names = ["Bruce", "Clark", "Diana"];

  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

  return <div>{nameList}</div>;
};
