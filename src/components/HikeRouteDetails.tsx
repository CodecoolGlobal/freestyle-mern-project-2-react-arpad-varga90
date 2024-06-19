import { HikeRoute } from "../types/hike-routes";

export default function HikeRouteDetails({ detail }: { detail: HikeRoute }) {
  return (
    <tr className="hover">
      <td>{detail.attributes.sorszam}</td>
      <td>{detail.attributes.bhszakasz_id}</td>
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
