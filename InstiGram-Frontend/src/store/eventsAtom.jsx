import { atom } from "recoil";

export const eventsAtom = atom({
    key: "eventsAtom",
    default: [
        {
            date: 15,
            content: "Performing Arts Festival",
            color: " #56AEFF",
        }, {
            date: 17,
            content: "Nothing",
            color: "#56FFC2",
        }
    ]
})