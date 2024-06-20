import { useAuthState } from "react-firebase-hooks/auth";
import { useHikeRoute } from "../../data/utils";
import useStamp from "../../hooks/useStamp";
import HikeRouteDetails from "./components/HikeRouteDetails";
import auth from "../../firebase/auth";
import useLike from "../../hooks/useLike";
import useLikeNum from "../../hooks/useLikeNum";

export default function MainContainerPage() {
  const { data } = useHikeRoute();
  const [user] = useAuthState(auth);
  const [stamps] = useStamp(user ? user!.uid : "");
  const [likes] = useLike(user ? user!.uid : "");
  const [likesNum] = useLikeNum();

  const dataOnFire = data?.features.map((detail) => {
    let isChecked = false;
    let isLiked = false;
    let likeNum = 0;
    if (stamps) {
      stamps.forEach((stamp) => {
        if (stamp.bhszakasz_id === detail.attributes.bhszakasz_id) {
          isChecked = true;
        }
      });
    }
    if (likes) {
      likes.forEach((like) => {
        if (like.bhszakasz_id === detail.attributes.bhszakasz_id) {
          isLiked = true;
        }
      });
    }
    if (likesNum) {
      likesNum.forEach((like) => {
        if (like.bhszakasz_id === detail.attributes.bhszakasz_id) {
          likeNum += 1;
        }
      });
    }
    return { isChecked: isChecked, isLiked: isLiked, likeNum: likeNum };
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
                  <input type="checkbox" className="checkbox" />
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
              />
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
