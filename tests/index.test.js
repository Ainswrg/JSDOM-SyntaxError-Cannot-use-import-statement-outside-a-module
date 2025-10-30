/**
 * @jest-environment node
 */
import { JSDOM } from "jsdom";

describe("repro jsdom + parse5 esm-only", () => {
    test("should instantiate JSDOM (expected to FAIL without transform)", () => {
        const dom = new JSDOM("<!doctype html><p>Hello</p>");
        expect(dom.window.document.querySelector("p").textContent).toBe("Hello");
    });
});
