export class AppMenu {
    config = [
        {
            title: "File",
            href: "#",
            items: [
                {
                    title: "Open",
                    execute: () => { window.alert("Clicked Open") }
                }
            ]
        }
    ]
};