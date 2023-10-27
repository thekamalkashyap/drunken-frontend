import Left from "./Left";
import Right from "./Right";

export default () => {
  return (
    <div className="flex flex-col lg:flex-row px-8 md:px-16">
      <Left/>
      <Right />
    </div>
  );
};
