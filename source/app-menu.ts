export class AppMenu {
    config = [
        {
            title: "File",
            href: "#",
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