"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[8625],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5868:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(3117),i=n(102),l=(n(7294),n(3905)),o=["components"],a={id:"compilation-options",title:"Compilation options",sidebar_label:"Compilation options",slug:"/core-library/compilation-options"},s=void 0,u={unversionedId:"core-library/compilation-options",id:"core-library/compilation-options",isDocsHomePage:!1,title:"Compilation options",description:"A number of options in CMake can be set when compiling the H3 core library. These are relevant for building",source:"@site/docs/core-library/compilation-options.md",sourceDirName:"core-library",slug:"/core-library/compilation-options",permalink:"/docs/core-library/compilation-options",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/compilation-options.md",tags:[],version:"current",frontMatter:{id:"compilation-options",title:"Compilation options",sidebar_label:"Compilation options",slug:"/core-library/compilation-options"},sidebar:"someSidebar",previous:{title:"Unix-style Filters for H3",permalink:"/docs/core-library/filters"},next:{title:"Testing strategy",permalink:"/docs/core-library/testing"}},c=[{value:"BUILD_ALLOC_TESTS",id:"build_alloc_tests",children:[],level:2},{value:"BUILD_BENCHMARKS",id:"build_benchmarks",children:[],level:2},{value:"BUILD_FILTERS",id:"build_filters",children:[],level:2},{value:"BUILD_GENERATORS",id:"build_generators",children:[],level:2},{value:"BUILD_TESTING",id:"build_testing",children:[],level:2},{value:"BUILD_FUZZERS",id:"build_fuzzers",children:[],level:2},{value:"ENABLE_LIBFUZZER",id:"enable_libfuzzer",children:[],level:2},{value:"CMAKE_BUILD_TYPE",id:"cmake_build_type",children:[],level:2},{value:"ENABLE_COVERAGE",id:"enable_coverage",children:[],level:2},{value:"ENABLE_DOCS",id:"enable_docs",children:[],level:2},{value:"ENABLE_FORMAT",id:"enable_format",children:[],level:2},{value:"ENABLE_LINTING",id:"enable_linting",children:[],level:2},{value:"H3_ALLOC_PREFIX",id:"h3_alloc_prefix",children:[],level:2},{value:"H3_PREFIX",id:"h3_prefix",children:[],level:2},{value:"PRINT_TEST_FILES",id:"print_test_files",children:[],level:2},{value:"WARNINGS_AS_ERRORS",id:"warnings_as_errors",children:[],level:2},{value:"WRAP_VALGRIND",id:"wrap_valgrind",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A number of options in CMake can be set when compiling the H3 core library. These are relevant for building\ndifferent ways of using and testing the library and do not affect the underlying algorithms."),(0,l.kt)("p",null,"When configuring with CMake, an option may be specified using ",(0,l.kt)("inlineCode",{parentName:"p"},"-D")," on the command line, like so for setting\n",(0,l.kt)("inlineCode",{parentName:"p"},"CMAKE_BUILD_TYPE")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"Release"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cmake .. -DCMAKE_BUILD_TYPE=Release\n")),(0,l.kt)("p",null,"Boolean options should be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"ON")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"OFF"),", like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cmake .. -DBUILD_TESTING=OFF\n")),(0,l.kt)("h2",{id:"build_alloc_tests"},"BUILD_ALLOC_TESTS"),(0,l.kt)("p",null,"Whether to build the parts of the ",(0,l.kt)("a",{parentName:"p",href:"./testing"},"test suite")," that exercise the ",(0,l.kt)("a",{parentName:"p",href:"./custom-alloc"},"H3_ALLOC_PREFIX")," feature."),(0,l.kt)("h2",{id:"build_benchmarks"},"BUILD_BENCHMARKS"),(0,l.kt)("p",null,"Whether to build the ",(0,l.kt)("a",{parentName:"p",href:"./testing#benchmarks"},"benchmark suite"),"."),(0,l.kt)("h2",{id:"build_filters"},"BUILD_FILTERS"),(0,l.kt)("p",null,"Whether to build the ",(0,l.kt)("a",{parentName:"p",href:"./filters"},"H3 command line filter")," executables."),(0,l.kt)("h2",{id:"build_generators"},"BUILD_GENERATORS"),(0,l.kt)("p",null,"Whether to build generator executables used in the development of H3. This is not required for\nbuilding the library as the output of these generators is checked in."),(0,l.kt)("h2",{id:"build_testing"},"BUILD_TESTING"),(0,l.kt)("p",null,"Whether to build the ",(0,l.kt)("a",{parentName:"p",href:"./testing"},"test suite"),"."),(0,l.kt)("h2",{id:"build_fuzzers"},"BUILD_FUZZERS"),(0,l.kt)("p",null,"Whether to build the ",(0,l.kt)("a",{parentName:"p",href:"./testing#fuzzers"},"fuzzer suite"),"."),(0,l.kt)("h2",{id:"enable_libfuzzer"},"ENABLE_LIBFUZZER"),(0,l.kt)("p",null,"Whether to build the fuzzers with ",(0,l.kt)("a",{parentName:"p",href:"https://www.llvm.org/docs/LibFuzzer.html"},"libFuzzer")," (this expects to be used with Clang). If OFF, a ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," function suitable for use with ",(0,l.kt)("a",{parentName:"p",href:"https://lcamtuf.coredump.cx/afl/"},"American fuzzy lop")," is included."),(0,l.kt)("h2",{id:"cmake_build_type"},"CMAKE_BUILD_TYPE"),(0,l.kt)("p",null,"Should be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"Release")," for production builds, and ",(0,l.kt)("inlineCode",{parentName:"p"},"Debug")," in development."),(0,l.kt)("h2",{id:"enable_coverage"},"ENABLE_COVERAGE"),(0,l.kt)("p",null,"Whether to compile ",(0,l.kt)("inlineCode",{parentName:"p"},"Debug")," builds with coverage instrumentation (compatible with GCC, Clang, and lcov)."),(0,l.kt)("h2",{id:"enable_docs"},"ENABLE_DOCS"),(0,l.kt)("p",null,"Whether to build the Doxygen documentation. This is not the same as the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/uber/h3/tree/master/website"},"H3 website"),",\nbut is rather the documentation for the internal C library functions."),(0,l.kt)("h2",{id:"enable_format"},"ENABLE_FORMAT"),(0,l.kt)("p",null,"Whether to enable using clang-format-9 to format source files before building. This should be enabled\nbefore submitting patches for H3 as continuous integration will fail if the formatting does not match."),(0,l.kt)("p",null,"Only this version of clang-format should be used to format the sources as new releases of clang-format\ncan change defaults, causing unintended churn of source code formatting."),(0,l.kt)("h2",{id:"enable_linting"},"ENABLE_LINTING"),(0,l.kt)("p",null,"Whether to enable using clang-tidy to lint source files when building. Only invoked when\n",(0,l.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/latest/prop_tgt/LANG_CLANG_TIDY.html"},"Makefile or Ninja CMake generators"),"\nare used."),(0,l.kt)("h2",{id:"h3_alloc_prefix"},"H3_ALLOC_PREFIX"),(0,l.kt)("p",null,"Used for directing the library to use a ",(0,l.kt)("a",{parentName:"p",href:"./custom-alloc"},"different set of functions for memory management"),"."),(0,l.kt)("h2",{id:"h3_prefix"},"H3_PREFIX"),(0,l.kt)("p",null,"Used for ",(0,l.kt)("a",{parentName:"p",href:"./usage#function-renaming"},"renaming the public API"),"."),(0,l.kt)("h2",{id:"print_test_files"},"PRINT_TEST_FILES"),(0,l.kt)("p",null,"If enabled, CMake will print which CTest test case corresponds to which input file."),(0,l.kt)("h2",{id:"warnings_as_errors"},"WARNINGS_AS_ERRORS"),(0,l.kt)("p",null,"Whether to treat compiler warnings as errors. While a useful tool for ensuring software quality, this should not be enabled\nfor production builds as compiler warnings can change unexpectedly between versions."),(0,l.kt)("h2",{id:"wrap_valgrind"},"WRAP_VALGRIND"),(0,l.kt)("p",null,"Whether to wrap invocations of the test suite with ",(0,l.kt)("inlineCode",{parentName:"p"},"valgrind")," (if available)."))}d.isMDXComponent=!0}}]);