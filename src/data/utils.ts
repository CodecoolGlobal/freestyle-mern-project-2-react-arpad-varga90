import { useQuery } from "@tanstack/react-query";
import { HikeRoutes } from "../types/hike-routes";

async function fetchHikeRoute(): Promise<HikeRoutes> {
  const URL =
    "https://turistaterkepek.hu/server/rest/services/orszagos_kektura/kekturahu/MapServer/1/query?text=OKT&returnGeometry=false&outFields=sorszam%2Cnagyszakasz_id%2Cbhszakasz_id%2Ckezdopont%2Cvegpont%2Cszakasznev%2Ctav%2Cszintemelkedes%2Cszintcsokkenes%2Cszintido_oda%2Cszintido_vissza%2Ckezdopont_bh_id%2Cvegpont_bh_id&orderByFields=sorszam&f=pjson";
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export function useHikeRoute() {
  return useQuery({
    queryKey: ["hikeRoute"],
    queryFn: fetchHikeRoute,
    refetchOnWindowFocus: false,
  });
}

/****************************************************************************************/
async function fetchHikeRouteDetails(id: number): Promise<HikeRoutes> {
  const URL = `https://turistaterkepek.hu/server/rest/services/orszagos_kektura/kekturahu/MapServer/0/query?where=&text=${id}&outFields=*&returnGeometry=false&returnTrueCurves=false&returnIdsOnly=false&returnCountOnly=false&orderByFields=&returnZ=false&returnM=false&returnDistinctValues=false&returnExtentOnly=false&sqlFormat=none&f=pjson`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export function useHikeRouteDetails(bh_id: number) {
  return useQuery({
    queryKey: ["hikeRoute", bh_id],
    queryFn: () => fetchHikeRouteDetails(bh_id),
    refetchOnWindowFocus: false,
  });
}
