import React from "react";
import anime from "animejs";
import { BoxProps } from "../Interfaces/Interfaces";
import { velocity } from "./PlasticParticles";

export const ParticleHDPE = ({
  pathRef,
  onComplete,
  delay,
  colour,
  version,
}: BoxProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const path = anime.path(pathRef);
    const instance = anime({
      targets: ref.current,
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      opacity: colour === "#424242" ? [0.5, 0] : 1,
      delay: colour === "#424242" ? 0: delay,
      duration: path("d").totalLength / velocity,
      easing: "linear",
      complete: onComplete,
    });

    return instance.pause;
  }, []);

  if (version === 0) {
    return (
      <div
        ref={ref}
        style={{
          height: 22,
          width: 22,
          position: "absolute",
          top: "-11px",
          left: "-11px",
          zIndex: 6
        }}
      >
        <svg
          width="21"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="HDPE1" transform="rotate(-90) translate(-21 0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.133 2.729V1.5h-.483V.348H9.12V1.5h-.484V2.73c-.783.656-2.493 2.12-3.076 2.73-.583.61-.689 1.654-.67 2.1v11.629c0 .64.52 1.16 1.16 1.16h3.1c.64 0 1.16-.52 1.16-1.16h.126c0 .64.52 1.16 1.16 1.16h3.106c.64 0 1.16-.52 1.16-1.16l-.045-8.83c0-.773-.221-1.874-.434-2.93-.187-.927-.367-1.82-.384-2.429-.03-1.042-.732-1.5-1.08-1.6l-1.786-.67zm-.397 2.995a1.09 1.09 0 112.153-.332l.395 2.56a1.09 1.09 0 11-2.153.333l-.395-2.561z"
              fill={`${colour}`}
            />
            <path
              d="M12.133 1.501h.25v-.25h-.25v.25zm0 1.228h-.25v.173l.163.061.087-.234zM11.65 1.5h-.25v.25h.25v-.25zm0-1.153h.25v-.25h-.25v.25zm-2.53 0v-.25h-.25v.25h.25zm0 1.153v.25h.25v-.25h-.25zm-.484 0v-.25h-.25v.25h.25zm0 1.228l.16.191.09-.074v-.117h-.25zM5.56 5.459l-.18-.173.18.173zm-.67 2.1h.251v-.01l-.25.01zm5.42 11.629l-.001-.25h-.25v.25h.25zm.126 0h.25v-.25h-.25v.25zm5.426 0h.25v-.002l-.25.001zm-.045-8.83h-.25.25zm-.434-2.93l.245-.05-.245.05zM14.999 5l.25-.007-.25.007zm-1.08-1.6l-.087.234.01.004.009.002.069-.24zm-1.272 1.082l.038.247-.038-.247zm-.911 1.243l.247-.038-.247.038zm2.153-.332l-.247.038.247-.038zm.395 2.56l-.247.039.247-.038zm-.91 1.243l.038.248-.038-.248zm-1.243-.91l.247-.038-.247.038zM11.883 1.5V2.73h.5V1.5h-.5zm-.233.25h.483v-.5h-.483v.5zM11.4.348V1.5h.5V.348h-.5zm-2.28.25h2.53v-.5H9.12v.5zm.25.903V.348h-.5V1.5h.5zm-.734.25h.483v-.5h-.483v.5zm.25.978V1.5h-.5V2.73h.5zM5.74 5.63c.57-.597 2.269-2.051 3.055-2.71l-.32-.384c-.78.653-2.502 2.127-3.097 2.749l.362.345zm-.6 1.917c-.01-.2.01-.549.101-.918.092-.37.25-.737.499-.999l-.362-.345c-.333.349-.52.809-.622 1.224a3.962 3.962 0 00-.116 1.06l.5-.022zm0 11.64V7.559h-.5v11.629h.5zm.91.91a.91.91 0 01-.91-.91h-.5c0 .778.631 1.41 1.41 1.41v-.5zm3.098 0H6.051v.5h3.098v-.5zm.91-.91a.91.91 0 01-.91.91v.5a1.41 1.41 0 001.41-1.41h-.5zm.377-.25h-.127v.5h.127v-.5zm1.16 1.16a.91.91 0 01-.91-.91h-.5c0 .778.631 1.41 1.41 1.41v-.5zm3.106 0h-3.106v.5h3.106v-.5zm.91-.91a.91.91 0 01-.91.91v.5a1.41 1.41 0 001.41-1.41h-.5zm-.045-8.83l.045 8.83.5-.002-.045-8.83-.5.003zm-.43-2.88c.216 1.066.43 2.137.43 2.88h.5c0-.804-.228-1.933-.439-2.98l-.49.1zm-.388-2.472c.018.636.204 1.554.389 2.472l.49-.1c-.189-.936-.363-1.804-.38-2.386l-.5.014zM13.85 3.64c.264.076.872.455.898 1.367l.5-.014c-.034-1.172-.83-1.71-1.26-1.833l-.138.48zm-1.805-.676l1.786.67.175-.468-1.786-.67-.175.468zm.563 1.27a1.34 1.34 0 00-1.12 1.529l.494-.076a.84.84 0 01.702-.958l-.076-.494zm1.527 1.12a1.34 1.34 0 00-1.527-1.12l.076.495a.84.84 0 01.957.702l.495-.077zm.395 2.562l-.395-2.562-.494.077.395 2.56.494-.075zm-1.12 1.528a1.34 1.34 0 001.12-1.528l-.494.076a.84.84 0 01-.701.957l.076.495zm-1.527-1.12a1.34 1.34 0 001.528 1.12l-.076-.495a.84.84 0 01-.958-.701l-.494.076zm-.395-2.561l.395 2.56.494-.075-.395-2.561-.494.076zM8.636 2.979h3.497v-.5H8.636v.5zM11.65 1.25H9.12v.5h2.53v-.5z"
              fill="#000"
            />
          </g>
        </svg>
      </div>
    );
  } else {
    return (
      <div
        ref={ref}
        style={{
          height: 22,
          width: 22,
          position: "absolute",
          top: "-11px",
          left: "-11px",
          zIndex: 6
        }}
      >
        <svg
          width="21"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="HDPE2" transform="rotate(-90) translate(-21 0)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.135 20.348h8.752c.6-1.296 1.57-4.66 0-7.392-2.527-4.4 0-6.836 0-6.836-.974-1.185-1.844-1.66-2.869-1.848h.517V1.747c-.283-.044-.848-.265-.848-.788 0-.524-.446-.625-.67-.61h-.951c-.224-.015-.67.086-.67.61 0 .523-.565.744-.848.788v2.525h.598c-1.266.271-2.293.987-3.011 1.848 0 0-2.527 2.435 0 6.836 1.57 2.733.6 6.096 0 7.392zm2.028-12.21c-.03-.472-.342-1.319-1.345-.926-1.254.49-.93 2.97-.727 3.508.254.672.818 1.508 1.345.49.422-.814.66-2.387.727-3.072z"
              fill={`${colour}`}
            />
            <path
              d="M14.887 20.348v.25h.16l.067-.145-.227-.105zm-8.752 0l-.227-.105-.164.355h.39v-.25zm8.752-7.392l-.217.125.217-.125zm0-6.836l.173.18.167-.16-.147-.18-.193.16zm-2.869-1.848v-.25l-.044.496.044-.246zm.517 0v.25h.25v-.25h-.25zm0-2.525h.25v-.213l-.211-.034-.039.247zM11.018.35v.25h.016l-.016-.25zm-.952 0l-.017.25h.017v-.25zM8.548 1.747L8.51 1.5l-.21.034v.213h.25zm0 2.525h-.25v.25h.25v-.25zm.598 0l.052.245-.052-.495v.25zM6.135 6.12l.173.18.01-.01.009-.01-.192-.16zm0 6.836l.217-.124-.217.124zm.683-5.744l.09.233-.09-.233zm1.345.926l.249.025.002-.02-.001-.02-.25.015zM6.091 10.72l.234-.089-.234.089zm1.345.49l.222.115-.222-.114zm7.45 8.888H6.136v.5h8.752v-.5zm-.216-7.017c.751 1.307.9 2.775.781 4.087-.118 1.313-.502 2.45-.791 3.075l.454.21c.31-.671.711-1.864.835-3.24.124-1.377-.027-2.957-.845-4.382l-.434.25zm.217-6.961l-.174-.18h-.001c0 .002-.002.002-.002.003a.47.47 0 00-.033.033 3.79 3.79 0 00-.354.454 4.8 4.8 0 00-.625 1.392c-.335 1.227-.323 3.004.972 5.259l.434-.25c-1.233-2.146-1.221-3.787-.924-4.878.15-.55.374-.967.56-1.246a3.27 3.27 0 01.317-.404l.003-.004-.173-.18zm-2.913-1.602c.957.175 1.778.614 2.72 1.76l.386-.317c-1.006-1.224-1.926-1.736-3.017-1.935l-.09.492zm.561-.496h-.517v.5h.517v-.5zm-.25-2.275v2.525h.5V1.747h-.5zM11.437.96c0 .366.203.62.423.777.215.154.466.231.636.258l.078-.494a1.07 1.07 0 01-.424-.17c-.133-.096-.213-.214-.213-.371h-.5zm-.403-.36a.475.475 0 01.268.064c.067.043.135.119.135.296h.5c0-.347-.155-.583-.367-.718A.973.973 0 0011.002.1l.033.498zm-.968 0h.952v-.5h-.952v.5zm-.42.36c0-.177.069-.253.136-.296a.475.475 0 01.267-.065L10.082.1a.973.973 0 00-.57.141c-.211.135-.366.371-.366.718h.5zM8.587 1.994c.17-.027.421-.104.636-.258.22-.157.423-.41.423-.777h-.5c0 .157-.08.275-.213.37a1.07 1.07 0 01-.424.171l.078.494zm.211 2.278V1.747h-.5v2.525h.5zm.348-.25h-.598v.5h.598v-.5zM6.326 6.28c.689-.824 1.668-1.506 2.872-1.763l-.105-.49c-1.328.285-2.401 1.035-3.15 1.932l.384.32zm.026 6.551c-1.233-2.146-1.22-3.787-.924-4.878.15-.55.374-.967.56-1.246a3.28 3.28 0 01.32-.408l-.173-.18-.174-.18v.001H5.96c0 .002-.001.002-.002.003a1.165 1.165 0 00-.032.033 3.779 3.779 0 00-.354.454c-.21.316-.46.782-.626 1.392-.334 1.227-.323 3.004.972 5.259l.434-.25zm.01 7.622c.31-.671.711-1.864.835-3.24.124-1.377-.027-2.957-.845-4.382l-.434.25c.751 1.307.9 2.775.781 4.087-.118 1.313-.502 2.45-.79 3.075l.453.21zm.547-13.008c.219-.086.378-.096.493-.075.112.021.2.075.27.151.153.164.228.428.242.633l.499-.032c-.018-.267-.113-.662-.375-.942a.98.98 0 00-.545-.301c-.228-.042-.483-.01-.766.1l.182.466zm-.584 3.186c-.087-.228-.216-.945-.168-1.666.024-.357.091-.697.217-.97.124-.268.298-.458.535-.55l-.182-.466c-.39.152-.646.457-.807.808-.16.347-.235.753-.262 1.144-.052.776.082 1.568.199 1.877l.468-.177zm.889.465c-.122.234-.22.31-.27.331-.03.013-.069.017-.14-.033a1.031 1.031 0 01-.257-.302 2.762 2.762 0 01-.222-.46l-.468.176c.068.18.157.373.264.547.105.17.238.338.397.45.168.116.385.18.617.084.212-.088.38-.29.523-.563l-.444-.23zm.7-2.982c-.032.335-.107.89-.226 1.461-.12.576-.28 1.145-.474 1.52l.444.23c.227-.438.398-1.063.52-1.648.122-.59.2-1.164.234-1.514l-.498-.049zm2.343-4.208c-.406 0-.794.043-1.164.122l.105.489c.335-.072.688-.111 1.059-.111v-.5zm1.806.12c-.557-.101-1.15-.12-1.806-.12v.5c.65 0 1.207.02 1.717.112l.09-.492z"
              fill="#000"
            />
          </g>
        </svg>
      </div>
    );
  }
};
