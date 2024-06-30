import "./App.css";
import Header from "./Header";
import Staff from "./Staff";
import Footer from "./Footer";
import GroupedMembers from "./GroupedMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [selectedGroup, setGroup] = useState(
    JSON.parse(localStorage.getItem("selectedGroup")) || "GroupB",
  );

  const [staff, setStaff] = useState(
    JSON.parse(localStorage.getItem("staff")) || [
      {
        id: 1,
        FullName: "Kenny Idoowu",
        Designation: "DevOps Enginer",
        Gender: "Male",
        DateOfBirth: "1992-03-10",
        GroupName: "GroupA",
      },
      {
        id: 2,
        FullName: "Peter Duke",
        Designation: "Graphics Designer",
        Gender: "Male",
        DateOfBirth: "1991-05-08",
        GroupName: "GroupA",
      },
      {
        id: 3,
        FullName: "Mercy Odinaka",
        Designation: "Node.js Developer",
        Gender: "Femaale",
        DateOfBirth: "1994-11-06",
        GroupName: "GroupA",
      },
      {
        id: 4,
        FullName: "Jenet Philips",
        Designation: "Javascript Developer",
        Gender: "Femaale",
        DateOfBirth: "1992-07-12",
        GroupName: "GroupB",
      },
      {
        id: 5,
        FullName: "Anny Sunday",
        Designation: "React Developer",
        Gender: "Female",
        DateOfBirth: "1995-03-07",
        GroupName: "GroupB",
      },
      {
        id: 6,
        FullName: "Popoola Akim",
        Designation: "Java Developer",
        Gender: "Male",
        DateOfBirth: "1990-03-12",
        GroupName: "GroupB",
      },
      {
        id: 7,
        FullName: "Benneth Ikpumele",
        Designation: "Junior CyberSecurity Analyst",
        Gender: "Male",
        DateOfBirth: "1994-01-11",
        GroupName: "GroupC",
      },
      {
        id: 8,
        FullName: "Okpomechile Bright",
        Designation: "Vue Developer",
        Gender: "Female",
        DateOfBirth: "1993-01-02",
        GroupName: "GroupC",
      },
      {
        id: 9,
        FullName: "Dickson David",
        Designation: "Angular Developer",
        Gender: "Male",
        DateOfBirth: "1991-04-10",
        GroupName: "GroupC",
      },
      {
        id: 10,
        FullName: "Nelson Ikemba",
        Designation: "Graphics Designer",
        Gender: "Male",
        DateOfBirth: "1990-04-08",
        GroupName: "GroupD",
      },
      {
        id: 11,
        FullName: "Nnamdi Chukwudi",
        Designation: "Java Developer",
        Gender: "Male",
        DateOfBirth: "1993-07-10",
        GroupName: "GroupD",
      },
      {
        id: 12,
        FullName: "Maryann Otuu",
        Designation: "Senior DevOps",
        Gender: "Female",
        DateOfBirth: "1995-11-11",
        GroupName: "GroupD",
      },
    ],
  );

  useEffect(() => {
    localStorage.setItem("staff", JSON.stringify(staff));
  }, [staff]);

  useEffect(() => {
    localStorage.setItem("selectedGroup", JSON.stringify(selectedGroup));
  }, [selectedGroup]);

  function handleGroupSelectionChange(event) {
    console.log(event.target.value);
    setGroup(event.target.value);
  }

  function handleStaffCardClick(event) {
    const transformedStaff = staff.map((staff) =>
      staff.id === parseInt(event.currentTarget.id)
        ? staff.GroupName === selectedGroup
          ? { ...staff, GroupName: "" }
          : { ...staff, GroupName: selectedGroup }
        : staff,
    );

    setStaff(transformedStaff);
  }

  return (
    <Router>
      <Nav />
      <Header
        selectedGroup={selectedGroup}
        groupMemberCount={
          staff.filter((staff) => staff.GroupName === selectedGroup).length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Staff
              staff={staff}
              selectedGroup={selectedGroup}
              handleStaffCardClick={handleStaffCardClick}
              handleGroupSelectionChange={handleGroupSelectionChange}
            />
          }
        />

        <Route path="/GroupedMembers" element={<GroupedMembers staff={staff}  GroupedMembers={GroupedMembers} setGroup={setGroup} />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
