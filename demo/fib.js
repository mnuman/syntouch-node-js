/* Fibonacci series - simple javascript program to demonstrate 
 *   debugging and integration with chrome/chromium tools
 *
 * Start the program with node --inspect-brk <filename>
 * Open a Chromium browser window and navigate to chrome://inspect
 * Now you should see your file name
 */
var n = 1, i = 1, j = 0;
while ( n <= 20) {
  console.log(`Fibonacci getal #${n}: ${i}`);
  [j,i] = [i,i+j]
  n++;
}
