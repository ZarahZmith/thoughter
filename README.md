
# Thoughter

Definitely not a Twitter clone.
Part of my coursework for The Iron Yard.

Creator: Sarah Graves Smith
GitHub URL: https://github.com/ZarahZmith/thoughter

Process:
Forked file from GitHub, then cloned it in node. Set up recent-thoughts.conf.js file. In package.json changed the "scripts" to contain "test": "karma start recent-thoughts.conf.js", so "npm test" is the command to run tests in node. Set up iife in recent-thoughts.spec.js file. Set up describe for the module as well as each of the functions. Used "npm install sinon --save-dev" in node to start process of establishing fake server. Inserted "'node_modules/sinon/pkg/sinon-2.0.0.js'," into the files section of recent-thoughts.conf.js to allow sinon to run. Created and ran sanity test for showRecent and getRecent functions. Set up beforeEach and afterEach for both functions.
