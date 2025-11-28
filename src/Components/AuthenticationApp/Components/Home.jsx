import Dashboard from "./Dashboard";

const HomePageStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const Home = () => {
  return (
    <div style={HomePageStyle}>
      {/* <SideNav /> */}
      <Dashboard />
    </div>
  );
};

export default Home;
