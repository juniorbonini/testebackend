import { Request, Response } from "express";
import { CreateAddressUseCase } from "./CreateAddressUseCase";


export class CreateAddressController {
 
    constructor( 
        private CreateAddressUseCase: CreateAddressUseCase,
    ) {}

   async handle(request: Request, response: Response): Promise<Response> {
       const  { address, number, complement, cep, city, state } = request.body;

       try {
        await this.CreateAddressUseCase.execute({
            address,
            number,
            complement,
            cep,
            city,
            state,
    
        })
        return response.status(201).send();
       } catch (err) {
           return response.status(400).json({
               message: err.message || "Unuxpected error."
           })
       }
    
   }
}