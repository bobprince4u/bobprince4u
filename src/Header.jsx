const Header = ({selectedGroup, groupMemberCount}) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
      <h1>Group Member Allocation</h1>
      <h3>{selectedGroup} has {groupMemberCount} Members</h3>
      </div>
      </div>
      </div>
  );
};

export default Header;
