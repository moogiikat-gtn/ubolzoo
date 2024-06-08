export const DatesCategoryFilter: React.FC = () => {
  const options = [{ label: "Historical Sites", value: "" }];
  return (
    <select className="select w-full max-w-xs">
      <option disabled selected>
        Select category
      </option>
      <option>Historical Sites</option>
    </select>
  );
};
