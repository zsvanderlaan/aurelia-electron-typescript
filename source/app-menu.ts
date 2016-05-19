export class AppMenu {
    config = [
        {
            title: "File",
            items: [
                {
                    title: "Open",
                    execute: () => { window.alert("Clicked Open") }
                },
                {
                    type: "seperator"                  
                },           
                {
                    title: "Exit",
                    execute: () => { window.alert("Clicked Exit") }
                }
            ]            
        },
        {
            title: "Edit",
            items: [
                {
                    title: "Open",
                    execute: () => { window.alert("Clicked Open") }
                },
                {
                    type: "seperator"                  
                },           
                {
                    title: "Exit",
                    execute: () => { window.alert("Clicked Exit") }
                }
            ]     
        }
    ]
};