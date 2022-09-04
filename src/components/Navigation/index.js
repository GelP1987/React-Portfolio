import React from "react";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="icon">
            {" "}
            🧙‍♂️
          </span>{" "}
          Philip Gelin's Web Dev Portfolio (Now with React!)
        </a>
      </h2>
      <nav>
        <ul>
          {categories.map((category) => (
            <li
              className={`${
                currentCategory.name === category.name &&
                !contactSelected &&
                !resumeSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                  setResumeSelected(false);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
          <li className={`${contactSelected && "navActive"}`}>
            <span
              onClick={() => {
                setContactSelected(true);
                setResumeSelected(false);
              }}
            >
              Contact
            </span>
          </li>
          <li className={`${resumeSelected && "navActive"}`}>
            <span
              onClick={() => {
                setContactSelected(false);
                setResumeSelected(true);
              }}
            >
              Resume
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
