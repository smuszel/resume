### full CRM
Achieved
* full typescript cover / no gradual typing
* good integration with backend
* pushing effects to css (like hovers, focus events)

Betterment:
* would benefited in the long run from using automated e2e testing
* needed to make the html more seantic (anchors)
* reused more libraries, I was on to get much of the stuff done myself to study

### Onboarding
* it was the first job for her
* i explained how remote and origin repos work on git
* i explained how javascript object cloning
* i explained promises and async/await to her
* i keept in touch and she is working elsewhere now

### Structure to JIRA task
Jira was our main communication channel since PT was remote.
Also the application was very complex (should mentioned procurement platform before).
We mainly had problem of how to avoid going to basement for 3 months and then tada
Secondary problem for CRer not knowing how to test and what has changed
* heading - user story & background
* wireframes
* description how each element on wireframe behaves
---
* block sections - showable piece of functionality
* each block consisted of expected behaviour
* blocks were created during the analysis
* in case something appeared it was appended to 'polish' block

### Optimized webpack configuration
Architecture: 
* repository whith 60+ folders
* in each one full package for the component based on webpack 1
* compiled bundle rendered itself to the dom
PROBLEMS
* 100+ MB of low coverage js
* 50 min build time for all / commiting compiled code
* multiple components at single view generated much duplication
* no unified libraries
* no unified configuration
SOLUTION
* single package with all libraries locked
* webpack 4 supported 
* used dynamic imports / code splitting
* each component exported rendering function that could be properly configured
* added module for decoupling parsing of data attributes
* applied bootstrapper module

### Tribe
* Manila 2 fe + HF
* Brisabane 2 fe + core
* Brisbane PT
* Pola / rzeszow
