import { useAuthState } from "react-firebase-hooks/auth";
import { deleteStamp, setDoneStamp } from "../../../service/stamps";
import { HikeRoute } from "../../../types/hike-routes";
import auth from "../../../firebase/auth";


export default function HikeRouteDetails({
  detail,
  isChecked
}: {
  detail: HikeRoute;
  isChecked:boolean;
}) {
  const [user] = useAuthState(auth);

  function handleCheck() {
    if (user && !isChecked) {
      const stamp = {
        id: user.uid + detail.attributes.bhszakasz_id,
        bhszakasz_id: detail.attributes.bhszakasz_id,
        uid: user.uid,
      };
      setDoneStamp(stamp);
    } else if (user && isChecked) {
      deleteStamp(user.uid + detail.attributes.bhszakasz_id);
    } else return;
  }

  return (
    <tr className="hover">
      <td>{detail.attributes.sorszam}</td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-16 h-16">
              <img
                src={`http://turistaterkepek.hu/kepek/okk_kepek/belyegzo_lenyomatok\\\\${detail.attributes.kezdopont_bh_id.toLowerCase()}.svg`}
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div>{detail.attributes.szakasznev}</div>
          </div>
        </div>
      </td>
      <td>{detail.attributes.tav}</td>
      <td>{detail.attributes.szintido_oda}</td>
      <td>{`${detail.attributes.szintemelkedes}/${detail.attributes.szintcsokkenes}`}</td>
      <td>
        <label>
          {user ? (
            <input
              type="checkbox"
              className="checkbox"
              checked={isChecked}
              onChange={() => {
                handleCheck();
              }}
            />
          ) : (
            <></>
          )}
        </label>
      </td>
    </tr>
  );
}
