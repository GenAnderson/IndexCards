const Nav = ({ categorySelection }) => {
  const handleSelection = (category) => {
    categorySelection(category);
  };

  return (
    <ul className="navContainer">
      <li onClick={() => handleSelection("React")}>React</li>
      <li onClick={() => handleSelection("JS")}>JS</li>
      <li onClick={() => handleSelection("General")}>General </li>
      {/* <li onClick={() => handleSelection("dotNet")}>dotNet</li> */}
    </ul>
  );
};

export default Nav;
