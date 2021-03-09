import { uuid } from "uuidv4";

export class Address {
  public readonly id: string;

  public address: string;
  public number: string;
  public complement: string;
  public cep: string;
  public city: string;
  public state: string;

  constructor(props: Omit<Address, "id" | "address" | "number" | "complement" | "cep" | "city" | "state">, id?: string) {
    Object.assign(this, props);

    if(!id) {
        this.id = uuid();
    }
  }
}
