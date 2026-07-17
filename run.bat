@echo off
REM Bookstore Application Starter

cd /d "C:\Users\cbgna\Downloads\bookstore_spring_boot_project-main\bookstore_spring_boot_project-main\bookStore"

echo.
echo ╔════════════════════════════════════════════════════╗
echo ║     Bookstore Application Starting...              ║
echo ║     Port: 8080                                     ║
echo ║     Visit: http://localhost:8080                  ║
echo ╚════════════════════════════════════════════════════╝
echo.

java -jar target\bookStore-0.0.1-SNAPSHOT.jar

pause
