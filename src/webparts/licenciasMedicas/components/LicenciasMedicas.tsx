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
  const setRegisterLeave = UseRegisterStore((state => state.setRegisterLeave))
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

  const handleSelectEmployee = (selectedOption: any, stateName: string) => {

    const selectedEmployeeId = selectedOption.value;
       selectEmployee(selectedEmployeeId)
       const selectedEmployeeName = selectedOption.label.split(' ').slice(1).join(' ')
       setRegisterLeave(stateName, selectedEmployeeName)
       setRegisterLeave('Code', selectedEmployeeId)
  };

  const handleInputChange = (value: any, inputName: string) => {
    console.log('Input Name:', inputName);
    console.log('Input Value:', value);
    if (selectedEmployee) {
      if (inputName === 'TotalDays') setLeaveDays(value, selectedEmployee.Salary)
      if (inputName === 'TSSRefund') setTssRefound(value)
      if (inputName === 'Position') console.log('hola')
       setRegisterLeave(inputName, value)
    }

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
          <LicenciasMedicasSelectComponent labelName='Colaborador' labelFor='Name' options={getEmployeeOptions()} isLoading={isLoading} onSelect={handleSelectEmployee} />
          <LicenciasMedicasInputComponent labelName='Posición' labelFor='Position' onChange={handleInputChange} isDisabled inputType='text' value={selectedEmployee?.Position} />
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Departamento' labelFor='departamento' isDisabled inputType='text' value={selectedEmployee?.Department} />
          <LicenciasMedicasInputComponent labelName='Area' labelFor='Area' onChange={handleInputChange} isDisabled inputType='text' value={selectedEmployee?.Area} />
        </div>

        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Diagnóstico' isRequired labelFor='Diagnostic' isDisabled={false} inputType='text' onChange={handleInputChange} value={registerLeave.Diagnostic} />
          <LicenciasMedicasInputComponent labelName='Horas diarias de trabajo' labelFor='TotalHours' isDisabled={false} inputType='number' onChange={handleInputChange} value={registerLeave.TotalHours}/>
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasDatePickerComponent labelName='Inicio de licencia' placeholder='Seleccionar fecha inicio....' />
          <LicenciasMedicasDatePickerComponent labelName='Fin de licencia' placeholder='Seleccionar fecha fin....' />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasDatePickerComponent labelName='Reingreso' placeholder='Seleccionar fecha Reingreso....' />
          <LicenciasMedicasDatePickerComponent labelName='Recibida' placeholder='Seleccionar fecha Recibida....' />
        </div>
        <div className='mt-2 flex justify-between gap-4'>
          <LicenciasMedicasInputComponent labelName='Cant dias' labelFor='TotalDays' isDisabled={false} inputType='number' onChange={handleInputChange} value={registerLeave.TotalDays} />
          <div className=' flex justify-between gap-4'>
            <LicenciasMedicasInputComponent labelName='Costo licencia' labelFor='LicenseCost' isDisabled inputType='number' value={registerLeave.LicenseCost} />
            <LicenciasMedicasInputComponent labelName='Rembolso TSS' labelFor='TSSRefund' isDisabled={false} inputType='number' onChange={handleInputChange} value={registerLeave.TSSRefund} />
          </div>

        </div>
        <div className='mt-2 flex justify-start'>
          <LicenciasMedicasTextareaComponent labelName='Comentario' labelFor='comentario' value={registerLeave.Comments}/>
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