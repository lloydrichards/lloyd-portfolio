import React from "react";
import Layout from "../../components/Layout";
import { nanoid } from "nanoid";
import {
  Garbage,
  Grind,
  Pellet,
  Product,
} from "../../components/animejs/garbage";

interface AssemblyLine {
  garbage: Array<GarbageType>;
  grinds: Array<GrindType>;
  pellets: Array<PelletType>;
  products: Array<ProductType>;
}

interface GarbageType {
  id: string;
  highlight: boolean;
}
interface GrindType {
  id: string;
  type: string;
  highlight: boolean;
}
interface PelletType {
  id: string;
  type: string;
  highlight: boolean;
}
interface ProductType {
  id: string;
  type: string;
  highlight: boolean;
}

export const Experiment007 = () => {
  const [state, setState] = React.useState<AssemblyLine>({
    garbage: [],
    grinds: [],
    pellets: [],
    products: [],
  });

  const addGarbage = () => {
    const newId = nanoid();
    setState((state) => {
      const garbage = state.garbage.concat({ id: newId, highlight: false });
      console.log("Garbage Added");
      return { ...state, garbage };
    });
  };
  const addGrind = () => {
    const newId = nanoid();
    const newType = Math.ceil(Math.random() * 2);
    setState((state) => {
      const grinds = state.grinds.concat({
        id: newId,
        type: `grind${newType}`,
        highlight: false,
      });
      console.log(`Grind-${newType} Added`);
      return { ...state, grinds };
    });
  };
  const addPellet = () => {
    const newId = nanoid();
    const newType = Math.ceil(Math.random() * 2);
    setState((state) => {
      const pellets = state.pellets.concat({
        id: newId,
        type: `pellet${newType}`,
        highlight: false,
      });
      console.log(`Pellets-${newType} Added`);
      return { ...state, pellets };
    });
  };
  const addProduct = () => {
    const newId = nanoid();
    const newType = Math.ceil(Math.random() * 3);
    setState((state) => {
      const products = state.products.concat({
        id: newId,
        type: `product${newType}`,
        highlight: false,
      });
      console.log(`Products-${newType} Added`);
      return { ...state, products };
    });
  };

  return (
    <Layout title="Experiment | 007">
      <h2>007 - Little SVG System </h2>
      <h4>Date: June 3rd 2020</h4>
      <p>
        The plan with this is to have a small system of pipes and boxes that
        move around in a circle. There needs to be multiple paths that it can
        take with an input, a cycling feature, and a garbage. The plan is:
      </p>
      <ol>
        <li>Create SVG paths in Figma that lead around in a few ways.</li>
        <li>Add a few buttons to add a square, pause, and reset</li>
        <li>Add probability to move between different lines</li>
        <li>Add state for garbage collected overtime</li>
        <li>
          (optional) Add the ability to remove a pipe which will cause the
          squares to fall to the garbage
        </li>
      </ol>
      <p>Lets jump into this!</p>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => {
            addGarbage();
            console.log("Added");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1000,
            left: 100,
            backgroundColor: "green",
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            console.log("Paused");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1000,
            left: 350,
            backgroundColor: "blue",
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            console.log("Reset");
          }}
          style={{
            zIndex: 5,
            position: "absolute",
            top: 1000,
            left: 500,
            backgroundColor: "red",
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ width: 800, height: 2000 }}>
        {state.garbage.map((item) => (
          <Garbage
            key={item.id}
            id={item.id}
            pathRef={"#garbage-svg path"}
            onComplete={addGrind}
          />
        ))}
        {state.grinds.map((item) => (
          <Grind
            key={item.id}
            id={item.id}
            pathRef={`#${item.type}-svg path`}
            onComplete={addPellet}
          />
        ))}
        {state.pellets.map((item) => (
          <Pellet
            key={item.id}
            id={item.id}
            pathRef={`#${item.type}-svg path`}
            onComplete={addProduct}
          />
        ))}
        {state.products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            pathRef={`#${item.type}-svg path`}
            onComplete={addGarbage}
          />
        ))}
        <div style={{ position: "relative" }}>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="product1-svg"
          >
            <path
              d="M211.5 466v110.5c0 16.569-13.431 30-30 30h-31c-16.569 0-30 13.431-30 30v223c0 16.569 13.431 30 30 30H196c16.569 0 30 13.431 30 30V935"
              fill="none"
              stroke="purple"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="pellet1-svg"
          >
            <path
              d="M540 1847.5v9.5c0 16.57 13.431 30 30 30h72c16.569 0 30-13.43 30-30V320.5c0-16.569-13.431-30-30-30H239.5c-16.569 0-30 13.431-30 30v123"
              fill="none"
              stroke="blue"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="product3-svg"
          >
            <path
              d="M426 470h119c16.569 0 30 13.431 30 30v109.5c0 9.665-7.835 17.5-17.5 17.5v0c-9.665 0-17.5 7.835-17.5 17.5v88"
              fill="none"
              stroke="orange"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="product2-svg"
          >
            <path
              d="M426 495v32c0 16.569-13.431 30-30 30h-28.5c-16.569 0-30 13.431-30 30v145.5"
              fill="none"
              stroke="red"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="pellet2-svg"
          >
            <path
              d="M426 1847.5v40.5c0 16.57 13.431 30 30 30h217c16.569 0 30-13.43 30-30V287.5c0-16.569-13.431-30-30-30H456c-16.569 0-30 13.431-30 30v156"
              fill="none"
              stroke="orange"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="grind2-svg"
          >
            <path
              d="M426 1498.5v55c0 16.57 13.431 30 30 30h54c16.569 0 30 13.43 30 30v222"
              fill="none"
              stroke="green"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="grind1-svg"
          >
            <path
              d="M426 1331.5V1448c0 16.57-13.431 30-30 30H221c-16.569 0-30 13.43-30 30v138.5c0 16.57 13.431 30 30 30h175c16.569 0 30 13.43 30 30v129"
              fill="none"
              stroke="pink"
            />
          </svg>
          <svg
            width="800"
            height="2000"
            style={{ position: "absolute" }}
            id="garbage-svg"
          >
            <path
              d="M323 1012v150.01c0 16.57 13.431 29.99 30 29.99h41.5c16.569 0 30 13.43 30 30v85"
              fill="none"
              stroke="lightblue"
            />
          </svg>
        </div>
      </div>
      <p>
        Used Figma and SVGOMG to create paths that were copy and pasted into the
        page component. Each one was given a unique id and colour to help
        identify them. Currently there are three paths:{" "}
        <pre>
          <code>{`Garbage -> Grind 1 -> Pellet 2 -Product 2
Garbage -> Grind 1 -> Pellet 2 -Product 3
Garbage -> Grind 2 -> Pellet 1 -Product 1`}</code>
        </pre>
      </p>
      <p>
        Buttons added and moved to the centre of the diagram. Had to move their
        zIndex up since they were being blocked by the SVGs when trying to
        click. Debugged with a console log to make sure everything is working.
      </p>
      <p>
        Hooked up some simple random logic that generates a new piece each time
        something gets to the end. By pressing 'Add' you can introduce parts to
        the system which will cycle around and around. Need to set up some more
        logic as well as a seperate state for the possible direction. Will also
        be usefull to figure out how to remove the elements after they complete
        as it slows down after a while.
      </p>
      <p>
        Would also be interesting to play around with the 'speed' of the
        assembly line by having a contant that can be changed which effects the
        speed proportionally. There is a method on the <code>anime.path()</code>{" "}
        that should allow to figure out its length and then use some kind of
        velocity calculated off of distance/time.
      </p>
    </Layout>
  );
};

export default Experiment007;