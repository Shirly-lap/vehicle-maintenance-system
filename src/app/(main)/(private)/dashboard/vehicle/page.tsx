import { VehicleService } from '@/app/infrastructure/services/projects.service';
import VehiclesTemplate from '@/ui/template/vehicles/VehiclesTemplate'
import React from 'react'


interface VehiclePageProps {
  searchParams: {
    page: string;
    size: string;
    name: string;
  };
}

const useVheicleService = new VehicleService()

export default async function ProjectsPage({searchParams}:VehiclePageProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 5;

  const data = await useVheicleService.getAllVehicles(page, size)
  return (
    <>
      <VehiclesTemplate data={data} />
    </>
  )


}
