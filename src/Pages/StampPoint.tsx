import { useEffect, useState } from "react";
import { StampPointData } from "../Types/types";

const BASE_URL =
  "https://turistaterkepek.hu/server/rest/services/orszagos_kektura/kekturahu/MapServer/0/query?text=OKTPH&outFields=objectid%2C+sorszam%2C+url_lenyomat%2C+bh_id%2C+bh_nev%2C+helyszin%2C+helyszin_leiras%2C+url_kep_1%2C+url_kep_2%2C+url_kep_3%2C+url_kep_4%2C+url_kep_5%2C+lat%2C+lon&returnGeometry=false&returnTrueCurves=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=sorszam&groupByFieldsForStatistics=&returnZ=false&returnM=false&returnDistinctValues=false&returnExtentOnly=false&sqlFormat=none&featureEncoding=esriDefault&f=pjson";

export default function StampPoint() {
  const [points, setPoints] = useState<StampPointData[]>([]);
  useEffect(() => {
    const fetchPoints = async () => {
      const response = await fetch(`${BASE_URL}/points`);
      const data = await response.json();
      setPoints(data);
    };
    fetchPoints();
  }, []);

  return (
    <div>
      {points.map((point: StampPointData) => (
        <div key={point.attributes.objectid}>
          <h2>{point.attributes.bh_nev}</h2>
          <p>{point.attributes.helyszin}</p>
          <img src={point.attributes.url_kep_1} alt={point.attributes.bh_nev} />
        </div>
      ))}
    </div>
  );
}
