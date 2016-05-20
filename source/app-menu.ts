import {remote} from 'electron';
const dialog = remote.dialog;

export class AppMenu {

    config = [
        {
            title: "File",
            items: [
                {
                    title: "Open",
                    execute: this.open
                },
                {
                    type: "seperator"
                },
                {
                    title: "Exit",
                    execute: () => 
                    { 
                        
                        window.alert("Clicked Exit") 
                    }
                }
            ]
        }      
    ]

    open() {
        dialog.showOpenDialog({
            filters: [{ name: 'Text', extensions: ['txt'] }]
        }, function (fileNames) {
            if (fileNames === undefined) return;
            var fileName = fileNames[0];
        });
    }
};