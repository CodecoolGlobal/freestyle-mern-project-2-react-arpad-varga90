import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHikeRoute } from "../../data/utils";
import useStamp from "../../hooks/useStamp";
import HikeRouteDetails from "./components/HikeRouteDetails";
import { HikeRoute } from "../../types/hike-routes";
import auth from "../../firebase/auth";

export default function MainContainerPage() {
  
    const [isClicked, setIsClicked] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState({});
  
    function handleRowClick(detail: HikeRoute) {
      setSelectedDetail(detail);
      console.log(detail.attributes.sorszam);
    }
    const { data } = useHikeRoute();
    const [user] = useAuthState(auth);
    const [stamps] = useStamp(user ? user!.uid : "");

    const dataChecks = data?.features.map((detail) => {
      let isChecked = false;
      if (stamps) {
        stamps.forEach((stamp) => {
          if (stamp.bhszakasz_id === detail.attributes.bhszakasz_id) {
            isChecked = true;
          }
        });
      }
      return isChecked;
    });

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
                <th>
                  <label>
                    <input
                      id="select-all"
                      type="checkbox"
                      className="checkbox"
                    />
                  </label>
                </th>
                <th>Szakasznév</th>
                <th>Táv(km)</th>
                <th>Menetidő(óó:pp)</th>
                <th>Szint +/- (m)</th>
                <th>Like</th>
              </tr>
            </thead>
            <tbody>
              {data?.features.map((detail, index) => (
                <HikeRouteDetails
                  key={index}
                  detail={detail}
                  onRowClick={handleRowClick}
                  isChecked={dataChecks![index]}
                  liked={false}
                  likeNum={123}
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
}
