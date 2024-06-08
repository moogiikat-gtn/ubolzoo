import type { DataSchema } from "@/app/schemas/data";

import { LocationItem } from "./location_item";
import { CommentSchema } from "@/app/schemas/comment";

const comments: CommentSchema[][] = [
  [
    {
      author: "Bob",
      comment:
        "Had the best evening at the rooftop dinner. The ambiance was perfect for a romantic date.",
    },
    {
      author: "Susan",
      comment:
        "The moonlit rooftop dinner was absolutely enchanting! The view was breathtaking and the atmosphere was incredibly romantic.",
    },
  ],
  [
    {
      author: "Clara",
      comment:
        "An unforgettable experience! The scenic views from the hot air balloon were spectacular.",
    },
    {
      author: "James",
      comment:
        "The moonlit rooftop dinner was absolutely enchanting! The view was breathtaking and the atmosphere was incredibly romantic.",
    },
  ],
  [
    {
      author: "Cody",
      comment:
        "The vineyard tour was wonderful. Strolling through the vineyards and tasting fine wine made for a lovely romantic",
    },
    {
      author: "Jones",
      comment:
        "The river cruise dinner was amazing. The gentle cruise along the river with delicious food made it a very special night.",
    },
  ],
  [
    {
      author: "Nichole",
      comment:
        "Had the best evening at the rooftop dinner. The ambiance was perfect for a romantic date.",
    },
    {
      author: "George",
      comment:
        "The moonlit rooftop dinner was absolutely enchanting! The view was breathtaking and the atmosphere was incredibly romantic.",
    },
  ],
  [
    {
      author: "Napoleon",
      comment:
        "A perfect romantic getaway! The beach picnic under the stars was just what we needed.",
    },
    {
      author: "Pierre",
      comment:
        "The hot air balloon ride was like a dream. Floating above the landscape with my partner was incredibly romantic.",
    },
  ],
  [
    {
      author: "D'Anton",
      comment:
        "Had the best evening at the rooftop dinner. The ambiance was perfect for a romantic date.",
    },
    {
      author: "Mikhail",
      comment:
        "Our stay at the cozy cabin retreat was perfect. The secluded location and the warm fireplace made for a very romantic getaway.",
    },
  ],
];

type Props = {
  locations: DataSchema[];
};
export const Locations: React.FC<Props> = ({ locations }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-6 gap-y-8">
      {locations.map((location, index) => (
        <LocationItem
          key={location.title}
          data={location}
          comments={comments[index]}
        />
      ))}
    </div>
  );
};
