/**
 * Required to make tests pass (some dependency problem)
 * @jest-environment node
 *
 */

import {listData} from "../../lib/datalist";

describe("listData", () => {
    beforeAll(async () => {
        const mockMongoInstance = {
            db: jest.fn().mockReturnValue({
                collection: jest.fn().mockReturnValue({
                    find: jest.fn().mockReturnValue({
                        database_name: "mock",
                        lines_in_database: 20000,
                        added: "2022-12-05T17:20:28.572+00:00"
                    })
                })
            })
        }
        // @ts-ignore
        global.client = {
            connect: mockMongoInstance,
        }
    })

    test("listData returns valid records on valid input", () => {
        listData().then((data) => {
            expect(data).toBe({
                database_name: "mock",
                lines_in_database: 20000,
                added: "2022-12-05T17:20:28.572+00:00"
            });
        });
    });
});