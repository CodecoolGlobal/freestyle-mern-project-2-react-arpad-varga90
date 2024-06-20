import TableRow from "./components/TableRow";

export default function MainContainer() {
  const hp_ids = ["OKT-01-1", "OKT-01-2", "OKT-01-3", "OKT-01-4"];

  return (
    <div className="bg-white w-3/4 h-full p-4">
      <h1 className="text-2xl font-bold">Main Content</h1>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>Sorszám</th>
              <td>Kezdőpont</td>
              <td>Végpont</td>
              <td>Táv</td>
              <td>Emelkedés/csökkenés</td>
              <td>Szintidő</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {hp_ids.map((hp_id)=><TableRow hp_id={hp_id}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
