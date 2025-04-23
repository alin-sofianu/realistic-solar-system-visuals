import React, { useState } from "react";
import ControlPanel from "./ControlPanel";
function Accordion({ children, position }) {
  const [isVisible, setIsVisible] = useState(false);
  console.log(position.x);
  return (
    <div
      className="fixed bg-gray-700 rounded-t-xl rounded-b-xl border"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-50 gap-3 hover:cursor-pointer"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <span>Controls</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class={`${isVisible ? "" : "hidden"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          {/* <ControlPanel /> */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
