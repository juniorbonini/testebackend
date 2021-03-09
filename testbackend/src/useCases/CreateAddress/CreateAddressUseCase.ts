import { Address } from "../../entities/Address";
import { IAddressRepository } from "../../repositories/IAddressRepository";
import { ICreateAddressRequestDTO } from "../CreateUser/CreateUserDTO";

export class CreateAddressUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async execute(data: ICreateAddressRequestDTO) {
    const addressAlredyExist = await this.addressRepository.findByNumber(data.number);

    if (addressAlredyExist) {
      throw new Error("Address already exists.");
    }

    const address = new Address(data);

    await this.addressRepository.save(address);
  }
}
