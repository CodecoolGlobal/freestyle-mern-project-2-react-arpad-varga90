import { useAuthState } from "react-firebase-hooks/auth";
import { deleteStamp, setDoneStamp } from "../../../service/stamps";
import { HikeRoute } from "../../../types/hike-routes";
import auth from "../../../firebase/auth";
import { useState } from "react";

export default function HikeRouteDetails({ detail }: { detail: HikeRoute }) {
  const [user] = useAuthState(auth);
  const [isChecked, setIsChecked] = useState(false);

  function handleAddComment(hp_id: string) {
    if (user && !isChecked) {
      const stamp = {
        id:user.uid+hp_id,
        hp_id: detail.attributes.kezdopont_bh_id,
        uid: user.uid,
      };
      setDoneStamp(stamp);
      setIsChecked(true);
    } else if (user && isChecked) {
      setIsChecked(false);
      deleteStamp(user.uid+hp_id);
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
                handleAddComment(detail.attributes.kezdopont_bh_id);
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
