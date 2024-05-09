# namaste react

#parcel :
    dev build
    local server
    HMR: Hot Module Replacement
    File watching algo - written in c++
    Caching - faster builds
    Image optimization
    Minification
    Bundling
    Compressing
    Consistent hashing
    Code splitting
    Differntial bundling - supports older browser
    Diagnosis- beautiful error
    Error Handling
    HTTPs
    Tree shaking - remove unused code from file
    Different build for dev and prod (prod - npx parcel build index.html)


    Default export/import
    name export/import
..
# reach hooks
useState()
useEffect()

# routin
1. Client side routing - (No API calls)
2. Server side routing

# Link -->
    It is nothing but anchor tag, but reatc dome keeps an eye on it and you don't have to refresh the page

# optimization
    chunking
    code splitting
    Dynamic bundling
    lazy loading
    on demand loading

# Redux toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build out store
 - Create slice
 - Dispatch
 - Selector

# testing
- Unit testing - isolated testing of component
- Integration testing - interconnected component
- E2E testing - end to end, whole app testing

# setting up testing env
- install @testing-library/react
- install jest
- install babel dependencies for babel
- settin up babel.config.js
- create .parcelrc
- jest configuration - npx jest -init
- install jsdom libary - npm i -D jest-environment-jsdom
- insall @babel/preset-react --- to make jsx works in test cases
- set babel.config.js (add above library)
- install @testing-library/jest-dom

