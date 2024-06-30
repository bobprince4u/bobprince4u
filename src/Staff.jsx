
import Female from "./images/Female.jpg";
import Male from "./images/Male.jpg";

const Staff = ( {staff,
               selectedGroup,
               handleStaffCardClick,
               handleGroupSelectionChange}) => {
  
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedGroup}
            onChange={handleGroupSelectionChange}
          >
            <option value="GroupA">GroupA</option>
            <option value="GroupB">GroupB</option>
            <option value="GroupC">GroupC</option>
            <option value="GroupD">GroupD</option>
           
          </select>
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {staff.map((staff) => (
              <div key={staff.id}
                id={staff.id}
                className={(staff.GroupName === selectedGroup ? 'card m-2 standout' : 'card m-2')}
                style={{ cursor: "pointer" }} onClick={ handleStaffCardClick}>
                {staff.Gender === "Female" ? (
                  <img src={Female} className="card-img-top" />
                ) : (
                  <img src={Male} className="card-img-top" />
                )}
                <div className="card-body">
                  <h5 className="card-title">Full Name: {staff.FullName}</h5>
                  <p className="card-text">
                    <b> Designation: </b>
                    {staff.Designation}
                  </p>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </main>
  );
};

export default Staff;
