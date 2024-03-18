import Playground from "./Playground";
import ProgressBar from "./ProgressBar";

export default function Container() {
  return (
    <div className="h-[100%]">
      <div className="flex justify-center items-center h-[20%]">
        <ProgressBar />
      </div>
      <div className="h-[80%] flex justify-center items-center">
        <Playground />
      </div>
    </div>
  );
}
