export const DatesCategoryFilter: React.FC = () => {
  const options = [
    { label: "Historical sites", value: "historical_sites" },
    { label: "Scenic spots", value: "scenic_spots" },
    { label: "Lounges", value: "lounges_restaurants" },
    { label: "Shopping", value: "shopping" },
    { label: "Restaurants", value: "restaurant" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Cinemas", value: "cinemas" },
    { label: "Libraries", value: "libraries" },
    { label: "National parks", value: "national_parks" },
    { label: "Set", value: "set" },
  ];
  return (
    <select className="select w-full max-w-xs">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
