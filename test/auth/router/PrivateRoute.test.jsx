import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../../src/router/PrivateRoute";

describe("Pruebas en <PrivateRoute />", () => {


  test("debe de mostrar el children si está autenticado", () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "ABC123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Ruta publica</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta publica")).toBeTruthy();
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath","/search?q=batman");
  });
});
