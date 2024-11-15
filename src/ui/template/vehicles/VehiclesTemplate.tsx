"use client"
import { IGetVehiclesResponse } from '@/app/core/application/dto/vehicles/get/vehicles-response.dto'
import { Title } from '@/ui/atoms/Title'
import Filter from '@/ui/organisms/filter/Filter'
import VehicleTable from '@/ui/organisms/table/VehicleTable'
import React from 'react'

interface VehicleTemplateProps {
  data: IGetVehiclesResponse
}


const VehiclesTemplate = ({ data }: VehicleTemplateProps) => {


  const handleEdit = (id: number) => {
    alert(
      `¿Estás seguro de editar el vehículo con ID ${id}?`
    )  
  } 
  
  const handleDelete = async(id: number) => {
  

    console.log("se elimino", id);
    
  
  } 

  return (
    <>
      <div className="containerVehicles p-4">
        <Title label='Gestión de vehiculos' className='font-semibold text-2xl' />
        <Filter />
        <VehicleTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </>
  )
}

export default VehiclesTemplate