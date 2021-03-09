export interface ICreateUserRequestDTO {
  name: string;
  telefone: string;
  idade: string;
  peso: string;
  etnia: string;
  email: string;
  password: string;
}

export interface ICreateAddressRequestDTO {
    address: string;
    number: string;
    complement: string;
    cep: string;
    city: string;
    state: string;
}