import { FC, ReactElement } from "react";
import { Baloon } from "./baloon";

export const Background: FC = (): ReactElement => {
  const totalBalloons = 5;
  const balloonSize = 50;
  const spreadDistance = 100;

  return (
    <div>
      {Array(totalBalloons)
        .fill("")
        .map((_, index) => (
          <div
            className="absolute z-0"
            style={{
              top: `${
                Math.cos((index / (totalBalloons - 1)) * Math.PI) *
                spreadDistance
              }px`,
              left: `${
                Math.sin((index / (totalBalloons - 1)) * Math.PI) *
                spreadDistance
              }px`,
              margin: "6px",
            }}
            key={index}
          >
            <Baloon fill="#FF1493" />
          </div>
        ))}
      {Array(totalBalloons)
        .fill("")
        .map((_, index) => (
          <div
            className="absolute z-0"
            style={{
              bottom: `${
                Math.cos((index / (totalBalloons - 1)) * Math.PI) *
                spreadDistance
              }px`,
              left: `${
                Math.sin((index / (totalBalloons - 1)) * Math.PI) *
                spreadDistance
              }px`,
              margin: "6px",
            }}
            key={index}
          >
            <Baloon fill="#AFEEEE" />
          </div>
        ))}
      {Array(totalBalloons)
        .fill("")
        .map((_, index) => (
          <div
            className="absolute z-0"
            style={{
              bottom: `${
                Math.cos((index / (totalBalloons - 1)) * Math.PI) *
                spreadDistance
              }px`,
              right: `${
                Math.sin((index / (totalBalloons - 1)) * Math.PI) *
                spreadDistance
              }px`,
              margin: "6px",
            }}
            key={index}
          >
            <Baloon fill="#EE82EE" />
          </div>
        ))}
      {Array(totalBalloons)
        .fill("")
        .map((_, index) => (
          <div
            className="absolute z-0"
            style={{
              top: `${
                Math.cos((index / (totalBalloons - 1)) * Math.PI) *
                  spreadDistance +
                4
              }px`,
              right: `${
                Math.sin((index / (totalBalloons - 1)) * Math.PI) *
                spreadDistance
              }px`,
              margin: "6px",
            }}
            key={index}
          >
            <Baloon fill="#1E90FF" />
          </div>
        ))}
    </div>
  );
};
