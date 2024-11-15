import { IGetVehiclesResponse } from "@/app/core/application/dto/vehicles/get/vehicles-response.dto";
import { HttpClient } from "../utils";
import { IcreateVehicleResponse } from '../../core/application/dto/vehicles/post/vehicle-response.dto';
import { IcreateVehicleRequest } from "@/app/core/application/dto/vehicles/post/vehicle-request.dto";

export class VehicleService {
  private clientHttp: HttpClient;

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async getVehicleById(vehicleId: string): Promise<IGetVehiclesResponse> {
    try {
      const url = `/vehicles/${vehicleId}`;
      const data = this.clientHttp.get<IGetVehiclesResponse>(url);
      return data
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllVehicles(page:number, size:number): Promise<IGetVehiclesResponse> {
    try {
      const url = `vehicles?page=${page}&size=${size}`;
      const data = this.clientHttp.get<IGetVehiclesResponse>(url);
      return data
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteVehicle(vehicleId: string) {
    try {
      const url = `/vehicles/${vehicleId}`;
      const data = this.clientHttp.delete(url);
      return data
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(body: IcreateVehicleRequest) {
    try {
      const data = this.clientHttp.post<IcreateVehicleResponse, IcreateVehicleRequest>("projects", body);
      return data;

    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
