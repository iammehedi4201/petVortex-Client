"use client";
import { addFilter, removeFilter } from "@/redux/api/pet/petSlice";
import { useAppDispatch } from "@/redux/hook";
import { Add } from "@mui/icons-material";
import { useEffect, useState } from "react";

const SideFilterSection = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full pr-2 lg:w-1/4 lg:block">
      <div className="p-4 mb-5 bg-white border border-[#f04336]">
        <h2 className="text-2xl font-bold dark:text-gray-900">Species</h2>
        <div className="w-16 pb-2 mb-6 border-b-2 border-[#f04336] "></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-900 ">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="dog"
                name="species"
              />
              <span className="text-lg">Dog</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-900 ">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2 "
                value="cat"
                name="species"
              />
              <span className="text-lg">Cat</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-[#f04336]">
        <h2 className="text-2xl font-bold dark:text-gray-900">Breed</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="labrador"
                name="breed"
              />
              <span className="text-lg dark:text-gray-900">Labrador</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="bulldog"
                name="breed"
              />
              <span className="text-lg dark:text-gray-900">Bulldog</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="siamese"
                name="breed"
              />
              <span className="text-lg dark:text-gray-900">Siamese</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="persian"
                name="breed"
              />
              <span className="text-lg dark:text-gray-900">Persian</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-[#f04336]">
        <h2 className="text-2xl font-bold dark:text-gray-900">Age</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="15"
                name="age"
              />
              <span className="text-lg dark:text-gray-900">15</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="3"
                name="age"
              />
              <span className="text-lg dark:text-gray-900">3</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="16"
                name="age"
              />
              <span className="text-lg dark:text-gray-900">16</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-[#f04336]">
        <h2 className="text-2xl font-bold dark:text-gray-900">Size</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="small"
                name="size"
              />
              <span className="text-lg dark:text-gray-900">Small</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="medium"
                name="size"
              />
              <span className="text-lg dark:text-gray-900">Medium</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="large"
                name="size"
              />
              <span className="text-lg dark:text-gray-900">Large</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-[#f04336]">
        <h2 className="text-2xl font-bold dark:text-gray-900">Location</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Dhaka"
                name="location"
              />
              <span className="text-lg dark:text-gray-900">Dhaka</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="Khilgoa"
                name="location"
              />
              <span className="text-lg dark:text-gray-900">Khilgoa</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="comilla"
                name="location"
              />
              <span className="text-lg dark:text-gray-900">Comilla</span>
            </label>
          </li>
        </ul>
      </div>
      <div className="p-4 mb-5 bg-white border border-[#f04336]">
        <h2 className="text-2xl font-bold dark:text-gray-900">Gender</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="MALE"
                name="gender"
              />
              <span className="text-lg dark:text-gray-900">Male</span>
            </label>
          </li>
          <li className="mb-4">
            <label className="flex items-center dark:text-gray-300">
              <input
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(
                        addFilter({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    : dispatch(removeFilter(e.target.name))
                }
                type="checkbox"
                className="w-4 h-4 mr-2"
                value="FEMALE"
                name="gender"
              />
              <span className="text-lg dark:text-gray-900">Female</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideFilterSection;
