import { useHikeRoute } from "../../data/utils";
import HikeRouteDetails from "./components/HikeRouteDetails";

export default function MainContainerPage() {
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
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.features.map((detail, index) => (
              <HikeRouteDetails key={index} detail={detail} />
            ))}
          </tbody>
        </table>
      </div>
      {/* Buttons */}
      <div>
        <button className="btn bg-green-600 my-2">Útvonaltervezés</button>
      </div>
    </div>
  );
}
