@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\loader-fs-cache\node_modules\find-cache-dir\node_modules\mkdirp\bin\cmd.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\loader-fs-cache\node_modules\find-cache-dir\node_modules\mkdirp\bin\cmd.js" %*
)