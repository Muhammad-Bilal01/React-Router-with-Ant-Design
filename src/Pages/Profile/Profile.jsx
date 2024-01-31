import { useLocation, useParams, useSearchParams } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const { username } = useParams(); // used to find out dynamic path
  const [params, setParams] = useSearchParams();
  console.log(location);
  return (
    <div>
      <h1>Profile: {username} </h1>
      <button
        onClick={() => {
          params.set("name", "bilal");
          setParams(params);
          console.log("Updated");
        }}
      >
        Update Search Params
      </button>
    </div>
  );
}

export default Profile;
