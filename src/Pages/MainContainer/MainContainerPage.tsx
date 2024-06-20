import { useState } from "react";
import { useHikeRoute } from "../../data/utils";
import HikeRouteDetails from "./components/HikeRouteDetails";
import { HikeRoute } from "../../types/hike-routes";

export default function MainContainer() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState({});

  function handleRowClick(detail: HikeRoute) {
    setSelectedDetail(detail);
    console.log(detail.attributes.sorszam);
  }

  const { data } = useHikeRoute();

  return (
    <div className="flex flex-col items-center bg-green-100 ml-[20%] w-[80%] h-full p-4 overflow-hidden">
      {/* Image div */}
      <img
        className="h-[30%] mb-4 object-scale-down"
        src="./src/assets/kekkor.jpg"
        alt="image-about-kekor"
      />
      {/* Stamp list */}
      <div className="h-[42%] w-[90%] overflow-y-auto">
        <table className="table table-md table-pin-rows">
          <thead>
            <tr>
              <th></th>
              <th>Szakasznév</th>
              <th>Táv(km)</th>
              <th>Menetidő(óó:pp)</th>
              <th>Szint +/- (m)</th>
              <th>
                <label>
                  <input id="select-all" type="checkbox" className="checkbox" />
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.features.map((detail, index) => (
              <HikeRouteDetails
                key={index}
                detail={detail}
                onRowClick={handleRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* Buttons */}
      <div>
        {!isClicked ? (
          <button
            className="btn bg-green-600 my-2"
            onClick={() => setIsClicked(true)}
          >
            Útvonaltervezés
          </button>
        ) : (
          <button
            className="btn bg-green-600 my-2"
            onClick={() => setIsClicked(false)}
          >
            Válassz 2 helyet
          </button>
        )}
      </div>
    </div>
  );
}
