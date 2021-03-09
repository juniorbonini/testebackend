import { Address } from "../entities/Address";

export interface IAddressRepository {
  findByNumber(number: string): Promise<Address>;

  save(address: Address): Promise<void>;
}