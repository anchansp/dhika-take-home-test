"use client";
import flipArray from "@/components/flipArray.js";
import { sortAsc, sortDesc } from "@/components/sortAscDsc.js";
import countDoubles from "@/components/countDoubles.js";
import removeTotal from "@/components/removesTotal.js";
import removeDominoes from "@/components/removesDominoes.js";

import { useState } from "react";

export default function Home() {
  const [topNumber, setTopNumber] = useState(1);
  const [bottomNumber, setBottomNumber] = useState(1);
  const [cardArray, setCardArray] = useState<any[]>([
    //default value
    [1, 2],
    [1, 1],
    [4, 1],
    [3, 3],
    [6, 1],
  ]);
  const [cardArrayReplica, setCardArrayReplica] = useState<any[]>([
    [1, 2],
    [1, 1],
    [4, 1],
    [3, 3],
    [6, 1],
  ]);
  const [inputNumber, setInputNumber] = useState(2);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCardArray((prev) => [...prev, [topNumber, bottomNumber]]);
    //replica
    setCardArrayReplica((prev) => [...prev, [topNumber, bottomNumber]]);
    return cardArray;
  }

  return (
    <main>
      <h1 className="text-4xl py-6 text-center font-bold">Dominoes</h1>
      <h2 className="text-3xl py-4 text-center">Insert a Domino Card</h2>
      <div className="flex gap-4 justify-center text-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="top">Top Number</label>
          <div className="gap-4">
            <input
              type="number"
              min={1}
              max={6}
              id="top"
              value={topNumber}
              onChange={(e) => {
                setTopNumber(+e.target.value);
              }}
              className="input input-bordered w-full max-w-xs"
            ></input>
          </div>
          {/* break */}
          <label htmlFor="bottom">Bottom Number</label>
          <div className="gap-4">
            <input
              type="number"
              min={1}
              max={6}
              id="bottom"
              value={bottomNumber}
              onChange={(e) => {
                setBottomNumber(+e.target.value);
              }}
              className="input input-bordered w-full max-w-xs"
            ></input>
          </div>
          {/* break */}
          <div className="py-4">
            <button
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      {/* sets */}
      <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-4 bg-secondary/20 rounded-lg w-96">
          <h3 className="text-2xl py-4 text-center">
            Set:{" "}
            {cardArrayReplica.length == 0
              ? "Empty Set"
              : `[${cardArrayReplica.join("], [")}],`}
          </h3>
          <h3 className="text-2xl py-4 text-center">
            Doubles: {countDoubles(cardArrayReplica)}
          </h3>
        </div>
      </div>
      {/* buttons */}
      <div className="flex gap-4 justify-center">
        <div className="py-4">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => {
              const ascSortedArray = sortAsc(cardArrayReplica);
              setCardArrayReplica(ascSortedArray);
              return ascSortedArray;
            }}
          >
            SortAsc
          </button>
        </div>

        <div className="py-4">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => {
              const dscSortedArray = sortDesc(cardArrayReplica);
              setCardArrayReplica(dscSortedArray);
              return dscSortedArray;
            }}
          >
            SortDesc
          </button>
        </div>

        <div className="py-4">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => {
              const flippedArray = flipArray(cardArrayReplica);
              setCardArrayReplica(flippedArray);
              return flippedArray;
            }}
          >
            Flip
          </button>
        </div>

        <div className="py-4">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => {
              const newArray = removeDominoes(cardArrayReplica);
              setCardArrayReplica(newArray);
              return newArray;
            }}
          >
            Remove Dupes
          </button>
        </div>

        <div className="py-4">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => {
              const resetCard = setCardArrayReplica(cardArray);
              return resetCard;
            }}
          >
            Reset
          </button>
        </div>

        <div className="py-4">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => {
              const emptyCard = setCardArray([]);
              setCardArrayReplica([]);
              //Empty everything
              setTopNumber(1);
              setBottomNumber(1);
              return emptyCard;
            }}
          >
            Empty Set
          </button>
        </div>
      </div>

      {/* doubles */}
      <div className="flex justify-center text-center">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const newArray = removeTotal(cardArrayReplica, inputNumber);
            setCardArrayReplica(newArray);
            return newArray;
          }}
        >
          <label htmlFor="input">Input Number</label>
          <div className="gap-4">
            <input
              type="number"
              min={2}
              max={12}
              id="input"
              value={inputNumber}
              onChange={(e) => {
                setInputNumber(+e.target.value);
              }}
              className="input input-bordered w-full max-w-xs"
            ></input>
          </div>
          {/* break */}
          <div className="py-4">
            <button
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              Remove
            </button>
          </div>
        </form>
      </div>

      {/* card */}
      <div className="flex gap-4 px-4 py-4 justify-center">
        {cardArrayReplica.map((item, index) => {
          return (
            <div
              className="flex flex-col card bg-primary/20 rounded-box gap-4 px-4"
              key={index}
            >
              <div className="card grid h-20 place-items-center py-4">
                {item[0]}
              </div>
              <div className="divider"></div>
              <div className="card grid h-20 place-items-center py-4">
                {item[1]}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
