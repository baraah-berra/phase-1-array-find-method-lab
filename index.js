// code your solution here
// Sample data
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  
  // Function to find the year of a Superbowl win
  function superbowlWin(records) {
    // Use the find() method to search for a win (result: "W")
    const winRecord = records.find((record) => record.result === "W");
  
    // If a win is found, return the year; otherwise, return undefined
    return winRecord ? winRecord.year : undefined;
  }
  
  // Example usage:
  const winYear = superbowlWin(record);
  console.log(winYear); // Output: "2015" (if a win is found)
  