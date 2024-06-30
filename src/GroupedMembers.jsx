import { useState } from "react";

const GroupedMembers = ({ staff, setGroup }) => {
  const [selectedGroup, setSelectedGroup] = useState("GroupA");

  // Initialize with a default group

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    setGroup(event.target.value);
  };

  const filteredStaff = staff.filter(
    (member) => member.GroupName === selectedGroup,
  );

  console.log("Staff:", staff);

  return (
    <main className="container rounded-3 mb-5">
      <div className="row justify-content-center mt-3 mb-3 bg-light">
        <div className="col-8">
          <h1></h1>

          {/* Dropdown for selecting a group */}
          <div className="select-group mb-3 text-success">
            <select
              value={selectedGroup}
              onChange={handleGroupChange}
              className="form-select form-select-lg"
            >
              <option className="option-select" value="GroupA">
                GroupA
              </option>
              <option className="option-select" value="GroupB">
                GroupB
              </option>
              <option className="option-select" value="GroupC">
                GroupC
              </option>
              <option className="option-select" value="GroupD">
                GroupD
              </option>
            </select>
          </div>

          {/* Display the members of the selected group */}
          <ul>
            {filteredStaff.map((member) => (
              <li key={member.id}>
                {member.FullName} - {member.Designation}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default GroupedMembers;
