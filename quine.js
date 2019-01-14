lines = [
  "lines = [",
  "console.log(lines[0]);",
  "for (var i = 0; i < lines.length; i++) {",
  " process.stdout.write('  \"');",
  " for (c of lines[i]) {",
  "  if (c.charCodeAt(0) == 34) {",
  "   process.stdout.write('\"');",
  "  } else if (c.charCodeAt(0) == 92) {",
  "   process.stdout.write('\\');",
  "  } else {",
  "   process.stdout.write(c);",
  "  }",
  " }",
  " process.stdout.write('\",');",
  " console.log();",
  "}",
  "console.log(lines[40]);",
  "for (var i = 1; i < lines.length - 1; i++) {",
  " var isWriteLine = i == 8 || i == 6;",
  " var isPrintLine = i >= 22;",
  " for (c of lines[i]) {",
  "  if (c.charCodeAt(0) == 34 && isWriteLine) {",
  "   process.stdout.write('\\');",
  "   process.stdout.write('\\');",
  "   process.stdout.write('\\');",
  "   process.stdout.write('\"');",
  "  } else if (c.charCodeAt(0) == 92 && isWriteLine) {",
  "   process.stdout.write('\\');",
  "   process.stdout.write('\\');",
  "   process.stdout.write('\\');",
  "   process.stdout.write('\\');",
  "  } else if (c.charCodeAt(0) == 92 && isPrintLine) {",
  "   process.stdout.write('\\');",
  "   process.stdout.write('\\');",
  "  } else {",
  "   process.stdout.write(c);",
  "  }",
  " }",
  " console.log();",
  "}",
  "];",
];
console.log(lines[0]);
for (var i = 0; i < lines.length; i++) {
 process.stdout.write('  "');
 for (c of lines[i]) {
  if (c.charCodeAt(0) == 34) {
   process.stdout.write('\\\"');
  } else if (c.charCodeAt(0) == 92) {
   process.stdout.write('\\\\');
  } else {
   process.stdout.write(c);
  }
 }
 process.stdout.write('",');
 console.log();
}
console.log(lines[40]);
for (var i = 1; i < lines.length - 1; i++) {
 var isWriteLine = i == 8 || i == 6;
 var isPrintLine = i >= 22;
 for (c of lines[i]) {
  if (c.charCodeAt(0) == 34 && isWriteLine) {
   process.stdout.write('\\');
   process.stdout.write('\\');
   process.stdout.write('\\');
   process.stdout.write('"');
  } else if (c.charCodeAt(0) == 92 && isWriteLine) {
   process.stdout.write('\\');
   process.stdout.write('\\');
   process.stdout.write('\\');
   process.stdout.write('\\');
  } else if (c.charCodeAt(0) == 92 && isPrintLine) {
   process.stdout.write('\\');
   process.stdout.write('\\');
  } else {
   process.stdout.write(c);
  }
 }
 console.log();
}
