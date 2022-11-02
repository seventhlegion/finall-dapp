import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("DApp", () => {
    it("rendering the landing page", () => {
        render(<Home />);

        expect(screen.queryByTestId("InjectedConnector")).toBeInTheDocument;
        expect(screen.queryByTestId("NetworkSelect")).toBeInTheDocument;

    })
})