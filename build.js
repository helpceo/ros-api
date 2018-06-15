const fs = require('fs');
// const childprocess = require('child_process');
// const exec = childprocess.exec;
//
// const execWord = `cd app/ &&  npm run build && cp -R build ../electron`;
// const child = exec(execWord);
//
// child.stdout.on('data', function (data) {
//     console.log(data);
// });
// child.stderr.on('data', function (data) {
//     console.error(data);
// });
// child.on('close', function (code) {
//
//     replacePath();
//
//
//     exec(execWord);
// });


let replacePath = () => {
    let html = fs.readFileSync("./electron/build/index.html", 'utf8');
    html = html.toString();

    let hrefIndex = html.indexOf("href=") + 6;
    let someIndex = html.indexOf("ros-api-demos") + 14;

    let replaceStr = html.substring(hrefIndex, someIndex);

    html = html.replace(new RegExp(replaceStr, 'gm'), '')

    fs.writeFileSync("./electron/build/index.html", html, 'utf8')
}
replacePath();