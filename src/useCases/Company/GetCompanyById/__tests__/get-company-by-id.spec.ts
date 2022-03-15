import { GetCompanyByIdController } from "../GetCompanyByIdController";
import { GetCompanyByIdUseCase } from "../GetCompanyByIdUseCase";
import { GetCompanyByIdUseCaseMock } from "../__mocks__/GetCompanyByIdUseCaseMock";

describe("In GetCompanyById", () => {
  it("should call execute in getCompanyByIdUseCase", () => {
    const getCompanyByIdUseCase = new GetCompanyByIdUseCaseMock();
    const executeSpy = jest.spyOn(getCompanyByIdUseCase, "execute");

    const getCompaniesController = new GetCompanyByIdController(
      getCompanyByIdUseCase as GetCompanyByIdUseCase
    );

    getCompaniesController.handle(
      { params: { id: 1 } } as any,
      {} as any,
      {} as any
    );

    expect(executeSpy).toHaveBeenCalled();
  });
});
