
//Commands
const tables = ["users","mentors","doubts"];
const get_commands = ["show","get","give","select"];
const post_commands = ["put","insert","add"];
const delete_commands = ["remove","delete"];
const star_commands = ["all","whole"];
const specific_commands = ["with","whose","where"];

export const convertToSQL = (query) => {
    let result = "";
    query = query.toLowerCase();
    console.log(query);
    // Determine table
    let table = tables.find(t => query.includes(t));
    console.log(table);
    if (!table) return "Invalid query: No valid table found";

    // Handle GET commands (SELECT)
    if (get_commands.some(cmd => query.includes(cmd))) {
        result = "SELECT";
        
        if (star_commands.some(cmd => query.includes(cmd))) {
            result += " *"; // Select all columns
        } else {
            result += " column_name"; // Placeholder for specific column selection
        }

        result += ` FROM ${table}`;
        
        if (specific_commands.some(cmd => query.includes(cmd))) {
            let conditionIndex = query.indexOf("where");
            if (conditionIndex !== -1) {
                let condition = query.substring(conditionIndex);
                result += " " + condition.replace(/where/g, "WHERE");
            }
        }
    }
    
    // Handle POST commands (INSERT)
    else if (post_commands.some(cmd => query.includes(cmd))) {
        result = `INSERT INTO ${table} (column1, column2) VALUES (value1, value2)`; // Placeholder values
    }
    
    // Handle DELETE commands (DELETE)
    else if (delete_commands.some(cmd => query.includes(cmd))) {
        result = `DELETE FROM ${table}`;
        if (specific_commands.some(cmd => query.includes(cmd))) {
            let conditionIndex = query.indexOf("where");
            if (conditionIndex !== -1) {
                let condition = query.substring(conditionIndex);
                result += " " + condition.replace(/where/g, "WHERE");
            }
        }
    }
    
    return result || "Invalid query: No valid command found";
};