import { uuid } from "uuidv4";

enum Etnias {
  branco = 1,
  pardo,
  negro,
  asiatico,
  amarelo,
}
export class User {
  public readonly id: string;

  public name: string;
  public telefone: string;
  public email: string;
  public idade: string;
  public peso: string;
  public etnia: Etnias;
  public password: string;

  constructor(
    props: Omit<
      User,
      | "id"
      | "name"
      | "telefone"
      | "email"
      | "idade"
      | "peso"
      | "etnia"
      | "password"
    >,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
