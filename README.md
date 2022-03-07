# functions-emulator-bug-demo
Minimal code to reproduce a bug with the firebase functions emulator.  

The code defines two functions with http triggers; a & b.  Calling a writes "Function A called!" to the response.  Calling b writes "Function B called!" to the response. 

**Steps to reproduce**

1) Download this repo
2) Run `npm install` in the functions directory
3) Ensure that the firebase CLI is installed and at version 10.2.1.  'firebase --version' should print 10.2.1.
4) From the functions directory, run `firebase emulators:start --only functions --inspect-functions`
5) Open a browser and load 'http://localhost:5001/functions-emulator-bug-demo/us-central1/a'
6) Open a browser and load 'http://localhost:5001/functions-emulator-bug-demo/us-central1/b'

**Expected behavior**

The browser should print "Function B called!" when the second url is loaded.


**Observed behavior**

The browser instead prints "Function A called!" instead.  Whichever function is called initially will be invoked on all subsequent calls, regardless of which url is provided.  This does not happen when the --inspect-functions flag is not supplied.

