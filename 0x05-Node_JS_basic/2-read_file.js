const fs = require('fs');

function countStudents(path) {
  try {
    const database = fs.readFileSync(path, 'utf-8');
    const rawData = database.split('\n');

    const info = {
      total_students: (rawData.length - 2),
    };

    rawData.forEach((value, index) => {
      if (index > 0 && value !== '') {
        const [firstName, ...rest] = value.split(',');
        const field = rest[rest.length - 1];

        if (!info[field]) {
          info[field] = [];
        }
        info[field].push(firstName);
      }
    });

    console.log(`Number of students: ${info.total_students}`);

    for (const key in info) {
      if (key !== 'total_students') {
        console.log(`Number of students in ${key}: ${info[key].length}. List: ${info[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
