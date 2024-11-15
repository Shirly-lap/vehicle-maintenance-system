import { IGetVehiclesResponse } from '@/app/core/application/dto/vehicles/get/vehicles-response.dto'
import { icons } from '@/app/interface/Icon'
import { Button } from '@/ui/atoms/Button'
import React from 'react'


interface VehicleTableProps{
  data:IGetVehiclesResponse,
  onEdit: (id : number) => void;
  onDelete: (id : number) => void;
}
const VehicleTable = ({data, onDelete, onEdit}: VehicleTableProps) => {
  return (
    <>
      <div className="table p-4 w-full">
        <div className="w-96">
          <div className="functionalityButtons flex gap-3">
            <Button label='agregar vehiculo' className='capitalize bg-custom-blue text-white' Icon={icons.plus} classNameIcon=' rounded-xl' />
            <Button label='descargar reporte' Icon={icons.excel} className='capitalize bg-custom-green text-white' classNameIcon='bg-slate-400 ' />
          </div>
        </div>

        <div className="containerTable w-full">
          <table className="table-auto hover:table-fixed bg-white">
            <thead>
              <tr className='border-b-2	h-14'>
                <th>Foto</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Año</th>
                <th>Placa</th>
                <th>Aciones</th>
              </tr>
            </thead>
            <tbody>
            {data.data.map((vehicle, index) => (
              <tr className='border-b-2	h-14 text-center' key={index}>
                <td className='p-2'>{vehicle.photo}</td>
                <td className='p-2'>{vehicle.make}</td>
                <td className='p-2'>{vehicle.model}</td>
                <td className='p-2'>{vehicle.year}</td>
                <td className='p-2'>{vehicle.licensePlate}</td>
                <td className='p-2'>
                  <div className="actions">
                    <Button Icon={icons.edit} className=''onClick={() => onEdit(vehicle.id)}/>
                    <Button Icon={icons.delete} className='' onClick={() => onDelete(vehicle.id)}/>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default VehicleTable
