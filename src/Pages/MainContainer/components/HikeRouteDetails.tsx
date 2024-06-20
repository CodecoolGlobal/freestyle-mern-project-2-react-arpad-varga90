import { useHikeRouteDetails } from "../../../data/utils";
import { HikeRoute } from "../../../types/hike-routes";

export default function HikeRouteDetails({ detail }: { detail: HikeRoute }) {
  const { data } = useHikeRouteDetails(detail.attributes.kezdopont_bh_id);
  console.log(data?.features);
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
          <input type="checkbox" className="checkbox" />
        </label>
      </td>
    </tr>
  );
}
