//import { useHikeRouteDetails } from "../../../data/utils";
import { HikeRoute } from "../../../types/hike-routes";

export default function HikeRouteDetails({ detail }: { detail: HikeRoute }) {
  /*
  const { data, isFetched, error } = useHikeRouteDetails(
    detail.attributes.sorszam
  );

  if (isFetched && !error) {
    data?.features.forEach((item) => console.log(item.attributes));
  }
  */

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
          <input
            id={`${detail.attributes.sorszam}`}
            type="checkbox"
            className="checkbox"
          />
        </label>
      </td>
    </tr>
  );
}
