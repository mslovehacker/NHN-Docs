buildEnv:
  dockerfile: Dockerfile
  command: mkdocs build --clean -d ko && cp header/readthedocs-data-${BRANCH_NAME}.js ko/readthedocs-data.js

packageDirs:
  - ko

upload:
  artifactId: 4635
  appkey: 1aqouc8l4Vww6tUE  
  binaryGroupName: docs
  binaryGroupKey: 15413
