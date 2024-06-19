export default function MainContainer() {
  return (
      <img
        className="h-[30%] mb-4 object-scale-down"
        src="./src/assets/kekkor.jpg"
        alt="image-about-kekor"
      />
      {/* Stamp list */}
      <div className="h-[42%] w-[90%] overflow-y-auto">
        <table className="table table-md table-pin-rows">
          <thead>
            <tr>
              <th></th>
              <th>Bélyegzőhely ID</th>
              <th>Táv(km)</th>
              <th>Menetidő(óó:pp)</th>
              <th>Szint +/- (m)</th>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      {/* Buttons */}
    </div>
  );
}
