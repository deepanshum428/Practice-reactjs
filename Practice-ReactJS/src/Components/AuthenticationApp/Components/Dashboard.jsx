import UserProfile from "./UserProfile";

const DasboardStyle = {
  width: "100%",
  textAlign: "center",
  background: "antiquewhite",
};

const Dashboard = () => {
  return (
    <div style={DasboardStyle}>
      <UserProfile />
    </div>
  );
};

export default Dashboard;
