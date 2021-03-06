import { ICreateCarDto } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/entities/Car";

interface ICarsRepository {
  create({
    name,
    description,
    brand,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
  }: ICreateCarDto): Promise<Car>;

  findByAvailable(
    name?: string,
    brand?: string,
    category_id?: string
  ): Promise<Car[]>;
  findByLicencePlate(license_plate: string): Promise<Car>;

  findById(id: string): Promise<Car>;
}

export { ICarsRepository };
