import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHikeRoute } from "../../data/utils";
import useStamp from "../../hooks/useStamp";
import HikeRouteDetails from "./components/HikeRouteDetails";
import { HikeRoute } from "../../types/hike-routes";
import auth from "../../firebase/auth";
import useLike from "../../hooks/useLike";
import useLikeNum from "../../hooks/useLikeNum";
import kekkorImg from "../../assets/kekkor.jpg";

export default function MainContainerPage() {
  const [isRoutPlanning, setisRoutPlanning] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState({});

  function handleRowClick(detail: HikeRoute) {
    setSelectedDetail(detail);
    console.log(selectedDetail);
  }
  const { data } = useHikeRoute();
  const [user] = useAuthState(auth);
  const [stamps] = useStamp(user ? user!.uid : "");
  const [likes] = useLike(user ? user!.uid : "");
  const [likesNum] = useLikeNum();

  const dataOnFire = data?.features.map((detail) => {
    const bhId = detail.attributes.bhszakasz_id;

    const isChecked =
      stamps?.some((stamp) => stamp.bhszakasz_id === bhId) ?? false;

    const isLiked = likes?.some((like) => like.bhszakasz_id === bhId) ?? false;

    const likeNum =
      likesNum?.reduce(
        (acc, curr) => (curr.bhszakasz_id === bhId ? acc + 1 : acc),
        0
      ) ?? 0;

    return {
      isChecked,
      isLiked,
      likeNum,
    };
  });

  return (
    <div className="flex flex-col items-center bg-green-100 ml-[20%] w-[80%] h-full p-4 overflow-hidden">
      {/* Image div */}
      <img
        className="h-[30%] mb-4 object-scale-down"
        src={kekkorImg}
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
                  <input id="select-all" type="checkbox" className="checkbox" />
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
                dataOnFire={dataOnFire![index]}
                onRowClick={handleRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* Buttons */}
      <div>
        {!isRoutPlanning ? (
          <button
            className="btn bg-blue-500 my-2"
            onClick={() => setisRoutPlanning(true)}
          >
            Útvonaltervezés
          </button>
        ) : (
          <button
            className="btn bg-blue-500 my-2"
            onClick={() => setisRoutPlanning(false)}
          >
            Válassz 2 helyet
          </button>
        )}
      </div>
    </div>
  );
}
