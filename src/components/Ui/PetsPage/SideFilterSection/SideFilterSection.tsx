"use client";
import { useEffect, useState } from "react";

const SideFilterSection = () => {
  const [filter, setFilter] = useState("");
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(500);

  useEffect(() => {
    setFilter(`minPrice=${minPrice}&maxPrice=${maxPrice}`);
  }, [minPrice, maxPrice]);

  return (
    <div className="w-full pr-2 lg:w-1/4 lg:block">
      <div className="p-4 mb-5 bg-white border border-[#f04336]  ">
        <h2 className="text-2xl font-bold dark:text-gray-900">species</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-900 ">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`brand=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Nike"
              />
              <span className="text-lg  ">Nike</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-900 ">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`brand=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2 "
                value="Adidas"
              />
              <span className="text-lg">Adidas</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-gray-200  dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-900">Style</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`style=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Sneakers"
              />
              <span className="text-lg dark:text-gray-900">Sneakers</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`style=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Sports"
              />
              <span className="text-lg dark:text-gray-900">Sports</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`style=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Boots"
              />
              <span className="text-lg dark:text-gray-900">Boots</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-gray-200  dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-900">Model</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`model=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Terrex"
              />
              <span className="text-lg dark:text-gray-900">Terrex</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`model=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Air Zoom"
              />
              <span className="text-lg dark:text-gray-900">Air Zoom</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`model=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Harden Vol. 5"
              />
              <span className="text-lg dark:text-gray-900">Harden Vol. 5</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-gray-200  dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-900">Date</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <div className="flex items-center justify-between">
          <input
            type="date"
            className="w-full px-2 h-8 dark:text-gray-900 border-2 border-cyan-900 rounded-md"
            onChange={(e) => setFilter(`createdAt=${e.target.value}`)}
          />
        </div>
      </div>
      <div className="p-4 mb-5 bg-white border border-gray-200  dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-900">Color</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`color=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="blue"
              />
              <span className="text-lg dark:text-gray-900">Blue</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`color=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="orange"
              />
              <span className="text-lg dark:text-gray-900">Orange</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`color=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="yellow"
              />
              <span className="text-lg dark:text-gray-900">Yellow</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-gray-200  dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-900">Size</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`size=${Number(e.target.value)}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="44"
              />
              <span className="text-lg dark:text-gray-900">44</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`size=${Number(e.target.value)}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="7"
              />
              <span className="text-lg dark:text-gray-900">7</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`size=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="45"
              />
              <span className="text-lg dark:text-gray-900">45</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-gray-200  dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-900">Material</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`material=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Leather"
              />
              <span className="text-lg dark:text-gray-900">Leather</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`material=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Mesh"
              />
              <span className="text-lg dark:text-gray-900">Mesh</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`material=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Synthetic"
              />
              <span className="text-lg dark:text-gray-900">Synthetic</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-gray-200  dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-900">Closure Type</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`closure_Type=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Zipper"
              />
              <span className="text-lg dark:text-gray-900">Zipper</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? setFilter(`closure_Type=${e.target.value}`)
                    : setFilter("")
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Lace-Up"
              />
              <span className="text-lg dark:text-gray-900">Lace-Up</span>
            </label>
          </li>
        </ul>
      </div>

      <div className="p-4 mb-5 bg-white border border-gray-200  dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-900">Price</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <div>
          <input
            type="range"
            className="w-full h-1 mb-4 bg-blue-100 rounded appearance-none cursor-pointer"
            min="1"
            max="500"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <input
            type="range"
            className="w-full h-1 mb-4 bg-blue-100 rounded appearance-none cursor-pointer"
            min="1"
            max="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <div className="flex justify-between ">
            <span className="inline-block text-lg font-bold text-blue-400 ">
              ${minPrice}
            </span>
            <span className="inline-block text-lg font-bold text-blue-400 ">
              ${maxPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilterSection;
