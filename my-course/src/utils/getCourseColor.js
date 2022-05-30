const COLORS = {
    green: "green",
    gold: "gold",
    orange: "darkorange",
    blue: "dodgerblue",
    red: "red",
    gray: "gray",
};

function getCourseColor(code = "000") {
    const firstCode = code.charAt(0);
    switch (firstCode) {
        case "1":
            // orange
            return "orange";
        case "2":
            // blue
            return "blue";
        case "3":
            // gold
            return "gold";
        case "4":
            // gold
            return "gold";
        case "5":
            // red
            return "red";
        case "6":
            // green
            return "green";
        default:
            return COLORS.gray;
    }
}

export default getCourseColor;
