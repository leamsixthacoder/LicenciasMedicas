/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styles from './LicenciasMedicas.module.scss';
import type { ILicenciasMedicasProps } from './ILicenciasMedicasProps';
import LicenciasMedicasInputComponent from './LicenciasMedicasInputComponent/LicenciasMedicasInputComponent'
import LicenciasMedicasSelectComponent from './LicenciasMedicasSelectComponent/LicenciasMedicasSelectComponent';
import LicenciasMedicasDatePickerComponent from './LicenciasMedicasDatePickerComponent/LicenciasMedicasDatePickerComponent';
import LicenciasMedicasButtonComponent from './LicenciasMedicasButtonComponent/LicenciasMedicasButtonComponent';
import LicenciasMedicasTextareaComponent from './LicenciasMedicasTextareaComponent/LicenciasMedicasTextareaComponent';
import { UseEmployeesStore } from '../store/employee';
import { useEffect } from 'react';
import { UseRegisterStore } from '../store/RegistroLicencia';
// import { escape } from '@microsoft/sp-lodash-subset';

const LicenciasMedicas: React.FC<ILicenciasMedicasProps> = () => {

  const employees = UseEmployeesStore(state => state.employees)
  const isLoading = UseEmployeesStore(state => state.isLoading)
  const fetchEmployees = UseEmployeesStore(state => state.fetchEmployees)
  const selectEmployee = UseEmployeesStore((state) => state.selectEmployee)
  const selectedEmployee = UseEmployeesStore((state) => state.selectedEmployee)
  const registerLeave = UseRegisterStore((state => state.registerLeave))
  const setLeaveDays = UseRegisterStore((state => state.setLeaveDays))
  const setTssRefound = UseRegisterStore((state => state.setTssRefound))

  useEffect(() => {
    void fetchEmployees();
  }, [fetchEmployees]);


  const getEmployeeOptions = () => {
    const options = employees.map((key) => ({
      value: key.EmployeeId,
      label: `${key.EmployeeId} ${key.Name}`
    }))
    return options
  }

  const handleSelectEmployee = (selectedOption: any) => {
    const selectedEmployeeId = selectedOption.value;
    selectEmployee(selectedEmployeeId);
  };

  const handleInputChange = (value: any, inputName: string) => {
    inputName === 'cantdias' ? setLeaveDays(value) : setTssRefound(value)
};

  return (


    <>
      <div className={`${styles.borderBottom}`}>
        <h1 className='text-[#0058a6] ml-4 mb-2 text-2xl'>Registro Licencia Médica</h1>
      </div>
      <div className='flex justify-end my-1'>
        <span className='text-[10px] font-extrabold'>Campos marcados con <strong className='text-red-600'>*</strong> son obligatorios</span>
      </div>
      <form className='mt-10 mx-2'>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasSelectComponent labelName='Colaborador' labelFor='colaborador' options={getEmployeeOptions()} isLoading={isLoading} value={registerLeave.comentario} onSelect={handleSelectEmployee} />
          <LicenciasMedicasInputComponent labelName='Posición' labelFor='posicion' isDisabled inputType='text' value={selectedEmployee?.Position} />
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Departamento' labelFor='departamento' isDisabled inputType='text' value={selectedEmployee?.Department} />
          <LicenciasMedicasInputComponent labelName='Area' labelFor='area' isDisabled inputType='text' value={selectedEmployee?.Area} />
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Diagnóstico' labelFor='diagnostico' isDisabled={false} inputType='text' value={registerLeave.diagnostico}/>
          <LicenciasMedicasInputComponent labelName='Horas diarias de trabajo' labelFor='canthoras' isDisabled={false} inputType='number'  />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasDatePickerComponent labelName='Inicio de licencia' placeholder='Seleccionar fecha inicio....'/>
          <LicenciasMedicasDatePickerComponent labelName='Fin de licencia' placeholder='Seleccionar fecha fin....' />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasDatePickerComponent labelName='Reingreso' placeholder='Seleccionar fecha Reingreso....'  />
          <LicenciasMedicasDatePickerComponent labelName='Recibida' placeholder='Seleccionar fecha Recibida....' />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Cant dias' labelFor='cantdias' isDisabled={false} inputType='number' onChange={handleInputChange} />
          <div className=' flex justify-between gap-4'>
            <LicenciasMedicasInputComponent labelName='Costo licencia' labelFor='costlicencia' isDisabled inputType='number' value={registerLeave.costoLicencia} />
            <LicenciasMedicasInputComponent labelName='Rembolso TSS' labelFor='tssrembolso' isDisabled={false} inputType='number' onChange={handleInputChange} />
          </div>

        </div>
        <div className='mt-2 flex justify-start'>
          <LicenciasMedicasTextareaComponent labelName='Comentario' labelFor='comentario'/>
        </div>

      </form>
      <div className='my-4 flex justify-end gap-4'>
        <LicenciasMedicasButtonComponent buttonName='Guardar' buttonStyle='py-[6px] hover:cursor-pointer border-0 rounded-sm px-5 text-sm bg-sky-700 text-white font-bold' />
        <LicenciasMedicasButtonComponent buttonName='Limpiar' buttonStyle='py-[6px] hover:cursor-pointer border-0 rounded-sm px-5 text-sm bg-sky-200 text-sky-700 font-bold' />
      </div>

    </>

  );
}
export default LicenciasMedicas;