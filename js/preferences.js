//selectors
const allergies = document.getElementById("allergies");
const btn = document.querySelector(".sign-in-btn");
let frequencies = Array.from(document.getElementsByName("freq"));
let packages = Array.from(document.getElementsByName("pack"));

const chosenOptions = (arr) => {
  let selectedEl;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked === true) {
      selectedEl = arr[i].value;
    }
  }
  return selectedEl;
};

const userPrefer = () => {
  const userPreferences = {
    allergies: allergies.value == "" ? "None" : allergies.value,
    frequencies:
      chosenOptions(frequencies) == undefined
        ? "Not Selected"
        : chosenOptions(frequencies),
    packages:
      chosenOptions(packages) == undefined
        ? "Not Selected"
        : chosenOptions(packages),
  };

  const currentQueryStr = window.location.search;

  const currentQuerySubStr = currentQueryStr.substring(
    currentQueryStr.indexOf("?"),
    currentQueryStr.length
  );

  window.location.href = `/result.html?
  ${currentQuerySubStr}
  &allergies=${userPreferences.allergies}
  &frequency=${userPreferences.frequencies}
  &package=${userPreferences.packages}`;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  userPrefer();
});
