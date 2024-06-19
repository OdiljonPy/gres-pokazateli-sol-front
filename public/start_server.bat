@echo off
setlocal

start "" serve -s dist -l 5000

TIMEOUT /T 3
start "" http://localhost:5000

endlocal
