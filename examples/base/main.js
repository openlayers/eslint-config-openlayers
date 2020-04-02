import fs from 'fs';
import path from 'path';
import {foo} from './mod.js';

function main(paths) {
  return Promise.all(
    paths.map((name) => {
      return new Promise((resolve, reject) => {
        fs.readFile(name, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(String(data));
          }
        });
      });
    })
  );
}

if (require.main === module) {
  process.stdout.write(foo());

  const paths = /** @type {Array<string>} */ (['main.js', '.eslintrc']);

  const mapped = paths.map((name) => path.join(__dirname, name));

  main(mapped)
    .then((contents) => {
      contents.forEach((content, index) => {
        process.stdout.write(paths[index] + '\n' + content + '\n');
      });
    })
    .catch((err) => {
      process.stderr.write('Failed: ' + err.message + '\n');
    });
}
