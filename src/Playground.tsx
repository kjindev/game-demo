import "./animation.css";

export default function Playground() {
  const randomNum = Math.floor(Math.random() * 3);

  const coord = [
    [
      { top: "20%", left: "20%" },
      { top: "30%", left: "80%" },
      { top: "60%", left: "50%" },
      { top: "90%", left: "90%" },
    ],
    [
      { top: "0%", left: "90%" },
      { top: "30%", left: "40%" },
      { top: "50%", left: "80%" },
      { top: "70%", left: "20%" },
    ],
    [
      { top: "25%", left: "60%" },
      { top: "0%", left: "50%" },
      { top: "80%", left: "80%" },
      { top: "50%", left: "20%" },
    ],
  ];

  const size = generateUniqueRandomArray();

  function generateUniqueRandomArray() {
    const arr: number[] = [];
    const length = 4;
    const min = 3; // 30을 10으로 나눈 값
    const max = 7; // 70을 10으로 나눈 값

    while (arr.length < length) {
      const randomValue = Math.floor(Math.random() * (max - min + 1)) * 10 + 30;
      if (!arr.includes(randomValue)) {
        arr.push(randomValue);
      }
    }

    return arr;
  }

  const onClick = (e: any) => {
    console.log(e.target.dataset.size);
  };

  return (
    <div style={{ position: "relative" }} className="w-[70%] h-[70%]">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          onClick={onClick}
          key={i}
          data-size={size[i]}
          style={{
            position: "absolute",
            top: coord[randomNum][i].top,
            left: coord[randomNum][i].left,
            width: size[i],
            height: size[i],
          }}
          className="fade-in translate-x-[-50%] translate-y-[-50%] bg-blue-200 rounded-full"
        ></div>
      ))}
    </div>
  );
}
