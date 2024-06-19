import { useQuery } from "@tanstack/react-query";
import { HikeRoutes } from "../types/hike-routes";

async function fetchHikeRoute(): Promise<HikeRoutes> {
  const URL = `https://turistaterkepek.hu/server/rest/services/orszagos_kektura/kekturahu/MapServer/1/query?text=OKT&returnGeometry=false&outFields=sorszam%2Cnagyszakasz_id%2Cbhszakasz_id%2Ckezdopont%2Cvegpont%2Cszakasznev%2Ctav%2Cszintemelkedes%2Cszintcsokkenes%2Cszintido_oda%2Cszintido_vissza%2Ckezdopont_bh_id%2Cvegpont_bh_id&orderByFields=sorszam&f=pjson`;
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
