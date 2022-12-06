/**
 * Required to make tests pass (some dependency problem)
 * @jest-environment node
 *
 */

import {listData} from "../../../pages/api/datalist";

describe("listData", () => {
    beforeAll(async () => {
        // @ts-ignore
        listData.find = jest.fn().mockReturnValueOnce({
            database_name: "mock",
            lines_in_database: 20000,
            added: "2022-12-05T17:20:28.572+00:00"
        });
    });

    test("listData returns valid records on valid input", () => {
        listData().then((data) => {
            expect(data).toBe({
                database_name: "mock",
                lines_in_database: 20000,
                added: "2022-12-05T17:20:28.572+00:00"
            });
        });
    })

})