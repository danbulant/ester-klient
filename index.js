const { app, protocol, session, ipcMain, globalShortcut, BrowserWindow, Menu } = require('electron');

var win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreen: true,
        autoHideMenuBar: true,
        kiosk: true,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true
        }
    })
    globalShortcut.register('f11', () => {
        //win.setKiosk(!win.isKiosk());
        win.setFullScreen(!win.isFullScreen());
     });
     
     if (process.env.NODE_ENV == "dev") {
        win.webContents.openDevTools()
         
        globalShortcut.register('Ctrl+Alt+Escape', () => {
             app.quit();
        });
    } else {
        globalShortcut.register('ctrl+r', () => { });
        window.onbeforeunload = (e) => {
            e.returnValue = false;
        }
    }
    win.loadFile('view/index.html')
    win.removeMenu();
    win.setMenu(null);

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})