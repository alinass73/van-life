import { NavLink, Outlet } from "react-router-dom";

export default function ProfilePages() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>Profile Pages</h1>
      <div className="flex ">
        <div className="flex flex-col gap-2">
          {profiles.map((profile) => (
            
              <NavLink
                key={profile}
                profile={profile}
                className={({ isActive }) => {
                  return isActive ? " text-green-700" : "";
                }}
                to={`/profiles/${profile}`}
              >
                profile {profile}
              </NavLink>
            
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}
