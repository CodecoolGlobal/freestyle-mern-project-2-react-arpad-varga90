import { useEffect, useState } from "react";
import { StampPointData } from "../Types/types";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchPoints = async (id: string) => {
  const BASE_URL = `https://turistaterkepek.hu/server/rest/services/orszagos_kektura/kekturahu/MapServer/0/query?text=${id}&outFields=*&returnGeometry=false&f=pjson`;
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

export default function StampPoint() {
  const { id } = useParams<{ id: string }>();
  const query = useQuery({
    queryKey: ["points", id],
    queryFn: () => fetchPoints(id!),
  });

  return (
    <div>
      {query.data?.features.map(
        (point: StampPointData) =>
          point.attributes.bh_id === id && (
            <div key={point.attributes.objectid}>
              <h2>{point.attributes.bh_nev}</h2>
              <p>{point.attributes.helyszin}</p>
              <img
                src={point.attributes.url_kep_1}
                alt={point.attributes.bh_nev}
              />
            </div>
          )
      )}
    </div>
  );
}

/*
"https://turistaterkepek.hu/server/rest/services/orszagos_kektura/kekturahu/MapServer/0/query?text=OKTPH&outFields=objectid%2C+sorszam%2C+url_lenyomat%2C+bh_id%2C+bh_nev%2C+helyszin%2C+helyszin_leiras%2C+url_kep_1%2C+url_kep_2%2C+url_kep_3%2C+url_kep_4%2C+url_kep_5%2C+lat%2C+lon&returnGeometry=false&returnTrueCurves=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=sorszam&groupByFieldsForStatistics=&returnZ=false&returnM=false&returnDistinctValues=false&returnExtentOnly=false&sqlFormat=none&featureEncoding=esriDefault&f=pjson";
https://turistaterkepek.hu/server/rest/services/orszagos_kektura/kekturahu/MapServer/0/query?where=sorszam=${id}&outFields='&returnGeometry=false&f=pjson
*/
