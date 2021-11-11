import React from "react";

const PostGuards = ({ siteId, deployed }) => {
  const result = deployed.filter((guard) => guard.site === siteId);
  console.log("Filtered out Guards ===>", result);
  return (
    <div>
      <p>These are the Post Guards Posted </p>
      {/* {result.guard.length > 0
        ? result.guard.map((person) => (
            <li>
              {person.firstname} {person.lastname}
            </li>
          ))
        : "No Guards Yet"} */}

        {siteId}
    </div>
  );
};

export default PostGuards;
