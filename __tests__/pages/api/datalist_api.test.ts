/**
 * Required to make tests pass (some dependency problem)
 * @jest-environment node
 *
 */

import handler, {listData} from "../../../pages/api/datalist";
import {createMocks} from "node-mocks-http";

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

    test("handler sends json data as expected", () => {
        const {req, res} = createMocks({
            method: 'GET',
        })
        // @ts-ignore
        listData.find = jest.fn().mockImplementation(() => {
            throw new Error("mock error")
        });

        handler(req, res).then(() => {
            expect(res._getStatusCode()).toBe(404);
            expect(res._getData()).toBe("mock error");
        })
    })
})