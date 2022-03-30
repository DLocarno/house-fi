// Tool tip html.  Contains different HTML layout depending on
// whether or not the specified start and end year is the same
function updateToolTip(d) {
    var toolTipData = "";
    var rateProperty = "";
    var numProperty = "";
    var startYear = "";
    var endYear = "";
    var activeRateData = {};
    if (activeMap == MAP_DIVS[0].id) {
        rateProperty = "Change in Median Home Value:";
        numProperty = "Median Home Value:";
        startYear = valueStartYear;
        endYear = valueEndYear;
        activeRateData = medianValueRates;
    }
    else if (activeMap == MAP_DIVS[1].id) {
        rateProperty = "Change in Median Income:";
        numProperty = "Median Income:";
        startYear = incomeStartYear;
        endYear = incomeEndYear;
        activeRateData = medianIncomeRates;
    }
    else if (activeMap == MAP_DIVS[2].id) {
        rateProperty = "Apprx. Housing Market Inflation:";
        startYear = combinedStartYear;
        endYear = combinedEndYear;
        for (var key in combinedRates) {
            activeRateData[key] = combinedRates[key] * -1;
        }
    }
    if (startYear == endYear) {
        toolTipData =
            "<div class=\"p\">County / Municipality: " + "</div > " +
            "<div class=\"v\">" + d.properties['NAME'] + "</div>" +
            "<div class=\"p\">State / Territory:</div>" +
            "<div class=\"v\">" + d.properties['STATE_NAME'] + "</div>" +
            "<div id=\"year\">Year: " + String(startYear) + "</div>" +
            "<div class=\"p\">" + rateProperty + "</div>" +
            "<div class=\"v\">" + String(activeRateData[d.properties["GEO_ID"]].toFixed(2)) + " %</div>" +
            "<div class=\"p\">" + numProperty + "</div>" +
            "<div class=\"v\">" + "hello" + "</div>"
    }
    else {
        toolTipData =
            "<div id=\"property1\">County / Municipality:" + "</div>" +
            "<div id=\"value1\">" + d.properties['NAME'] + "</div>" +
            "<div id=\"property2\">State / Territory:" + "</div>" +
            "<div id=\"value2\">" + d.properties['STATE_NAME'] + "</div>" +
            "<div id=\"propert3y\">" + rateProperty + "</div>" +
            "<div id=\"value3\">" + String(activeRateData[d.properties["GEO_ID"]].toFixed(2)) + " %</div>"
    }

    return toolTipData;
}