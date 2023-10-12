// full_server/utils.js
import fs from 'fs/promises';

export function readDatabase(filePath) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      // Process data and return an object with students per field
      // Example: { CS: ['John', 'Alice'], SWE: ['Bob', 'Carol'] }
      resolve(processData(data));
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

function processData(data) {
  // Process the data and return the desired object
  // Implement this logic based on your data format
}
