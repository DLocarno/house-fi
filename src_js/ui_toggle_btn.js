

// Define function to create toggle map btns
function createToggleBtn(parentDiv, divControlled, btnText, toggleFunc) {
    var btn = document.createElement("button");
    btn.classList.add("toggle_btn");
    btn.innerText = btnText;
    btn.value = divControlled;
    btn.onclick = function () { toggleFunc(divControlled) };
    document.getElementById(parentDiv).appendChild(btn);
    return btn;
}

// Define toggle map functionality--used to change the 'active' map div/SVG that's displayed
function toggleMap(divName) {
    if (divName == MAP_DIVS[0].id && activeMap != MAP_DIVS[0].id) {
        document.getElementById(MAP_DIVS[0].id).style.display = "initial";
        document.getElementById(MAP_DIVS[1].id).style.display = "none";
        document.getElementById(MAP_DIVS[2].id).style.display = "none";
        activeMap = MAP_DIVS[0].id;
        setSliderDates(valueStartYear, valueEndYear);
    }
    else if (divName == MAP_DIVS[1].id && activeMap != MAP_DIVS[1].id) {
        document.getElementById(MAP_DIVS[0].id).style.display = "none";
        document.getElementById(MAP_DIVS[1].id).style.display = "initial";
        document.getElementById(MAP_DIVS[2].id).style.display = "none";
        activeMap = MAP_DIVS[1].id;
        setSliderDates(incomeStartYear, incomeEndYear);
    }
    else if (divName == MAP_DIVS[2].id && activeMap != MAP_DIVS[2].id) {
        document.getElementById(MAP_DIVS[0].id).style.display = "none";
        document.getElementById(MAP_DIVS[1].id).style.display = "none";
        document.getElementById(MAP_DIVS[2].id).style.display = "initial";
        activeMap = MAP_DIVS[2].id;
        setSliderDates(combinedStartYear, combinedEndYear);
    }
    // Function call to switch the styling of active toggle button
    styleActiveToggleBtn();
}

// Change the styling of toggle buttons, depending on active/inactive status
function styleActiveToggleBtn() {
    var btns = Array.from(document.getElementsByClassName("toggle_btn"));
    btns.forEach(b => {
        if (b.value == activeMap) {
            b.style.backgroundColor = "steelblue";
            b.style.borderColor = "steelblue";
        }
        else {
            b.style.backgroundColor = "cornflowerblue";
            b.style.borderColor = "cornflowerblue";
        }
    });
}