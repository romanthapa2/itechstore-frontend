import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import DispatchSelectedCategory from "./DispatchSelectedCategory";



export default function CategoriesIndex() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-xl focus:outline-none">
        <span className="font-semibold">Shop</span>
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
              <DispatchSelectedCategory/>
              <span className="p-1">Show all</span>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
