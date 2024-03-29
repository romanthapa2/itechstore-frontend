import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchlaptop, setcategory } from "../../features/Laptopslice";

const solutions = [{ name: "Laptop" }, { name: "Desktops" }, { name: "Monitors" }];

export default function Typeshover() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Handletype = (data) => {
    console.log(data)
    dispatch(fetchlaptop(data));
    dispatch(setcategory(data))
    navigate("/LaptopPage");
  };

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-xl focus:outline-none">
        <span>Shop</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1">
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-60 max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              <span className="font-semibold p-1 text-lg">Categories</span>
              {solutions.map((item) => (
                <div
                  key={item.name}
                  onClick={() => Handletype(item.name)}
                  className="group relative flex gap-x-2 rounded-lg p-1 hover:bg-gray-200">
                  <div>
                    <a className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              ))}
              <span className="p-1">Show all</span>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
