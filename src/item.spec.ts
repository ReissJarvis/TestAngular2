import { Item } from '../app/Items/Objects/item'

describe("Item Tests", () => {
    it("Has Name", () => {
        let item : Item = { name: "Test Name"};
        expect(item.name).toBe("Test Name");
    })
})