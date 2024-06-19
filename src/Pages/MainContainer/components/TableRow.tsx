import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/auth";
import { addDoneStamp } from "../../../service/stamps";
import { useState } from "react";

export default function TableRow({ hp_id }: { hp_id: string }) {
  const [user] = useAuthState(auth);
  const [isChecked, setIsChecked] = useState(false);

  function handleAddComment(hp_id: string) {
    if (user && !isChecked) {
      const stamp = {
        hp_id: hp_id!,
        uid: user.uid!,
      };
      addDoneStamp(stamp);
      setIsChecked(true)
    } else if (user && isChecked) {
      setIsChecked(false)
      //deleteStamp(id);
    } else return;
  }

  return (
    <tr key={hp_id}>
      <th>
        {user ? (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              handleAddComment(hp_id);
            }}
          />
        ) : (
          <></>
        )}
        {hp_id}
      </th>
      <td>Írott-kő</td>
      <td>Hét-forrás</td>
      <td>9.0 km</td>
      <td>145/590 m</td>
      <td>2:30 / 3:10</td>
    </tr>
  );
}
