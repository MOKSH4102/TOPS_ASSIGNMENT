function arrayToCSV(arr) {
    const headers = Object.keys(arr[0]);
    const csv = [headers.join(",")];
  
    arr.forEach((obj) => {
      const row = headers.map((header) => {
        const value = obj[header];
        if (typeof value === "string") {
          return `"${value.replace(/"/g, '""')}"`;
        } else {
          return value;
        }
      });
      csv.push(row.join(","));
    });
  
    return csv.join("\n");
  }
  
  // Example usage:
  const data = [
    { name: "harsh", age: 25, occupation: "Developer" },
    { name: "Jay", age: 30, occupation: "Designer" },
    { name: "dev", age: 35, occupation: "Manager" },
  ];
  
  const csvString = arrayToCSV(data);
  console.log(csvString);