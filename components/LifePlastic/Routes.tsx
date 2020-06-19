import * as React from "react";

interface RouteProps {
  routeStyle?: StyleType;
}
interface StyleType {
  GarbageLines: string;
  MixedLines: string;
  BaleLines: string;
  PelletLines: string;
  RegrindLines: string;
  HandLines: string;
  ProductsLines: string;
}

export const Routes = ({ routeStyle}: RouteProps) => {
  return (
    <svg
      width="1050"
      height="4028"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute" }}
    >
      <g id="GarbageLines" stroke={routeStyle? routeStyle.GarbageLines : "red"}>
        <path id="Garbage" d="M903.828 1768.04V3765" />
        <path
          id="Mixed-Garbage"
          d="M135.086 1768v246c0 5.52 4.477 10 10 10h748.742c5.523 0 10 4.48 10 10v1731"
        />
        <path
          id="Other-Garbage"
          d="M823.156 2216v41c0 5.52-4.477 10-10 10h-7.147c-2.176 0-4.292.71-6.028 2.02L784.128 2281a9.997 9.997 0 00-3.972 7.98V3766"
        />
        <path
          id="LDPE-Garbage"
          d="M631.156 2584v42.21c0 5.44-4.347 9.88-9.785 10l-10.718.23c-1.798.04-3.552.56-5.078 1.51l-16.211 10.11a10.016 10.016 0 00-4.708 8.49V3766.5"
        />
        <path
          id="ESP-Garbage"
          d="M503.156 2680.5v50.35c0 3.23-1.559 6.26-4.187 8.14l-37.125 26.52a10.008 10.008 0 00-4.188 8.14V3765"
        />
        <path
          id="SeperateHDPE-Garbage"
          d="M311.154 2424v47c0 3.15-1.482 6.11-4 8l-32 24a9.999 9.999 0 00-4 8v1247"
        />
        <path
          id="SeperatePETE-Garbage"
          d="M199.156 2479.8v0h-.002l-41.827 30a10.015 10.015 0 00-4.171 8.13V3766"
        />
        <path
          id="PVC-Garbage"
          d="M695.156 2448v45.97c0 5.52-4.477 10-10 10h-12.824c-1.913 0-3.786.55-5.396 1.58l-4.676 3a10 10 0 00-4.604 8.42V3766"
        />
        <path
          id="MixedPS-Garbage"
          d="M535.156 2128v2.81c0 3.53 1.86 6.79 4.895 8.6l6.211 3.68a10.012 10.012 0 014.894 8.6v135.35c0 3.13 1.459 6.07 3.943 7.96l25.614 19.5a9.992 9.992 0 013.943 7.96V3790"
        />
        <path
          id="PP-Garbage"
          d="M439.156 2488v30c0 5.52 4.477 10 10 10h8.941c1.994 0 3.942.6 5.595 1.71l13.059 8.82a9.991 9.991 0 014.405 8.28V3726"
        />
        <path
          id="MixedPETE-Garbage"
          d="M247.156 2216v34.35c0 3.51 1.837 6.76 4.841 8.57l34.319 20.66a10.004 10.004 0 014.84 8.57V3770"
        />
        <path
          id="MixedHDPE-Garbage"
          d="M359.156 2224v34.85c0 3.23-1.563 6.26-4.196 8.14l-35.107 25.02a9.99 9.99 0 00-4.197 8.14V3765"
        />
        <path
          id="Pipe-Garbage"
          d="M775 568v74.372a9.998 9.998 0 004.738 8.503l16.86 10.433a10.002 10.002 0 014.738 8.504v560.948c0 2.66 1.065 5.22 2.957 7.1l96.577 95.79a10.016 10.016 0 012.958 7.1v427.47"
        />
        <path
          id="Office-Garbage"
          d="M695 688v31.055a10 10 0 009.217 9.969l29.835 2.344a10 10 0 019.216 9.969v480.573c0 2.65 1.054 5.19 2.929 7.07l154.702 154.7a10.007 10.007 0 012.929 7.07v377.35"
        />
        <path
          id="Bag-Garbage"
          d="M551 888v70.331c0 5.523 4.477 10 10 10h33.717c5.522 0 10 4.478 10 10v414.239c0 2.65 1.057 5.2 2.938 7.08l293.234 292.42a9.997 9.997 0 012.939 7.08v68.95"
        />
        <path
          id="Frame-Garbage"
          d="M407 856v31.062a10 10 0 009.133 9.963l26.165 2.278a10 10 0 019.133 9.962v59.483c0 2.656 1.056 5.202 2.935 7.078l446.527 445.704a10.023 10.023 0 012.935 7.08v339.49"
        />
        <path
          id="Board-Garbage"
          d="M247.828 856v30.327c0 5.523 4.477 10 10 10h30.568c5.523 0 10 4.477 10 10v161.303c0 2.65 1.053 5.19 2.929 7.07l599.574 599.57a10.007 10.007 0 012.929 7.07v86.76"
        />
        <path
          id="Infill-Garbage"
          d="M183 992v30.5c0 5.52 4.477 10 10 10h37.06c5.523 0 10 4.48 10 10v42.92c0 2.65 1.054 5.19 2.929 7.07l657.082 657.08a10.011 10.011 0 012.929 7.07V1768"
        />
        <path
          id="Landscape-Garbage"
          d="M471 696v70.201c0 5.523 4.477 10 10 10h33.832c5.523 0 10 4.477 10 10v323.369c0 2.65 1.057 5.2 2.937 7.08l373.122 372.3a10.02 10.02 0 012.937 7.08v272.19"
        />
        <path
          id="Bottle-Garbage"
          d="M375.001 536v115.1c0 3.681-2.023 7.064-5.265 8.808l-18.69 10.049a10 10 0 00-5.265 8.807v454.566c0 2.66 1.056 5.2 2.934 7.08l552.179 551.36a9.987 9.987 0 012.934 7.08v69.25"
        />
        <path
          id="Medicine-Garbage"
          d="M262.998 512v75.261a10 10 0 005.306 8.829l18.029 9.586a9.998 9.998 0 015.306 8.829v381.811c0 2.652 1.054 5.194 2.929 7.074l606.329 606.33a9.99 9.99 0 012.929 7.07v151.31"
        />
        <path
          id="Milk-Garbage"
          d="M263 512v76.311a10 10 0 01-4.569 8.397l-15.153 9.8a9.999 9.999 0 00-4.569 8.397v373.643a10 10 0 002.93 7.072l659.26 659.15a9.994 9.994 0 012.929 7.07v106.14"
        />
        <path
          id="Cap-Garbage"
          d="M134.999 416v115.297a10 10 0 01-4.449 8.318l-17.468 11.657a10 10 0 00-4.449 8.318v276.45c0 2.654 1.055 5.199 2.932 7.075l789.331 788.505a10.011 10.011 0 012.932 7.08v129.56"
        />
        <path
          id="Furniture-Garbage"
          d="M344 240v75.545a9.997 9.997 0 01-4.34 8.243l-16.492 11.325a10 10 0 00-4.34 8.244v620.976a10 10 0 002.927 7.069l578.981 579.318a9.978 9.978 0 012.927 7.07v210.33"
        />
        <path
          id="PVCPipe-Garbage"
          d="M518.999 551.906v34.537a9.998 9.998 0 01-5.03 8.677l-17.118 9.804a10 10 0 00-5.03 8.678l-.001 602.678c0 2.65 1.057 5.2 2.936 7.07l406.135 405.32a10.007 10.007 0 012.936 7.08v131.85"
        />
        <path
          id="Bucket-Garbage"
          d="M599 608v74.866a9.999 9.999 0 005.008 8.665l18.449 10.629a10.002 10.002 0 015.008 8.665v378.725c0 2.65 1.057 5.2 2.939 7.08l270.484 269.67a10.014 10.014 0 012.939 7.08v394.74"
        />
        <path
          id="Window-Garbage"
          d="M502.999 224v34.754a9.998 9.998 0 01-4.833 8.561l-16.556 9.992a10.003 10.003 0 00-4.833 8.562v757.201c0 2.66 1.057 5.2 2.936 7.08l421.179 420.36a10.002 10.002 0 012.936 7.08v290.47"
        />
      </g>
      <g id="MixedLines" stroke={routeStyle? routeStyle.MixedLines : "#000"}>
        <path
          id="Mixed-PETE"
          d="M135.156 1768v245.93c0 5.55 4.522 10.04 10.073 10l75.854-.56c5.551-.04 10.073 4.45 10.073 10V2064"
        />
        <path
          id="Mixed-HDPE"
          d="M135.086 1768v245.3c0 5.52 4.477 10 10 10h172.07c5.523 0 10 4.47 10 10v29.5"
        />
        <path
          id="Mixed-PP"
          d="M135.086 1768v245.3c0 5.52 4.477 10 10 10h268.742c5.523 0 10 4.47 10 10v29.5"
        />
        <path
          id="Mixed-LDPE"
          d="M135.086 1768v245.3c0 5.52 4.477 10 10 10h460.742c5.523 0 10 4.47 10 10v29.5"
        />
        <path
          id="Mixed-Other"
          d="M135.086 1768v245.29c0 5.53 4.48 10 10.004 10l652.734-.29c5.524 0 10.004 4.48 10.004 10v29.8"
        />
        <path
          id="Mixed-PS-Hand"
          d="M135.086 1768v245.3c0 5.52 4.477 10 10 10h348.742c5.523 0 10 4.47 10 10v30.83"
        />
        <path
          id="Mixed-PS-Machine"
          d="M135.156 1768v245.98c0 5.53 4.488 10.01 10.018 10l380.637-.67c5.529-.01 10.017 4.47 10.017 10v93.99"
        />
        <path
          id="Mixed-PVCRecovery"
          d="M695.156 2448v45.97c0 5.53-4.477 10-10 10h-21.48a10.08 10.08 0 01-4.777-1.21l-39.512-21.49a9.966 9.966 0 00-4.778-1.21H97.156c-5.523 0-10-4.48-10-10v-770.77c0-5.53 4.477-10 10-10h27.929a9.996 9.996 0 0110.001 10V1768"
        />
        <path
          id="Mixed-SeperatePETRecovery"
          d="M199.157 2480h-.149a9.951 9.951 0 01-4.993-1.34l-22.947-13.22a9.957 9.957 0 00-4.993-1.34H97.157c-5.523 0-10-4.47-10-10v-754.81c0-5.52 4.476-10 10-10h28c5.523 0 10 4.48 10 10V1768"
        />
        <path
          id="Mixed-MixedPETRecovery"
          d="M247.156 2216v30c0 5.52-4.477 10-10 10h-3.344a9.93 9.93 0 01-4.961-1.32l-51.389-29.36a9.933 9.933 0 00-4.961-1.32H97.156c-5.523 0-10-4.48-10-10v-514.58c0-5.52 4.478-10 10-10h28.001c5.522 0 9.999 4.48 9.999 10V1768"
        />
        <path
          id="Mixed-HDPERecovery"
          d="M311.156 2424v30c0 5.52-4.477 10-10 10h-2.972a9.963 9.963 0 01-5.547-1.68l-18.961-12.64a9.963 9.963 0 00-5.547-1.68H96.493a9.999 9.999 0 01-10-10.01l.654-738.58c.004-5.52 4.48-9.99 10-9.99h27.94c5.523 0 10 4.48 10 10V1768"
        />
        <path
          id="Mixed-HDPERecovery_2"
          d="M439.156 2488v21.66c0 7.81-8.555 12.61-15.218 8.53l-33.88-20.72a10.008 10.008 0 00-5.218-1.47H97.156c-5.523 0-10-4.48-10-10v-786.58c0-5.52 4.477-10 10-10h27.93c5.523 0 10 4.48 10 10V1768"
        />
      </g>
      <g id="BaleLines" stroke={routeStyle? routeStyle.BaleLines : "#FF9D29"}>
        <path
          id="Bale-SeperatedPETE"
          d="M231.377 2064v53.6c0 3.37-1.697 6.52-4.513 8.36l-22.973 15.08a10 10 0 00-4.514 8.36V2480"
        />
        <path
          id="Bale-MixedPETE-Product"
          d="M231.377 2064v38c0 5.52 4.477 10 10 10h3.052c1.924 0 3.808.56 5.425 1.6l19.043 12.3a10.058 10.058 0 005.432 1.6l659.264-.49c5.52-.01 9.993-4.48 9.993-10V178c0-5.523-4.477-10-10-10H352.948c-5.523 0-10 4.477-10 10v62.129"
        />
        <path
          id="Bale-MixedPETE-Sorted"
          d="M231.377 2064v73.5c0 3.15-1.482 6.12-4 8l-8 6c-2.518 1.89-4 4.86-4 8v300.77c0 2.71-1.098 5.3-3.042 7.18L199.377 2480"
        />
        <path
          id="Bale-PremiumPETE"
          d="M231.377 1856v70c0 5.52-4.477 10-10 10h-3.254c-1.797 0-3.561.48-5.106 1.4l-24.769 14.71c-3.021 1.79-4.878 4.84-4.892 8.35-.434 111.85-.033 458.22.017 499.5.003 2.65 1.056 5.09 2.928 6.96l13.077 13.08"
        />
        <path
          id="Bale-MixedPETE-Mixed"
          d="M231.387 2064v70c0 3.15 1.482 6.11 4 8l7.999 6c2.518 1.89 4 4.85 4 8v60"
        />
        <path
          id="Bale-SeperatedHDPE-Hand"
          d="M327.377 1856v56.82c0 3.79-2.14 7.25-5.528 8.95l-4.944 2.47a9.998 9.998 0 00-5.528 8.94V2424"
        />
        <path
          id="Bale-SeperatedHDPE-Hand_2"
          d="M311.377 2424l.001-300.83c0-3.29 1.621-6.28 4.334-8.15l7.331-5.04a9.984 9.984 0 004.335-8.24V2064"
        />
        <path
          id="Bale-MixedHDPE-Hand"
          d="M327.377 1856v50c0 5.53 4.477 10 10 10h3.639c1.553 0 3.084.37 4.472 1.06l8.383 4.19a9.996 9.996 0 015.528 8.91l.65 180.84-.672 113"
        />
        <path
          id="Bale-MixedHDPE-Machine"
          d="M327.377 2064v34.02c0 3.68 2.028 7.07 5.278 8.81l22.115 11.85a10 10 0 015.279 8.81v7.31l-.672 89.2"
        />
        <path
          id="Bale-MixedHDPE-MachinePipes"
          d="M327.377 2064v9.76c0 3.82 2.173 7.31 5.602 8.98l24.989 12.24c1.369.67 2.873 1.02 4.398 1.02h571.087c5.522 0 10-4.48 10-10V481.82c0-5.522-4.478-10-10-10H785c-5.523 0-10 4.477-10 10v86.181"
        />
        <path
          id="Bale-MixedHDPE-HandPipes"
          d="M327.377 1856v46c0 5.52 4.477 10 10 10h15.856a9.91 9.91 0 014.528 1.09l11.481 5.83c1.404.71 2.955 1.08 4.529 1.08h559.815c5.523 0 10-4.48 10-10V481.797c0-5.523-4.477-10-10-10H785c-5.523 0-10 4.477-10 10v86.205"
        />
        <path
          id="Bale-PP-Machine"
          d="M423.377 2064v65.82c0 3.79 2.14 7.25 5.528 8.95l4.944 2.47a9.998 9.998 0 015.528 8.94V2488"
        />
        <path
          id="Bale-PP-Hand"
          d="M423.377 1856v90.15c0 3.88 2.243 7.41 5.756 9.05l4.488 2.11a9.985 9.985 0 015.756 9.05V2488"
        />
        <path
          id="Bale-PP-Hand-Bucket"
          d="M423.377 1856v75.5c0 5.52 4.477 10 10 10h2.36c1.73 0 3.431.45 4.936 1.3l13.908 7.9c1.505.85 3.206 1.3 4.936 1.3h473.891c5.525 0 10.003-4.48 10-10.01l-.816-1379.808c-.003-5.521-4.48-9.994-10-9.994H609c-5.523 0-10 4.477-10 9.999V608"
        />
        <path
          id="Bale-PP-Machine-Bucket"
          d="M423.377 2064v14.58c0 3.65 1.987 7.01 5.184 8.77l38.067 20.91a10.01 10.01 0 004.815 1.24h462.143c5.523 0 10-4.48 10-10V562.188c0-5.523-4.477-10-10-10H609c-5.523 0-10 4.477-10 10V608"
        />
        <path id="Brick-ESP" d="M503.377 2063.46V2679" />
        <path
          id="Brick-MixedPS"
          d="M535.377 2128v2.81c0 3.53 1.86 6.79 4.895 8.6l6.21 3.68a10.01 10.01 0 014.895 8.6v143.46c0 3.61-1.949 6.95-5.097 8.72l-37.806 21.26a10.01 10.01 0 00-5.097 8.72V2680"
        />
        <path
          id="Brick-ESP-Infill"
          d="M503.541 2064.64v58.31c0 3.34 1.676 6.47 4.465 8.32l16.635 11.06a10 10 0 005.535 1.67h403.41c5.523 0 10-4.48 10-10V961.855c0-5.522-4.477-10-10-10H193c-5.523 0-10 4.478-10 10V992"
        />
        <path
          id="Brick-ESP-Board"
          d="M503.033 2063.96v59.32c0 3.44 1.774 6.64 4.695 8.47l17.131 10.72a9.967 9.967 0 005.305 1.53H934c5.523 0 10-4.48 10-10V777.793c0-5.523-4.477-10-10-10H257c-5.523 0-10 4.477-10 10V856"
        />
        <path
          id="Ingot-MixedPS"
          d="M535.377 2128v2.81c0 3.53 1.86 6.8 4.895 8.6l6.21 3.69a9.998 9.998 0 014.895 8.6v216.41c0 3.36-1.697 6.51-4.513 8.36l-6.974 4.57a10.002 10.002 0 00-4.513 8.36V2880"
        />
        <path
          id="Bale-LDPE-Hand"
          d="M615.377 1896v48.19c0 3.59 1.927 6.91 5.049 8.69l6.565 3.74a9.993 9.993 0 015.05 8.7l-.164 114.48-.5 504.2"
        />
        <path
          id="Bale-LDPE-Machine"
          d="M615.377 2064v37.01c0 3.42 1.747 6.6 4.631 8.44l7.232 4.6a9.997 9.997 0 014.631 8.45l-.494 461.5"
        />
        <path
          id="Bale-Other-Hand"
          d="M807.154 1856v85.23c0 2.85 1.214 5.56 3.337 7.46l9.326 8.33a10.004 10.004 0 013.337 7.46V2216"
        />
        <path
          id="Bale-Other-Machine"
          d="M807.154 2064v39.11c0 3.36 1.697 6.51 4.514 8.36l6.973 4.57a10 10 0 014.513 8.36v91.6"
        />
      </g>
      <g id="PelletLines" stroke={routeStyle? routeStyle.PelletLines : "#E900B5"}>
        <path
          id="Pellet-SeperaterHDPE"
          d="M327.571 2776l.251 29.92c.047 5.55-4.444 10.08-10 10.08h-20.224c-1.974 0-3.904.59-5.547 1.68l-9.647 6.43a9.995 9.995 0 00-4.45 8.1l-.654 29.07c-.126 5.61 4.387 10.22 9.998 10.22h694.945c5.523 0 10-4.48 10-10V498.001c0-5.523-4.477-10-10-10L297.907 488a9.997 9.997 0 00-6.111 2.085l-28.382 21.916"
        />
        <path
          id="Pellet-MixedHDPE-Bottles"
          d="M375.57 2624v30c0 5.52 4.477 10 10 10h19.182c1.843 0 3.65.51 5.221 1.47l17.319 10.61a9.978 9.978 0 014.778 8.52v57.4c0 5.52 4.477 10 10 10h540.172c5.523 0 10-4.48 10-10V409.871c0-5.523-4.477-10-10-10H273.414c-5.523 0-10 4.477-10 10v102.02"
        />
        <path
          id="Pellet-MixedHDPE-Pipes"
          d="M375.57 2624v30c0 5.52 4.477 10 10 10h18.73c1.813 0 3.591.49 5.145 1.43l17.77 10.66a9.986 9.986 0 014.855 8.57V2742c0 5.52 4.477 10 10 10h540.172c5.523 0 10-4.48 10-10V578c0-5.523-4.477-10-10-10H775.414"
        />
        <path
          id="Pellet-MixedPETE-Fibre"
          d="M263.57 2584v74.34c0 3.51 1.843 6.77 4.855 8.57l30.29 18.18a9.986 9.986 0 014.855 8.57v72.84c0 5.52 4.477 10 10 10h676.672c5.523 0 9.998-4.48 9.998-10V273.77c0-5.523-4.475-10-9.998-10H593.394c-5.523 0-10 4.477-10 10v62.229"
        />
        <path
          id="Pellet-MixedPETE-Furniture"
          d="M263.57 2584v74.34c0 3.51 1.843 6.77 4.855 8.57l30.29 18.18a9.986 9.986 0 014.855 8.57v72.84c0 5.52 4.477 10 10 10h676.672c5.523 0 9.998-4.48 9.998-10V210c0-5.523-4.475-10-9.998-10H415.103a9.994 9.994 0 00-5.015 1.349L377.914 220l-34.5 20"
        />
        <path
          id="Pellet-BluerPET"
          d="M199.57 2479.95v85.01c0 3.97-2.352 7.57-5.991 9.16l-4.017 1.76a9.998 9.998 0 00-5.992 9.16V2819c0 3.15-1.482 6.11-4 8l-24 18a9.999 9.999 0 00-4 8v33c0 5.52 4.477 10 10 10h828.672c5.523 0 9.998-4.48 9.998-10V521.715c0-5.523-4.475-10-9.998-10H399.207a9.997 9.997 0 00-7.89 3.857l-15.903 20.427"
        />
        <path
          id="Pellet-BrownrPET"
          d="M199.57 2479.81v85.15c0 3.97-2.352 7.57-5.991 9.16l-4.017 1.76a9.998 9.998 0 00-5.992 9.16V2819c0 3.15-1.482 6.11-4 8l-24 18a9.999 9.999 0 00-4 8v33c0 5.52 4.477 10 10 10h828.672c5.523 0 9.998-4.48 9.998-10V521.629c0-5.523-4.475-10-9.998-10H399.446a10.004 10.004 0 00-7.86 3.816L375.414 536"
        />
        <path
          id="Pellet-ClearrPET"
          d="M199.57 2479.81v85.15c0 3.97-2.352 7.57-5.991 9.16l-4.017 1.76a9.998 9.998 0 00-5.992 9.16V2819c0 3.15-1.482 6.11-4 8l-24 18a9.999 9.999 0 00-4 8v33c0 5.52 4.477 10 10 10h828.672c5.523 0 9.998-4.48 9.998-10V521.719c0-5.523-4.475-10-9.998-10H399.511a10 10 0 00-7.834 3.785l-16.263 20.498"
        />
        <path
          id="Pellet-GreenrPET"
          d="M199.57 2479.38v85.58c0 3.97-2.352 7.57-5.991 9.16l-4.017 1.76a9.998 9.998 0 00-5.992 9.16V2819c0 3.15-1.482 6.11-4 8l-24 18a9.999 9.999 0 00-4 8v33c0 5.52 4.477 10 10 10h828.672c5.523 0 9.998-4.48 9.998-10V521.891c0-5.523-4.475-10-9.998-10H399.337a9.997 9.997 0 00-7.84 3.793l-16.083 20.317"
        />
        <path
          id="Pellet-rPP-Buckets"
          d="M424.241 2957.3v13.85c0 3.06-1.401 5.96-3.804 7.85l-26.596 21a9.994 9.994 0 00-3.804 7.85V3062c0 5.52 4.477 10 10 10h574.704c5.523 0 10-4.48 10-10V602c0-5.523-4.477-10-10-10H619.554a10.001 10.001 0 00-7.071 2.929L599.412 608"
        />
        <path
          id="Pellet-rPP-Caps"
          d="M423.57 2936l.589 35.06a9.99 9.99 0 01-3.787 8l-26.403 20.93a10.016 10.016 0 00-3.788 7.84v54.24c0 5.53 4.477 10 10 10h574.561c5.522 0 10-4.47 10-10V353.781c0-5.523-4.478-10-10-10H145.414c-5.523 0-10 4.477-10 10v62.217"
        />
        <path
          id="Pellet-PS-Frame"
          d="M535.57 2880v78.8a10 10 0 004.906 8.61l30.738 18.2c1.543.91 3.302 1.39 5.095 1.39h389.933c5.523 0 10-4.47 10-10V826.148c0-5.522-4.477-10-10-10H417.414c-5.523 0-10 4.478-10 10v29.854"
        />
        <path
          id="Pellet-PS-Pipes"
          d="M535.57 2880v78.8c0 3.53 1.865 6.81 4.905 8.61l30.739 18.2c1.542.91 3.302 1.39 5.095 1.39h389.933c5.523 0 10-4.48 10-10V642.316c0-5.522-4.477-10-10-10H705.414c-5.523 0-10 4.478-10 10v45.686"
        />
        <path
          id="Pellet-PS-Boards"
          d="M535.57 2880v78.76c0 3.56 1.886 6.84 4.955 8.64l31.207 18.23a9.953 9.953 0 005.046 1.37h389.464c5.523 0 10-4.48 10-10V802.442c0-5.52-4.473-9.996-9.993-10l-672.258-.489a10.002 10.002 0 00-8.444 4.631l-38.133 59.917"
        />
        <path
          id="Pellet-LDPE-Bags"
          d="M631.569 2584v119.33a4.67 4.67 0 004.672 4.67v0c.868 0 1.72.24 2.458.7l27.952 17.3a9.991 9.991 0 005.263 1.5h286.827c5.523 0 10-4.48 10-10V849.922c0-5.523-4.477-10-10-10H561.414c-5.523 0-10 4.477-10 10v38.08"
        />
        <path
          id="Pellet-LDPE-Landscape"
          d="M631.57 2584v119.33a4.67 4.67 0 004.671 4.67v0c.869 0 1.721.24 2.459.7l27.952 17.3a9.989 9.989 0 005.263 1.5H958.07c5.523 0 10-4.48 10-10l-.155-2035.501c-.001-5.522-4.478-9.999-10-9.999H494.697a10.003 10.003 0 00-7.946 3.928L471.414 696"
        />
        <path
          id="Pellet-PVC-Pipes"
          d="M711.57 2784l.267 38.57a9.997 9.997 0 0010 9.93h7.656c1.691 0 3.354.43 4.834 1.25l22.987 12.69a9.963 9.963 0 004.834 1.24h188.094c5.523 0 10-4.47 10-10V546.176c0-5.523-4.477-10-10-10H539.157a10.001 10.001 0 00-7.133 2.991l-12.61 12.834"
        />
        <path
          id="Pellet-PVC-Toys"
          d="M711.57 2784v38.5c0 5.52 4.478 10 10 10h8.339c1.744 0 3.458.46 4.971 1.32l21.881 12.54a9.965 9.965 0 004.971 1.32h188.51c5.523 0 10-4.47 10-10V305.82c0-5.523-4.477-10-10-10H433.414c-5.523 0-10 4.477-10 10v70.182"
        />
        <path
          id="Pellet-PVC-Toys_2"
          d="M711.57 2784v38.5c0 5.52 4.477 10 10 10h8.338c1.745 0 3.459.46 4.972 1.32l21.881 12.54a9.965 9.965 0 004.971 1.32h188.51c5.523 0 10-4.47 10-10V153.5c0-5.523-4.477-10-10-10H513.414c-5.523 0-10 4.477-10 10V224"
        />
        <path
          id="Pellet-Other-Furniture"
          d="M823.569 2216v127c0 5.52 4.477 10 10 10h109.172c5.523 0 10-4.48 10-10V882c0-5.523-4.477-10-10-10H751.162a9.999 9.999 0 00-7.884 3.849L727.555 896"
        />
        <path
          id="Pellet-Other-Concrete"
          d="M823.57 2216v127c0 5.52 4.477 10 10 10h109.172c5.523 0 10-4.48 10-10V994.004c0-5.523-4.477-10-10-10H801.414c-5.523 0-10 4.477-10 10V1048"
        />
      </g>
      <g id="RegrindLines" stroke={routeStyle? routeStyle.RegrindLines : "#1741D5"}>
        <path
          id="Regrind-SeperateHDPE"
          d="M311.156 2424v74.31c0 3.53 1.86 6.79 4.895 8.6l6.211 3.68a10.012 10.012 0 014.894 8.6V2776"
        />
        <path
          id="Regrind-MixedHDPE"
          d="M359.156 2224v77.74c0 3.29 1.621 6.37 4.335 8.24l7.331 5.04a10.01 10.01 0 014.334 8.24V2624"
        />
        <path
          id="Regrind-MixedPETE"
          d="M247.156 2216l.322 122.89a10.003 10.003 0 004.814 8.52l6.05 3.67a9.99 9.99 0 014.814 8.55V2584"
        />
        <path
          id="Regrind-MixedPETE-Recovered"
          d="M199.156 2479.52v70.41c0 5.52 4.477 10 10 10h5.295a9.9 9.9 0 014.616 1.13l44.089 22.94"
        />
        <path
          id="Regrind-PP-SepHDPERecovery"
          d="M311.156 2424v33.99c0 3.7-2.042 7.09-5.308 8.83l-5.383 2.86a10.002 10.002 0 00-5.309 8.83v447.03c0 5.51 4.454 9.98 9.961 10l118.039.46"
        />
        <path
          id="Regrind-PP-MixHDPERecovery"
          d="M359.156 2224v41.61c0 3.37 1.693 6.51 4.503 8.36l23.666 15.57a10 10 0 014.503 8.35V2926c0 5.52 4.477 10 10 10h21.328"
        />
        <path
          id="Regrind-PP-PETRecovery"
          d="M247.156 2216l.459 110.04a9.999 9.999 0 0010 9.96h10.821c1.781 0 3.53.48 5.066 1.38l16.55 9.72a10.012 10.012 0 014.934 8.62l.167 569.82c.002 5.51 4.455 9.98 9.961 10l118.042.46"
        />
        <path
          id="Regrind-PP-Recovered"
          d="M199.156 2479.95v79.39c0 3.51 1.843 6.77 4.855 8.57l10.29 6.18a9.999 9.999 0 014.855 8.57V2926c0 5.52 4.477 10 10 10h194"
        />
        <path
          id="Regrind-PP"
          d="M439.156 2488v81.11c0 2.8-1.173 5.47-3.233 7.36l-9.533 8.76a10.017 10.017 0 00-3.234 7.36V2936"
        />
        <path
          id="Regrind-PS"
          d="M503.156 2680v83.12c0 3.36 1.684 6.49 4.483 8.35l7.034 4.65a9.99 9.99 0 014.483 8.34v79.52c0 3.35 1.671 6.47 4.453 8.32l11.547 7.7"
        />
        <path
          id="Regrind-PVC"
          d="M695.156 2448v119.6a10 10 0 004.514 8.36l6.973 4.58a9.987 9.987 0 014.514 8.36V2784"
        />
      </g>
      <g id="HandLines" stroke={routeStyle? routeStyle.HandLines : "#00976A"}>
        <path id="PET" d="M231.895 1767.96V1856" />
        <path id="HDPE" d="M327.771 1767.96V1856" />
        <path id="PP" d="M423.648 1767.84V1856" />
        <path id="LDPE" d="M615.402 1767.84V1896" />
        <path id="Other" d="M807.156 1767.6v88.4" />
        <path
          id="PVC"
          d="M711.28 1767.96v137.28c0 3.29-1.619 6.37-4.33 8.24l-7.319 5.04a10.011 10.011 0 00-4.33 8.24V2448"
        />
        <path
          id="PS"
          d="M519.526 1767.81v136.16c0 3.44-1.774 6.64-4.695 8.47l-6.589 4.13a9.986 9.986 0 00-4.695 8.47v756.12"
        />
        <path
          id="rPET-Fibre"
          d="M583.287 336.001v69.936c0 5.523 4.477 10 10 10h32.518c2.129 0 4.203-.68 5.92-1.94l8.442-6.202a9.997 9.997 0 004.081-8.059V224.347a10 10 0 013.812-7.855l7.74-6.097a9.994 9.994 0 016.188-2.145h23.156c5.522 0 10 4.477 10 10v5.751"
        />
      </g>
      <g id="ProductsLines" stroke={routeStyle? routeStyle.ProductsLines : "#2E9100"}>
        <path
          id="Product-Concrete"
          d="M791.196 1047.75h-36.4c-5.462 0-9.913 4.38-9.999 9.84l-1.176 74.79a9.987 9.987 0 002.928 7.22L900.3 1293.37a10.01 10.01 0 012.928 7.07v467.66"
        />
        <path
          id="Product-GardenFurniture"
          d="M727.422 896.25v35.058a10 10 0 005.488 8.924l20.989 10.611a10 10 0 015.488 8.924v212.843c0 2.65 1.052 5.19 2.925 7.06l137.991 138.15a9.982 9.982 0 012.926 7.07v443.33"
        />
        <path
          id="Product-Beams"
          d="M727.421 896v37.778c0 2.778-1.156 5.43-3.189 7.322l-14.719 13.692a10 10 0 00-3.189 7.322v185.276c0 2.61 1.026 5.13 2.858 7l191.188 195.09a10 10 0 012.857 7v411.62"
        />
        <path
          id="Product-Bag"
          d="M551.615 887.75v70.771c0 5.523 4.477 10 10 10h33.089c5.523 0 10 4.477 10 10v412.869c0 2.57.992 5.05 2.768 6.91l5.305 5.55a10.01 10.01 0 012.768 6.91v357.21"
        />
        <path
          id="Product-Frames"
          d="M407.617 855.75v31.21a10 10 0 009.172 9.966l26.707 2.22a10 10 0 019.172 9.966v60.063a10 10 0 002.925 7.067l348.66 349.048a9.975 9.975 0 012.925 7.06v435.62"
        />
        <path
          id="Product-Boards"
          d="M247.949 855.75v30.145c0 5.523 4.477 10 10 10H289.4c5.522 0 10 4.477 10 10v162.835c0 2.65 1.052 5.19 2.925 7.07l214.4 214.64a9.975 9.975 0 012.925 7.06v470.25"
        />
        <path
          id="Product-Infill"
          d="M184.02 991.75v31c0 5.52 4.477 10 10 10h36.849c5.523 0 10 4.48 10 10v42.77c0 2.65 1.052 5.19 2.925 7.07l656.509 657.23a10.017 10.017 0 012.926 7.07v11.33"
        />
        <path
          id="Product-Cap"
          d="M136.073 415.75v114.552a10 10 0 01-4.451 8.319l-18.218 12.154a10 10 0 00-4.45 8.318l-.001 489.797c0 2.65 1.052 5.19 2.926 7.06l308.952 309.27a9.975 9.975 0 012.925 7.06v395.58"
        />
        <path
          id="Product-Medicine"
          d="M263.932 511.75v74.19a10 10 0 005.135 8.738l17.815 9.917a10.001 10.001 0 015.136 8.738v382.855a10.02 10.02 0 002.925 7.072l29.993 30.02a10.016 10.016 0 012.925 7.07v727.4"
        />
        <path
          id="Product-Milk"
          d="M263.933 511.75v75.012c0 3.179-1.511 6.169-4.071 8.054l-15.526 11.428a9.998 9.998 0 00-4.072 8.054l.001 375.657a10 10 0 002.925 7.068l81.748 81.837a10.016 10.016 0 012.925 7.07v681.72"
        />
        <path
          id="Product-Bottle"
          d="M375.809 535.75v115.376a10 10 0 01-5.259 8.804l-17.76 9.566a9.999 9.999 0 00-5.259 8.804v454.45c0 2.65-1.052 5.2-2.925 7.07l-109.714 109.84a9.975 9.975 0 00-2.925 7.06v511.03"
        />
        <path
          id="Product-Landscape"
          d="M471.703 695.75v70.339c0 5.523 4.477 10 10 10h33.008c5.523 0 10 4.477 10 10v322.501c0 2.65 1.052 5.19 2.925 7.06l372.667 373.08a10.016 10.016 0 012.925 7.07v272.36"
        />
        <path
          id="Product-PVCPipes"
          d="M519.651 551.75v34.196a10 10 0 01-5.178 8.761l-16.627 9.152a10 10 0 00-5.177 8.76l-.001 422.861c0 2.65 1.052 5.19 2.925 7.06l212.922 213.16a10.016 10.016 0 012.925 7.07v504.88"
        />
        <path
          id="Product-Bucket"
          d="M599.562 607.75v74.56c0 3.521 1.852 6.782 4.875 8.587l18.762 11.199a10 10 0 014.875 8.586v378.708c0 2.65 1.052 5.19 2.925 7.06l173.41 173.6a10.016 10.016 0 012.925 7.07v490.74"
        />
        <path
          id="Product-Office"
          d="M695.457 687.75v30.821a10 10 0 009.096 9.959l29.908 2.716a9.999 9.999 0 019.095 9.959v481.725c0 2.65-1.052 5.19-2.925 7.07l-218.056 218.29a10.016 10.016 0 00-2.925 7.07l.001 312.5"
        />
        <path
          id="Product-OtherPipe"
          d="M775.369 567.75v74.314a10 10 0 004.807 8.546l16.983 10.32a10 10 0 014.807 8.546v562.014c0 2.43.965 4.77 2.684 6.49v0a9.166 9.166 0 012.684 6.48v523.29"
        />
        <path
          id="Product-Furniture"
          d="M343.689 239.75v75.112c0 3.244-1.574 6.287-4.222 8.162l-17.082 12.092a9.999 9.999 0 00-4.222 8.162l-.001 620.677c0 2.651 1.053 5.194 2.926 7.069l483.32 483.666a10.012 10.012 0 012.926 7.07v305.99"
        />
        <path
          id="Product-Toys"
          d="M423.756 375.75l20.38 12.684a10.003 10.003 0 014.715 8.49v679.936c0 2.65 1.052 5.2 2.925 7.07l448.528 449.05a9.975 9.975 0 012.925 7.06v227.89"
        />
        <path
          id="Product-Windows"
          d="M503.513 223.75v34.974a10 10 0 01-4.989 8.654l-16.176 9.367a10 10 0 00-4.989 8.654v757.491a9.98 9.98 0 002.928 7.07l228.225 228.3a10.01 10.01 0 012.928 7.07v482.42"
        />
        <path
          id="Product-SleepingBag"
          d="M695.457 223.75v69.629c0 5.523 4.477 10 10 10h36.548c5.523 0 10 4.478 10 10v482.928a10 10 0 002.925 7.067l145.373 145.534a10 10 0 012.926 7.067v812.165"
        />
        <path
          id="Product-NylonBags"
          d="M695.457 223.75v70.374c0 5.523 4.477 10 10 10h21.107c5.523 0 10 4.477 10 10v507.843a10 10 0 002.925 7.067l160.814 160.991a10 10 0 012.926 7.067v771.118"
        />
        <path
          id="Product-Cloths"
          d="M695.457 223.75v74.426a10 10 0 004.985 8.652l18.301 10.609a10 10 0 014.985 8.652v500.604a10 10 0 002.925 7.067l173.65 173.84a10.017 10.017 0 012.926 7.07v753.54"
        />
        <path
          id="Product-Thread"
          d="M695.457 223.75v31.193a10 10 0 008.737 9.92l30.474 3.881a10 10 0 018.737 9.92v531.947a10 10 0 002.925 7.067l153.974 154.144a10 10 0 012.925 7.067v789.221"
        />
      </g>
    </svg>
  );
};
