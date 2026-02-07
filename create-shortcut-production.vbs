' Create Desktop Shortcut for NexSys Website
' Save this file as create-shortcut.vbs and run it

Set WshShell = CreateObject("WScript.Shell")
Set oShellLink = WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop") & "\NexSys Website.lnk")

' Change this URL to your website URL
oShellLink.TargetPath = "https://ww17.your-domain.com/"
oShellLink.WorkingDirectory = WshShell.SpecialFolders("Desktop")
oShellLink.Description = "Open NexSys Website"
oShellLink.IconLocation = "chrome.exe,0"
oShellLink.Save

WScript.Echo "تم إنشاء الاختصار بنجاح على سطح المكتب!"
