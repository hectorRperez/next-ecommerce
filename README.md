## Git branch conventions names

Name flow example

1) For news features

 ```bash
  $ feature/login-form
```

2) bug fix
 ```bash
  $ bugfix/fix-login-error
```

3) To fix critical bugs in production
 ```bash
  $ hotfix/security-patch
```

4) To preparer a new version of the application
 ```bash
  $ release/v2.0.1
```

5) For maintenance, minor updates, or changes that do not directly affect working code, such as updating dependencies, configurations, or changes to documentation files
 ```bash
  $ chore/update-dependencies
```

6) test o tests

- Used to experiment or create tests (unit, integration) in the code

 ```bash
  $ test/improve-unit-tests
```

7) refactor/

- Suitable when working on improving the structure of the code without changing its functionality. Ideal for cases where you want to optimize, clean or reorganize the code

 ```bash
  $ refactor/optimize-auth-module
```
8) config/

- Useful when making changes to project configuration, such as CI/CD configurations or changes to environment configurations files
 ```bash
  $ config/ci-setup
```

9) perf/

- Used for perfomance optimizations. Any tweaks that improve system speed or efficiency can be handled here

 ```bash
  $ perf/cache-optimization
```

10) docs/

- For documentation-related changes. This may include adjustments to project documentation, README files, or any type of technical guide

 ```bash
  $ docs/update-api-reference
```


11) ci/ 

- For continuous integration (CI) configuration changes and pipeline automation

 ```bash
  $ ci/github-actions-pipeline
```
