import { ActionButton } from "./ActionButton";

export const Newsletter = () => {
  const handleSubscribe = () => {
    alert("Thank you for subscribing!");
  };
  return (
    <div>
      <h2>Subscribe to Newsletter</h2>
      <ActionButton text={"Subscribe"} onClick={handleSubscribe} />
    </div>
  );
};
